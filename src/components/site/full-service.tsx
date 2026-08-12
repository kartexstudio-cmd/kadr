import type { Dictionary } from "@/lib/i18n/dictionaries";

export function FullService({ t }: { t: Dictionary["fullService"] }) {
  return (
    <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {t.items.map((item) => (
        <div
          key={item.title}
          className="relative rounded-card border border-line bg-panel p-6"
        >
          <span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center rounded-full bg-accent text-accent-ink"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <h3 className="mt-3 flex items-center gap-2 text-lg font-semibold text-fg">
            {item.title}
            {item.optional ? (
              <span className="rounded-full border border-line px-2 py-0.5 text-[10px] font-normal uppercase tracking-wide text-muted">
                {t.optionalLabel}
              </span>
            ) : null}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
