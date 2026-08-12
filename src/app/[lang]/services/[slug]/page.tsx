import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { ContactForm } from "@/components/site/contact-form";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { defaultLocale, isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getSeoPage, seoPages } from "@/lib/seo-pages";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => seoPages.map((page) => ({ lang, slug: page.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang: raw, slug } = await params;
  const lang = isLocale(raw) ? raw : defaultLocale;
  const page = getSeoPage(slug);
  if (!page) return {};

  return {
    metadataBase: new URL(site.url),
    title: page.metaTitle[lang],
    description: page.metaDescription[lang],
    alternates: {
      canonical: `/${lang}/services/${slug}`,
      languages: Object.fromEntries(locales.map((locale) => [locale, `/${locale}/services/${slug}`])),
    },
    openGraph: {
      type: "website",
      siteName: site.brand,
      locale: lang === "ru" ? "ru_RU" : "en_US",
      title: page.metaTitle[lang],
      description: page.metaDescription[lang],
      url: `/${lang}/services/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle[lang],
      description: page.metaDescription[lang],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: raw, slug } = await params;
  const lang = isLocale(raw) ? raw : defaultLocale;
  const page = getSeoPage(slug);
  if (!page) notFound();

  const t = getDictionary(lang);

  const nav = [
    { href: `/${lang}#work`, label: t.nav.work },
    { href: `/${lang}#services`, label: t.nav.services },
    { href: `/${lang}#process`, label: t.nav.process },
    { href: `/${lang}#faq`, label: t.nav.faq },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1[lang],
    description: page.metaDescription[lang],
    url: `${site.url}/${lang}/services/${slug}`,
    provider: {
      "@type": "ProfessionalService",
      name: site.brand,
      email: site.email,
      url: site.url,
    },
    areaServed: "Worldwide",
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:font-semibold focus:text-accent-ink"
      >
        {t.a11y.skip}
      </a>

      <Header
        lang={lang}
        nav={nav}
        cta={t.nav.contact}
        ctaHref={`/${lang}#contact`}
        labels={{
          openMenu: t.a11y.openMenu,
          closeMenu: t.a11y.closeMenu,
          langLabel: t.a11y.langLabel,
        }}
      />

      <main id="main">
        <div className="pb-16 pt-32 md:pb-20 md:pt-40">
          <div className="shell">
            <Reveal>
              <p className="eyebrow mb-5">{page.eyebrow[lang]}</p>
              <h1 className="max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
                {page.h1[lang]}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{page.lead[lang]}</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={`/${lang}#contact`}
                  className="rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-ink transition hover:brightness-110"
                >
                  {t.nav.contact}
                </a>
                <a
                  href={`/${lang}#work`}
                  className="rounded-full border border-line px-6 py-3.5 text-sm font-semibold transition-colors hover:border-accent/40"
                >
                  {t.work.eyebrow}
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <Section className="pt-0 md:pt-0">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="space-y-6">
              {page.intro[lang].map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="grid gap-3 self-start">
              {page.bullets[lang].map((bullet) => (
                <li
                  key={bullet}
                  className="card flex items-start gap-3 p-5 text-sm leading-relaxed"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-accent-ink"
                  >
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section eyebrow={t.faq.eyebrow} title={t.faq.title} className="bg-ink-soft">
          <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
            {page.faq.map((item) => (
              <details key={item.q[lang]} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-bold [&::-webkit-details-marker]:hidden">
                  {item.q[lang]}
                  <span
                    aria-hidden="true"
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line transition-transform duration-300 group-open:rotate-45"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl pr-14 leading-relaxed text-muted">{item.a[lang]}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle}>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
            <div className="space-y-8">
              <ul className="space-y-4">
                {t.contact.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-muted">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-accent-ink"
                    >
                      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>

              <div className="space-y-2">
                <a
                  href={`mailto:${site.email}`}
                  className="block font-display text-2xl font-bold transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
                <a
                  href={site.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted transition-colors hover:text-fg"
                >
                  {site.telegramHandle}
                </a>
              </div>
            </div>

            <ContactForm lang={lang} t={t.contact.form} />
          </div>
        </Section>
      </main>

      <Footer lang={lang} t={t.footer} nav={nav} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
