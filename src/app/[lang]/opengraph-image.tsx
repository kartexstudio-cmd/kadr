import { ImageResponse } from "next/og";
import { defaultLocale, isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { site } from "@/lib/site";

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
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#060609",
          color: "#f2f3f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 34, fontWeight: 800 }}>
          {site.brand}
          <span style={{ color: "#d6ff4b" }}>.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 62, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            {lang === "ru"
              ? "Видео, 3D и 2D-анимация для брендов"
              : "Video, 3D and 2D animation for brands"}
          </div>
          <div style={{ fontSize: 28, color: "#8b8f9c", maxWidth: 900 }}>{t.meta.description}</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24 }}>
          <div style={{ width: 56, height: 6, background: "#d6ff4b" }} />
          <span style={{ color: "#8b8f9c" }}>{site.domain}</span>
        </div>
      </div>
    ),
    size,
  );
}
