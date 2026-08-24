"use client";

import { motion, useReducedMotion } from "motion/react";
import { HeroLoop } from "@/components/video/hero-loop";
import { Magnetic } from "@/components/ui/magnetic";
import { CountUp } from "@/components/ui/count-up";
import { heroVideo } from "@/lib/content";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function Hero({ t, scrollHint }: { t: Dictionary["hero"]; scrollHint: string }) {
  const reduced = useReducedMotion();

  const rise = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  // Слова заголовка появляются по одному, с блюром вместо резкого сдвига —
  // так глаз читает текст плавнее, чем при единой анимации всего блока.
  const leadWords = t.titleLead.split(" ");
  const tailWords = t.titleTail.split(" ");
  const wordReveal = (index: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 10, filter: "blur(8px)" },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          transition: { duration: 0.9, delay: 0.15 + index * 0.055, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section className="relative isolate grain flex min-h-dvh items-center overflow-hidden pb-16 pt-28 md:pt-32">
      <HeroLoop source={heroVideo} />

      <div className="shell relative">
        <motion.p {...rise(0)} className="eyebrow">
          {t.eyebrow}
        </motion.p>

        <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.6rem,7.2vw,5.5rem)] font-extrabold leading-[0.98]">
          {leadWords.map((word, i) => (
            <span key={`lead-${i}`}>
              <motion.span className="inline-block" {...wordReveal(i)}>
                {word}
              </motion.span>{" "}
            </span>
          ))}
          <motion.span
            className="relative inline-block whitespace-nowrap text-accent"
            {...wordReveal(leadWords.length)}
          >
            {t.titleAccent}
            <svg
              aria-hidden="true"
              viewBox="0 0 300 12"
              preserveAspectRatio="none"
              className="absolute -bottom-1 left-0 h-2 w-full text-accent/50"
            >
              <path d="M2 8c60-5 130-7 296-4" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </motion.span>{" "}
          {tailWords.map((word, i) => (
            <span key={`tail-${i}`}>
              {i > 0 && " "}
              <motion.span className="inline-block" {...wordReveal(leadWords.length + 1 + i)}>
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p {...rise(0.16)} className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
          {t.subtitle}
        </motion.p>

        <motion.div {...rise(0.24)} className="mt-10 flex flex-wrap items-center gap-4">
          <Magnetic>
            <a
              href="#contact"
              className="rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-ink transition hover:brightness-110"
            >
              {t.primary}
            </a>
          </Magnetic>

          <Magnetic strength={0.25}>
            <a
              href="#reels"
              className="inline-flex items-center gap-3 rounded-full border border-line bg-ink/40 px-6 py-3.5 font-medium backdrop-blur-sm transition hover:border-accent/60"
            >
              {t.secondary}
            </a>
          </Magnetic>
        </motion.div>

        <motion.dl
          {...rise(0.34)}
          className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-line pt-8"
        >
          {t.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-extrabold">
                  <CountUp value={stat.value} />
                </span>
                <span className="mt-1 block text-sm text-muted">{stat.label}</span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <span className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center text-[11px] uppercase tracking-[0.2em] text-muted md:flex">
        {scrollHint}
      </span>
    </section>
  );
}
