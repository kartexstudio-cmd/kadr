"use client";

import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { works } from "@/lib/content";
import { resolveVideo } from "@/lib/video";
import { useLightbox } from "@/components/video/lightbox";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

// Позиция барабана растёт бесконечно, а на экран попадает остаток от числа кейсов —
// поэтому ленты хватает короткой: один круг плюс дубль первой плитки на стык.
const CYCLE = works.length;
const TILES = CYCLE + 1;
const START = [0, 2, 4];

const posters = works.map((item) => resolveVideo(item.video).poster);
const strip = Array.from({ length: TILES }, (_, index) => posters[index % CYCLE]);

const wrap = (value: number) => ((value % CYCLE) + CYCLE) % CYCLE;
const toPercent = (value: number) => `${(-wrap(value) / TILES) * 100}%`;

export function CaseSlots({
  lang,
  t,
  playLabel,
}: {
  lang: Locale;
  t: Dictionary["slots"];
  playLabel: string;
}) {
  const reduced = useReducedMotion();
  const openLightbox = useLightbox();

  const position0 = useMotionValue(START[0]);
  const position1 = useMotionValue(START[1]);
  const position2 = useMotionValue(START[2]);
  const positions = [position0, position1, position2];

  const y0 = useTransform(position0, toPercent);
  const y1 = useTransform(position1, toPercent);
  const y2 = useTransform(position2, toPercent);
  const offsets = [y0, y1, y2];

  const [landed, setLanded] = useState<(number | null)[]>([null, null, null]);
  const [spins, setSpins] = useState(0);
  const busy = useRef(false);
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    if (busy.current) return;
    busy.current = true;
    setSpinning(true);
    setSpins((value) => value + 1);
    setLanded([null, null, null]);

    const results = positions.map(() => Math.floor(Math.random() * CYCLE));

    if (reduced) {
      positions.forEach((position, index) => position.set(results[index]));
      setLanded(results);
      setSpinning(false);
      busy.current = false;
      return;
    }

    let stopped = 0;
    positions.forEach((position, index) => {
      const from = position.get();
      const target = from + CYCLE * (3 + index) + wrap(results[index] - from);

      animate(position, target, {
        duration: 1.9 + index * 0.5,
        ease: [0.1, 0.62, 0.18, 1],
        onComplete: () => {
          setLanded((previous) => {
            const next = [...previous];
            next[index] = results[index];
            return next;
          });
          stopped += 1;
          if (stopped === positions.length) {
            setSpinning(false);
            busy.current = false;
          }
        },
      });
    });
  };

  const complete = landed.every((value) => value !== null);
  const jackpot = complete && landed[0] === landed[1] && landed[1] === landed[2];
  const status = spinning
    ? t.spinning
    : spins === 0
      ? t.idle
      : jackpot
        ? t.jackpot
        : complete
          ? t.result
          : t.spinning;

  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex items-stretch justify-center gap-5">
        <div
          className={`card relative flex-1 p-4 transition-shadow duration-500 md:p-6 ${
            jackpot ? "shadow-[0_0_60px_-12px_var(--color-accent)]" : ""
          }`}
        >
          <div
            className={`mb-4 flex items-center justify-between gap-4 rounded-full border px-4 py-2 transition-colors ${
              jackpot ? "border-accent/60 bg-accent/10" : "border-line bg-ink/60"
            }`}
          >
            <span
              aria-live="polite"
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent"
            >
              {status}
            </span>
            <span className="font-mono text-[11px] text-muted">
              {t.spins}: {spins}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2.5 md:gap-4">
            {offsets.map((offset, index) => {
              const item = landed[index] === null ? null : works[landed[index] as number];
              const video = item ? resolveVideo(item.video, { autoplay: true, muted: true, loop: true }) : null;

              return (
                <button
                  key={index}
                  type="button"
                  disabled={!item}
                  data-cursor={item ? "play" : undefined}
                  aria-label={item ? `${playLabel}: ${item.title[lang]}` : undefined}
                  onClick={() =>
                    item &&
                    openLightbox({
                      source: item.video,
                      title: item.title[lang],
                      subtitle: item.client,
                      aspect: "16/9",
                    })
                  }
                  className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-line bg-ink shadow-[inset_0_0_50px_rgba(0,0,0,0.85)]"
                >
                  <motion.div style={{ y: offset }} className="absolute inset-x-0 top-0">
                    {strip.map((poster, tile) => (
                      <div
                        key={tile}
                        className="aspect-[3/4] w-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${poster})` }}
                      />
                    ))}
                  </motion.div>

                  {/* Размытие вешаем на окно, а не на ленту: у ленты высота ~9600px,
                      и filter по такой площади кладёт композитор. */}
                  {!item && <span className="pointer-events-none absolute inset-0 backdrop-blur-[3px]" />}

                  {item && video?.kind === "file" && !reduced && (
                    <video
                      key={item.id}
                      src={video.src}
                      poster={video.poster}
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="none"
                      aria-hidden="true"
                      tabIndex={-1}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}

                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

                  {item && (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-x-2 bottom-2 text-left"
                    >
                      <span className="block truncate text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                        {item.client}
                      </span>
                      <span className="mt-0.5 block truncate font-display text-xs font-bold leading-tight">
                        {item.tag[lang]}
                      </span>
                    </motion.span>
                  )}

                  {/* Стеклянный блик, чтобы окно читалось как физическое */}
                  <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-white/8 via-transparent to-transparent" />
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={spin}
          aria-label={t.spin}
          className="hidden shrink-0 flex-col items-center justify-end pb-2 md:flex"
        >
          <span className="relative block h-52 w-16">
            <motion.span
              animate={{ rotate: spinning ? 64 : -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 13 }}
              style={{ transformOrigin: "50% 100%" }}
              className="absolute bottom-4 left-1/2 block h-44 w-2 -translate-x-1/2 rounded-full bg-gradient-to-b from-surface-2 to-line"
            >
              <span className="absolute -top-5 left-1/2 block h-10 w-10 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_28px_-2px_var(--color-accent)] transition-transform duration-200 group-active:scale-95" />
            </motion.span>
            <span className="absolute bottom-0 left-1/2 block h-7 w-16 -translate-x-1/2 rounded-full border border-line bg-surface-2" />
          </span>
          <span className="mt-4 text-[11px] uppercase tracking-[0.16em] text-muted">{t.hint}</span>
        </button>
      </div>

      <button
        type="button"
        onClick={spin}
        className="mt-5 w-full rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-ink transition hover:brightness-110 disabled:opacity-60 md:hidden"
        disabled={spinning}
      >
        {t.spin}
      </button>

      <dl className="mt-6 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-3">
        {landed.map((value, index) => {
          const item = value === null ? null : works[value];
          return (
            <div key={index} className="bg-ink-soft p-5">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                {item ? item.client : "—"}
              </dt>
              <dd className="mt-2 min-h-12 font-display text-base font-bold leading-snug">
                {item ? (
                  <motion.span
                    key={item.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-accent"
                  >
                    {item.metric[lang]}
                  </motion.span>
                ) : (
                  <span className="block text-muted/50">{t.empty}</span>
                )}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
