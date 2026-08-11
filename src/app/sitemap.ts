import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { seoPages } from "@/lib/seo-pages";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const home = locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === "ru" ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(locales.map((alt) => [alt, `${site.url}/${alt}`])),
    },
  }));

  const services = seoPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${site.url}/${locale}/services/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: locale === "ru" ? 0.8 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((alt) => [alt, `${site.url}/${alt}/services/${page.slug}`]),
        ),
      },
    })),
  );

  return [...home, ...services];
}
