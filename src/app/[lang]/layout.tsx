import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, Manrope } from "next/font/google";
import "@/app/globals.css";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { defaultLocale, isLocale, locales } from "@/lib/i18n/config";
import { site } from "@/lib/site";
import { GoogleAdsTag } from "@/components/site/google-ads-tag";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : defaultLocale;
  const t = getDictionary(lang);

  return {
    metadataBase: new URL(site.url),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(locales.map((locale) => [locale, `/${locale}`])),
    },
    openGraph: {
      type: "website",
      siteName: site.brand,
      locale: lang === "ru" ? "ru_RU" : "en_US",
      title: t.meta.title,
      description: t.meta.description,
      url: `/${lang}`,
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : defaultLocale;

  return (
    <html lang={lang} className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-dvh antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
        <GoogleAdsTag />
      </body>
    </html>
  );
}
