import Image from "next/image";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { ContactForm } from "@/components/site/contact-form";
import { ClientsMarquee } from "@/components/site/clients-marquee";
import { ChatWidget } from "@/components/site/chat-widget";
import { ComparisonChart } from "@/components/site/comparison-chart";
import { QualityComparison } from "@/components/site/quality-comparison";
import { FullService } from "@/components/site/full-service";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/service-icons";
import { LightboxProvider } from "@/components/video/lightbox";
import { ReelCard } from "@/components/video/reel-card";
import { genres, reels } from "@/lib/content";
import { defaultLocale, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { seoPages } from "@/lib/seo-pages";
import { site } from "@/lib/site";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : defaultLocale;

  const t = getDictionary(lang);

  const nav = [
    { href: "#reels", label: t.nav.work },
    { href: "#services", label: t.nav.services },
    { href: "#process", label: t.nav.process },
    { href: "#faq", label: t.nav.faq },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization"],
    name: site.brand,
    alternateName: "Nitroreel Studio",
    description: t.meta.description,
    url: `${site.url}/${lang}`,
    logo: `${site.url}/brand/nitroreel-logo.png`,
    email: site.email,
    image: `${site.url}/media/hero-loop.jpg`,
    areaServed: "Worldwide",
    serviceType: t.services.items.map((item) => item.title),
    knowsAbout: [
      "UA video creatives",
      "mobile game trailers",
      "AI video production",
      "performance marketing video",
    ],
  };

  return (
    <LightboxProvider closeLabel={t.a11y.close}>
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
        labels={{
          openMenu: t.a11y.openMenu,
          closeMenu: t.a11y.closeMenu,
          langLabel: t.a11y.langLabel,
        }}
      />

      <main id="main">
        <Hero t={t.hero} scrollHint={t.a11y.scrollHint} />

        {/* Форматы и жанры */}
        <ClientsMarquee items={genres} label={t.genres.label} />

        {/* Вертикальные форматы */}
        <Section
          id="reels"
          eyebrow={t.reels.eyebrow}
          title={t.reels.title}
          subtitle={t.reels.subtitle}
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
            {reels.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.07}>
                <ReelCard
                  source={item.video}
                  title={item.title[lang]}
                  platform={item.platform}
                  playLabel={t.a11y.play}
                  isNew={item.isNew}
                  newLabel={t.reels.newLabel}
                />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Работы - временно скрыто по просьбе владельца 2026-08-15,
        текущие кейсы не устраивают, вернуть после замены креативов */}
        {/* <Section
          id="work"
          eyebrow={t.work.eyebrow}
          title={t.work.title}
          subtitle={t.work.subtitle}
          className="bg-ink-soft"
        >
          <WorkGrid
            works={works}
            lang={lang}
            filterAllLabel={t.work.filterAll}
            filterLabels={t.work.filters}
            resultLabel={t.work.result}
            playLabel={t.a11y.play}
          />
        </Section> */}

        {/* Качество картинки */}
        <Section
          eyebrow={t.quality.eyebrow}
          title={t.quality.title}
          subtitle={t.quality.subtitle}
          className="bg-ink-soft"
        >
          <QualityComparison t={t.quality} />
        </Section>

        {/* Под ключ */}
        <Section
          eyebrow={t.fullService.eyebrow}
          title={t.fullService.title}
          subtitle={t.fullService.subtitle}
          className="bg-ink-soft"
        >
          <FullService t={t.fullService} />
        </Section>

        {/* Услуги */}
        <Section
          id="services"
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
        >
          <div className="-mt-6 mb-4 max-w-2xl divide-y divide-line overflow-hidden rounded-card border border-line">
            {t.services.priceItems.map((item) => (
              <div
                key={item.label}
                className="flex items-baseline justify-between gap-4 px-5 py-3.5"
              >
                <span className="text-sm text-muted">{item.label}</span>
                <span className="shrink-0 font-display text-sm font-bold">{item.price}</span>
              </div>
            ))}
          </div>
          <p className="mb-8 text-sm text-muted">{t.services.priceNote}</p>

          <details className="group mb-10 max-w-2xl rounded-card border border-line p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold [&::-webkit-details-marker]:hidden">
              {t.services.batchDetails.title}
              <span
                aria-hidden="true"
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line transition-transform duration-300 group-open:rotate-45"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {t.services.batchDetails.items.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-accent">{t.services.batchDetails.note}</p>
          </details>

          <div className="grid gap-5 md:grid-cols-3">
            {t.services.items.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <article className="card group h-full p-7 transition-colors hover:border-accent/40 md:p-9">
                  <span
                    aria-hidden="true"
                    className="grid h-11 w-11 place-items-center rounded-full border border-accent/30 bg-accent/10 text-accent"
                  >
                    <ServiceIcon index={index} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-muted">{service.text}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-full border border-line px-3 py-1.5 text-xs text-muted"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 border-t border-line pt-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {t.services.moreLabel}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {seoPages.map((page) => (
                <a
                  key={page.slug}
                  href={`/${lang}/services/${page.slug}`}
                  className="rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-accent/40 hover:text-fg"
                >
                  {page.h1[lang]}
                </a>
              ))}
            </div>
          </div>
        </Section>

        {/* Процесс */}
        <Section
          id="process"
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          className="bg-ink-soft"
        >
          <ol className="grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {t.process.steps.map((step, index) => (
              <li key={step.title} className="bg-ink-soft p-7 md:p-8">
                <span className="font-display text-5xl font-extrabold text-line">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Цифры */}
        <Section title={t.stats.title}>
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {t.stats.items.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.06}>
                <div className="border-t border-line pt-5">
                  <dt className="text-sm text-muted">{stat.label}</dt>
                  <dd className="mt-2 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-none">
                    {stat.value}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Section>

        {/* AI против классики */}
        <Section
          eyebrow={t.comparison.eyebrow}
          title={t.comparison.title}
          subtitle={t.comparison.subtitle}
          className="bg-ink-soft"
        >
          <ComparisonChart t={t.comparison} />
        </Section>

        {/* FAQ */}
        <Section id="faq" eyebrow={t.faq.eyebrow} title={t.faq.title} className="bg-ink-soft">
          <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
            {t.faq.items.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-bold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line transition-transform duration-300 group-open:rotate-45"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl pr-14 leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* Контакты */}
        <Section
          id="contact"
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        >
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

              <div className="flex items-center gap-4">
                <Image
                  src="/media/peter-pavlov.jpg"
                  alt={t.contact.person.photoAlt}
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-full border border-line object-cover"
                />
                <div>
                  <p className="font-display text-base font-bold">{t.contact.person.name}</p>
                  <p className="text-sm text-muted">{t.contact.person.role}</p>
                </div>
              </div>

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
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted transition-colors hover:text-fg"
                >
                  WhatsApp: {site.whatsappDisplay}
                </a>
              </div>
            </div>

            <ContactForm lang={lang} t={t.contact.form} />
          </div>
        </Section>
      </main>

      <Footer lang={lang} t={t.footer} nav={nav} />

      <ChatWidget lang={lang} t={t.chat} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </LightboxProvider>
  );
}
