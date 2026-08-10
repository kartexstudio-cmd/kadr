import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { site } from "@/lib/site";

export function Footer({
  lang,
  t,
  nav,
}: {
  lang: Locale;
  t: Dictionary["footer"];
  nav: { href: string; label: string }[];
}) {
  const socials = [
    { href: site.behance, label: "Behance" },
    { href: site.instagram, label: "Instagram" },
    { href: site.youtube, label: "YouTube" },
  ];

  return (
    <footer className="border-t border-line bg-ink-soft">
      <div className="shell py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href={`/${lang}`} className="font-display text-2xl font-extrabold tracking-[-0.05em]">
              {site.brand}
              <span className="text-accent">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted">{t.tagline}</p>
          </div>

          <nav aria-label={t.navTitle}>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {t.navTitle}
            </h2>
            <ul className="space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-muted transition-colors hover:text-fg">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {t.contactTitle}
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="text-muted transition-colors hover:text-fg">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.telegram}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-muted transition-colors hover:text-fg"
                >
                  {site.telegramHandle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {t.socialTitle}
            </h2>
            <ul className="space-y-2.5 text-sm">
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.brand}. {t.rights}
          </p>
          <p>{t.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
