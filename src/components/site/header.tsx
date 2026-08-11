"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { locales, localeNames, type Locale } from "@/lib/i18n/config";
import { site } from "@/lib/site";

type NavItem = { href: string; label: string };

export function Header({
  lang,
  nav,
  cta,
  ctaHref = "#contact",
  labels,
}: {
  lang: Locale;
  nav: NavItem[];
  cta: string;
  ctaHref?: string;
  labels: { openMenu: string; closeMenu: string; langLabel: string };
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-b border-line bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-6 md:h-20">
        <Link
          href={`/${lang}`}
          className="font-display text-lg font-extrabold tracking-[-0.05em]"
          onClick={() => setMenuOpen(false)}
        >
          {site.brand}
          <span className="text-accent">.</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <div
            role="group"
            aria-label={labels.langLabel}
            className="flex items-center rounded-full border border-line p-0.5"
          >
            {locales.map((locale) => (
              <Link
                key={locale}
                href={`/${locale}`}
                hrefLang={locale}
                aria-current={locale === lang ? "true" : undefined}
                onClick={() => {
                  document.cookie = `locale=${locale}; path=/; max-age=31536000; samesite=lax`;
                }}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                  locale === lang ? "bg-fg text-ink" : "text-muted hover:text-fg"
                }`}
              >
                {localeNames[locale]}
              </Link>
            ))}
          </div>

          <a
            href={ctaHref}
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition hover:brightness-110 sm:inline-flex"
          >
            {cta}
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? labels.closeMenu : labels.openMenu}
            className="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-0.5 w-4 bg-fg transition-transform duration-300 ${
                  menuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-4 bg-fg transition-transform duration-300 ${
                  menuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-line bg-ink lg:hidden"
      >
        <nav aria-label="Mobile" className="shell flex flex-col py-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-line/60 py-4 font-display text-xl font-bold last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href={ctaHref}
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-ink"
          >
            {cta}
          </a>
        </nav>
      </div>
    </header>
  );
}
