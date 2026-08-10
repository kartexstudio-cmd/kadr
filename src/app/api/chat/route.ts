import { NextResponse } from "next/server";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

// Свой лимит держим заметно ниже бесплатной квоты Gemini (у gemini-flash-latest
// это порядка 10 запросов в минуту) — так виджет деградирует на наших условиях,
// а не ловит 429 от Google посреди диалога.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 6;
const attempts = new Map<string, number[]>();

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  return recent.length > RATE_LIMIT_MAX;
}

type ChatTurn = { role: "user" | "model"; text: string };

// Промпт собирается из тех же данных, что показаны на сайте (FAQ, услуги, контакты) —
// один источник правды. Правишь dictionaries.ts — бот отвечает по-новому без правок здесь.
function buildSystemPrompt(locale: Locale): string {
  const t = getDictionary(locale);
  const faq = t.faq.items.map((item) => `Q: ${item.q}\nA: ${item.a}`).join("\n\n");
  const services = t.services.items.map((item) => `- ${item.title}: ${item.text}`).join("\n");
  const languageName = locale === "ru" ? "русском" : "английском (English)";

  return [
    `Ты — ассистент поддержки на сайте студии ${site.brand}: видеокреативы для мобильных игр` +
      ` (UA/перформанс-креативы, трейлеры, cinematic-ролики, 3D/2D-анимация).`,
    `Отвечай кратко — 2–4 предложения, по делу, только на основе информации ниже.`,
    `Всегда отвечай на ${languageName} языке, вне зависимости от языка вопроса.`,
    `Если вопрос выходит за рамки этой информации или нужен точный расчёт под конкретный` +
      ` проект — честно скажи, что не знаешь точного ответа, и предложи оставить заявку в` +
      ` форме на сайте или написать в Telegram ${site.telegramHandle}.`,
    `Никогда не придумывай цифры, сроки, цены или условия, которых нет в этой справке.`,
    ``,
    `УСЛУГИ:`,
    services,
    ``,
    `ЧАСТЫЕ ВОПРОСЫ:`,
    faq,
    ``,
    `Контакты: ${site.email}, Telegram ${site.telegramHandle}.`,
  ].join("\n");
}

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const body = await request.json().catch(() => null);
  const message = typeof body?.message === "string" ? body.message.trim() : "";
  const rawLocale = typeof body?.locale === "string" ? body.locale : "";
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const history: ChatTurn[] = Array.isArray(body?.history) ? body.history.slice(-8) : [];

  if (!message || message.length > 800) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "rate_limit" }, { status: 429 });
  }

  const contents = [
    ...history
      .filter((turn) => turn?.role === "user" || turn?.role === "model")
      .map((turn) => ({
        role: turn.role,
        parts: [{ text: String(turn.text ?? "").slice(0, 800) }],
      })),
    { role: "user", parts: [{ text: message }] },
  ];

  const requestBody = JSON.stringify({
    system_instruction: { parts: [{ text: buildSystemPrompt(locale) }] },
    contents,
    // thinkingLevel: "low" — модели линейки Gemini 3 не дают полностью выключить
    // reasoning, а он ест maxOutputTokens раньше самого ответа. Без этого при низком
    // maxOutputTokens ответ обрезается до пустоты (известная проблема в комьюнити).
    // Держим "low" + запас токенов, чтобы ответ точно влезал.
    generationConfig: {
      maxOutputTokens: 1024,
      temperature: 0.4,
      thinkingConfig: { thinkingLevel: "low" },
    },
  });

  // Долгоживущий Node-процесс переиспользует keep-alive сокеты, и изредка внешний сервер
  // рвёт соединение между запросами (ECONNRESET) прежде, чем мы успели им воспользоваться.
  // Один ретрай на чистой попытке решает это — тело запроса идемпотентно.
  let lastError: unknown;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: requestBody,
          signal: AbortSignal.timeout(15_000),
        },
      );

      if (!response.ok) {
        console.error("[chat] gemini failed", response.status, await response.text());
        return NextResponse.json({ error: "upstream" }, { status: 502 });
      }

      const data = await response.json();
      const reply: string | undefined = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!reply) {
        return NextResponse.json({ error: "empty" }, { status: 502 });
      }

      return NextResponse.json({ reply });
    } catch (error) {
      lastError = error;
    }
  }

  console.error("[chat] request failed after retry", lastError);
  return NextResponse.json({ error: "upstream" }, { status: 502 });
}
