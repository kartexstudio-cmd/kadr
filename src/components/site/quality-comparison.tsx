import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function QualityComparison({ t }: { t: Dictionary["quality"] }) {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {t.pairs.map((pair, index) => (
        <div key={index} className="grid grid-cols-2 gap-3 sm:gap-5">
          <figure>
            <div className="relative aspect-video overflow-hidden rounded-card border border-line opacity-80 grayscale-[15%]">
              <Image
                src={pair.typical}
                alt={t.typicalLabel}
                fill
                sizes="(min-width: 640px) 40vw, 45vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 flex items-center gap-2 text-xs text-muted sm:text-sm">
              <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-line" />
              {t.typicalLabel}
            </figcaption>
          </figure>

          <figure>
            <div className="relative aspect-video overflow-hidden rounded-card border border-accent/50 shadow-[0_0_40px_-16px_var(--color-accent)]">
              <Image
                src={pair.clean}
                alt={t.oursLabel}
                fill
                sizes="(min-width: 640px) 40vw, 45vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 flex items-center gap-2 text-xs font-semibold text-accent sm:text-sm">
              <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {t.oursLabel}
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
}
