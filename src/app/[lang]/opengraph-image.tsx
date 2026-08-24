import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { defaultLocale, isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { site } from "@/lib/site";

// Читаем один раз при старте модуля (значение не зависит от запроса) — та же логика,
// что для шрифтов в примере Next.js. Локально в Windows-деве `next/og` падает на
// растровых <img> с ошибкой резвг "Input buffer contains unsupported image format" —
// баг конкретно этого окружения (Turbopack + resvg на Windows), на проде (Vercel/Linux)
// работает. Проверяй эту страницу после деплоя, не через локальный dev-сервер.
const logoBuffer = await readFile(join(process.cwd(), "public/brand/nitroreel-logo-og.png"));
const logoSrc = new Uint8Array(logoBuffer).buffer;

const bgBuffer = await readFile(join(process.cwd(), "public/media/quality-clean-01.jpg"));
const bgSrc = new Uint8Array(bgBuffer).buffer;

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : defaultLocale;
  const t = getDictionary(lang);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#060609",
          color: "#f2f3f5",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- next/og рендерит через satori, свой <img> обязателен */}
        <img
          src={bgSrc as unknown as string}
          alt=""
          width={1200}
          height={630}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(180deg, rgba(6,6,9,0.75) 0%, rgba(6,6,9,0.15) 32%, rgba(6,6,9,0.55) 78%, rgba(6,6,9,0.92) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 72,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- next/og рендерит через satori, свой <img> обязателен */}
          <img src={logoSrc as unknown as string} alt={site.brand} width={220} height={74} />

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ fontSize: 62, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
              {lang === "ru"
                ? "Видеокреативы для мобильных игр"
                : "Video creatives for mobile games"}
            </div>
            <div style={{ fontSize: 28, color: "#c7cad3", maxWidth: 900 }}>{t.meta.description}</div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24 }}>
            <div style={{ width: 56, height: 6, background: "#d6ff4b" }} />
            <span style={{ color: "#c7cad3" }}>{site.domain}</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
