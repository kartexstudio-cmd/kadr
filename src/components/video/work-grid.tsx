"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { WorkCard } from "@/components/video/work-card";
import type { WorkCategory, WorkItem } from "@/lib/content";
import type { Locale } from "@/lib/i18n/config";

export function WorkGrid({
  works,
  lang,
  filterAllLabel,
  filterLabels,
  resultLabel,
  playLabel,
}: {
  works: WorkItem[];
  lang: Locale;
  filterAllLabel: string;
  filterLabels: Record<WorkCategory, string>;
  resultLabel: string;
  playLabel: string;
}) {
  const [active, setActive] = useState<WorkCategory | "all">("all");

  const categories = useMemo(
    () => Array.from(new Set(works.map((item) => item.category))),
    [works],
  );

  const filtered = active === "all" ? works : works.filter((item) => item.category === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={() => setActive("all")}
          aria-pressed={active === "all"}
          className={`rounded-full border px-4 py-2 text-sm transition-colors ${
            active === "all"
              ? "border-accent bg-accent text-accent-ink"
              : "border-line text-muted hover:border-accent/40 hover:text-fg"
          }`}
        >
          {filterAllLabel}
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              active === category
                ? "border-accent bg-accent text-accent-ink"
                : "border-line text-muted hover:border-accent/40 hover:text-fg"
            }`}
          >
            {filterLabels[category]}
          </button>
        ))}
      </div>

      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, index) => (
          <Reveal key={item.id} delay={(index % 3) * 0.08}>
            <WorkCard
              source={item.video}
              client={item.client}
              title={item.title[lang]}
              tag={item.tag[lang]}
              metric={item.metric[lang]}
              duration={item.duration}
              resultLabel={resultLabel}
              playLabel={playLabel}
              priority={index < 3}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
