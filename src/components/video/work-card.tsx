"use client";

import Image from "next/image";
import { resolveVideo, type VideoSource } from "@/lib/video";
import { useLightbox } from "@/components/video/lightbox";
import { PlayBadge } from "@/components/video/play-badge";

export function WorkCard({
  source,
  client,
  title,
  tag,
  metric,
  duration,
  resultLabel,
  playLabel,
  priority,
}: {
  source: VideoSource;
  client: string;
  title: string;
  tag: string;
  metric: string;
  duration: string;
  resultLabel: string;
  playLabel: string;
  priority?: boolean;
}) {
  const open = useLightbox();
  const poster = resolveVideo(source).poster;

  return (
    <figure className="group">
      <button
        type="button"
        onClick={() => open({ source, title, subtitle: client, aspect: "16/9" })}
        aria-label={`${playLabel}: ${title}`}
        data-cursor="play"
        className="relative block w-full overflow-hidden rounded-card border border-line bg-surface"
      >
        <span className="relative block aspect-video">
          <Image
            src={poster}
            alt=""
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </span>

        <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

        <span
          data-play-badge
          className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <PlayBadge />
        </span>

        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink/60 px-3 py-1 text-xs font-medium backdrop-blur-sm">
          {tag}
        </span>
        <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-ink/60 px-2.5 py-1 font-mono text-xs tabular-nums backdrop-blur-sm">
          {duration}
        </span>
      </button>

      <figcaption className="mt-4 space-y-1.5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{client}</p>
        <h3 className="font-display text-lg font-bold leading-snug">{title}</h3>
        <p className="text-sm text-accent">
          <span className="text-muted">{resultLabel}: </span>
          {metric}
        </p>
      </figcaption>
    </figure>
  );
}
