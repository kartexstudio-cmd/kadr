"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { resolveVideo, type VideoSource } from "@/lib/video";
import { useLightbox } from "@/components/video/lightbox";

export function ReelCard({
  source,
  title,
  platform,
  playLabel,
  isNew,
  newLabel,
}: {
  source: VideoSource;
  title: string;
  platform: string;
  playLabel: string;
  isNew?: boolean;
  newLabel?: string;
}) {
  const open = useLightbox();
  const preview = resolveVideo(source, { autoplay: true, muted: true, loop: true });
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void element.play().catch(() => {});
        else element.pause();
      },
      { threshold: 0.5 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      type="button"
      onClick={() => open({ source, title, subtitle: platform, aspect: "9/16" })}
      aria-label={`${playLabel}: ${title}`}
      className="relative block aspect-[9/16] w-full overflow-hidden rounded-card border border-line bg-surface"
    >
      <Image
        src={preview.poster}
        alt=""
        fill
        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 70vw"
        className="object-cover"
      />

      {preview.kind === "file" && (
        <video
          ref={ref}
          src={preview.src}
          poster={preview.poster}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <span className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />

      <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-ink/60 px-2.5 py-1 text-[11px] font-medium backdrop-blur-sm">
        {platform}
      </span>

      {isNew && newLabel ? (
        <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-ink">
          {newLabel}
        </span>
      ) : null}

      <span className="absolute inset-x-3 bottom-3 text-left font-display text-sm font-bold leading-tight">
        {title}
      </span>
    </button>
  );
}
