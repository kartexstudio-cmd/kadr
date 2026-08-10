"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useRef } from "react";

const wrap = (min: number, max: number, value: number) => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

export function ClientsMarquee({ items, label }: { items: readonly string[]; label: string }) {
  const reduced = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothed = useSpring(velocity, { damping: 50, stiffness: 400 });
  // clamp: false — при резком скролле строка разгоняется сильнее, чем в размеченном диапазоне.
  const factor = useTransform(smoothed, [-1200, 0, 1200], [-4, 0, 4], { clamp: false });
  const direction = useRef(1);
  const x = useTransform(baseX, (value) => `${wrap(-50, 0, value)}%`);

  useAnimationFrame((_, delta) => {
    if (reduced) return;

    const current = factor.get();
    if (current < 0) direction.current = -1;
    else if (current > 0) direction.current = 1;

    let moveBy = direction.current * -1.6 * (delta / 1000);
    moveBy += direction.current * moveBy * current;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <section aria-label={label} className="border-y border-line bg-ink-soft py-8">
      <div className="shell mb-6">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">{label}</p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <motion.ul style={{ x }} className="flex w-max items-center gap-16 px-8">
          {[...items, ...items].map((client, index) => (
            <li
              key={`${client}-${index}`}
              aria-hidden={index >= items.length}
              className="font-display text-2xl font-bold tracking-tight text-muted/60"
            >
              {client}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
