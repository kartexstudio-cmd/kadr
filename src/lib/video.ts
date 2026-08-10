/**
 * Единственная точка, где сайт знает, откуда берётся видео.
 * Чтобы переехать с локальных заглушек на Bunny/Mux/Cloudflare,
 * достаточно поменять `provider` у записей в `content.ts`.
 */

export type VideoSource =
  | { provider: "file"; src: string; poster: string }
  | { provider: "bunny"; libraryId: string; videoId: string; poster: string }
  | { provider: "mux"; playbackId: string; poster?: string }
  | { provider: "cloudflare"; customerCode: string; videoId: string; poster: string };

export type ResolvedVideo =
  | { kind: "file"; src: string; poster: string }
  | { kind: "embed"; src: string; poster: string };

export type PlaybackOptions = {
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
};

export function resolveVideo(
  source: VideoSource,
  { autoplay = false, muted = false, loop = false }: PlaybackOptions = {},
): ResolvedVideo {
  switch (source.provider) {
    case "file":
      return { kind: "file", src: source.src, poster: source.poster };

    case "bunny": {
      const params = new URLSearchParams({
        autoplay: String(autoplay),
        muted: String(muted),
        loop: String(loop),
        preload: "false",
        responsive: "true",
      });
      return {
        kind: "embed",
        src: `https://iframe.mediadelivery.net/embed/${source.libraryId}/${source.videoId}?${params}`,
        poster: source.poster,
      };
    }

    case "mux": {
      const params = new URLSearchParams({
        autoplay: String(autoplay),
        muted: String(muted),
        loop: String(loop),
      });
      return {
        kind: "embed",
        src: `https://player.mux.com/${source.playbackId}?${params}`,
        poster:
          source.poster ??
          `https://image.mux.com/${source.playbackId}/thumbnail.webp?width=1280&fit_mode=preserve`,
      };
    }

    case "cloudflare": {
      const params = new URLSearchParams({
        autoplay: String(autoplay),
        muted: String(muted),
        loop: String(loop),
        preload: "none",
      });
      return {
        kind: "embed",
        src: `https://customer-${source.customerCode}.cloudflarestream.com/${source.videoId}/iframe?${params}`,
        poster: source.poster,
      };
    }
  }
}
