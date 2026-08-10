import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "ru" ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(locales.map((alt) => [alt, `${site.url}/${alt}`])),
    },
  }));
}
