import type { Dictionary } from "@/lib/i18n/dictionaries";

export function FullService({ t }: { t: Dictionary["fullService"] }) {
  return (
    <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {t.items.map((item, index) => (
        <div
          key={item.title}
          className="relative rounded-card border border-line bg-panel p-6"
        >
          <span className="text-xs font-mono text-muted">
            {String(index + 1).padStart(2, "0")}
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
