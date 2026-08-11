"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function ComparisonChart({ t }: { t: Dictionary["comparison"] }) {
  const reduced = useReducedMotion();

  return (
    <div className="mx-auto max-w-3xl space-y-10">
      {t.items.map((item, index) => (
        <div key={item.metric}>
          <p className="mb-4 font-display text-lg font-bold">{item.metric}</p>
          <div className="space-y-3">
            <Bar
              label={t.classicLabel}
              value={item.classicValue}
              width={item.classicWidth}
              delay={index * 0.15}
              reduced={reduced}
              tone="muted"
            />
            <Bar
              label={t.aiLabel}
              value={item.aiValue}
              width={item.aiWidth}
              delay={index * 0.15 + 0.12}
              reduced={reduced}
              tone="accent"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function Bar({
  label,
  value,
  width,
  delay,
  reduced,
  tone,
}: {
  label: string;
  value: string;
  width: number;
  delay: number;
  reduced: boolean | null;
  tone: "muted" | "accent";
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-40 shrink-0 text-sm text-muted sm:w-48">{label}</span>
      <div className="relative h-8 flex-1 overflow-hidden rounded-full bg-surface-2">
        <motion.div
          className={`h-full rounded-full ${tone === "accent" ? "bg-accent" : "bg-line"}`}
          style={{ transformOrigin: "left", width: `${width}%` }}
          initial={reduced ? undefined : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <span
        className={`w-28 shrink-0 text-right font-display text-sm font-bold sm:w-32 ${
          tone === "accent" ? "text-accent" : "text-fg"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
