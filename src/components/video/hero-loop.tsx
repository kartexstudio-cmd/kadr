"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { resolveVideo, type VideoSource } from "@/lib/video";

export function HeroLoop({ source }: { source: VideoSource }) {
  const video = resolveVideo(source, { autoplay: true, muted: true, loop: true });
  const ref = useRef<HTMLVideoElement>(null);
  const [motionAllowed, setMotionAllowed] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setMotionAllowed(!query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element || !motionAllowed) return;

    // Экономим батарею и трафик, пока вкладка не на экране.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void element.play().catch(() => {});
        else element.pause();
      },
      { threshold: 0.1 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [motionAllowed]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Image
        src={video.poster}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover brightness-[0.55]"
      />
      {motionAllowed && video.kind === "file" && (
        <video
          ref={ref}
          src={video.src}
          poster={video.poster}
          muted
          loop
          playsInline
          autoPlay
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          className="h-full w-full object-cover brightness-[0.55]"
        />
      )}
      {/* Скрим слева держит контраст текста, справа кадр остаётся читаемым. */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-ink" />
    </div>
  );
}
