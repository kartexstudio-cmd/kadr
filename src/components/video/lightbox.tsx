"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { resolveVideo, type VideoSource } from "@/lib/video";

type ActiveVideo = {
  source: VideoSource;
  title: string;
  subtitle?: string;
  aspect: "16/9" | "9/16";
};

const LightboxContext = createContext<((video: ActiveVideo) => void) | null>(null);

export function useLightbox() {
  const open = useContext(LightboxContext);
  if (!open) throw new Error("useLightbox must be used inside <LightboxProvider>");
  return open;
}

export function LightboxProvider({
  children,
  closeLabel,
}: {
  children: ReactNode;
  closeLabel: string;
}) {
  const [active, setActive] = useState<ActiveVideo | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = useCallback((video: ActiveVideo) => setActive(video), []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !active) return;

    dialog.showModal();
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [active]);

  const resolved = active
    ? resolveVideo(active.source, { autoplay: true, muted: false })
    : null;

  return (
    <LightboxContext.Provider value={open}>
      {children}

      <dialog
        ref={dialogRef}
        aria-label={active?.title}
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="m-auto w-full max-w-none bg-transparent p-0 text-fg backdrop:bg-ink/85 backdrop:backdrop-blur-sm"
      >
        {active && resolved && (
          <div className="flex min-h-dvh w-screen flex-col items-center justify-center gap-4 p-4 sm:p-8">
            <div
              className="relative w-full overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10"
              style={{
                aspectRatio: active.aspect,
                maxWidth: active.aspect === "9/16" ? "min(26rem, 42vh)" : "min(72rem, 160vh)",
              }}
              onClick={(event) => event.stopPropagation()}
            >
              {resolved.kind === "file" ? (
                <video
                  key={resolved.src}
                  src={resolved.src}
                  poster={resolved.poster}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  className="h-full w-full object-contain"
                />
              ) : (
                <iframe
                  key={resolved.src}
                  src={resolved.src}
                  title={active.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              )}
            </div>

            <div
              className="flex w-full max-w-3xl flex-wrap items-center justify-between gap-3"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="min-w-0">
                <p className="truncate font-display text-base font-bold">{active.title}</p>
                {active.subtitle && (
                  <p className="truncate text-sm text-muted">{active.subtitle}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium transition hover:border-accent hover:text-accent"
              >
                {closeLabel}
                <kbd className="rounded border border-line px-1.5 py-0.5 text-[10px] text-muted">
                  Esc
                </kbd>
              </button>
            </div>
          </div>
        )}
      </dialog>
    </LightboxContext.Provider>
  );
}
