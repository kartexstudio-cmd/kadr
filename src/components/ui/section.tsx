import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  aside,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 md:py-28 ${className}`}>
      <div className="shell">
        {(eyebrow || title) && (
          <Reveal className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
              {title && (
                <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.08] sm:text-4xl md:text-5xl">
                  {title}
                </h2>
              )}
              {subtitle && <p className="mt-5 max-w-xl text-base text-muted">{subtitle}</p>}
            </div>
            {aside}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
