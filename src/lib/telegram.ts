import type { Locale } from "@/lib/i18n/config";
import { site } from "@/lib/site";

export type LeadNotification = {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
  locale: Locale;
};

/** `skipped` — канал не настроен; это не ошибка, сайт должен работать без ключей. */
export type DeliveryResult = "ok" | "skipped" | "failed";

const TIMEOUT_MS = 5_000;

export async function notifyTelegram(lead: LeadNotification): Promise<DeliveryResult> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return "skipped";

  const text = [
    `Новая заявка с сайта ${site.brand}`,
    "",
    `Имя: ${lead.name}`,
    `Email: ${lead.email}`,
    `Компания: ${lead.company || "—"}`,
    `Бюджет: ${lead.budget || "—"}`,
    `Язык страницы: ${lead.locale}`,
    "",
    lead.message,
  ].join("\n");

  try {
    // Без parse_mode: в имени или тексте клиента может быть `_`, `*` или `<`,
    // и разметка сломает отправку — заявка потеряется из-за апострофа.
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });

    if (!response.ok) {
      console.error("[leads] telegram failed", response.status, await response.text());
      return "failed";
    }

    return "ok";
  } catch (error) {
    console.error("[leads] telegram failed", error);
    return "failed";
  }
}
