"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "default" | "link" | "play" | "text";

// Кольцо догоняет курсор с задержкой, точка идёт след в след — из этого рассинхрона
// и рождается ощущение инерции.
const SCALE: Record<Variant, number> = {
  default: 1,
  link: 1.7,
  play: 2.6,
  text: 0,
};

const INTERACTIVE = "a, button, summary, [role='button']";
const TEXT_FIELD = "input, textarea, select";

export function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<Variant>("default");

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(fine.matches && !still.matches);

    sync();
    fine.addEventListener("change", sync);
    still.addEventListener("change", sync);
    return () => {
      fine.removeEventListener("change", sync);
      still.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("cursor-custom");
    return () => document.documentElement.classList.remove("cursor-custom");
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let ringX = pointerX;
    let ringY = pointerY;
    let scale = 1;
    let targetScale = 1;
    let opacity = 0;
    let targetOpacity = 0;
    let currentVariant: Variant = "default";
    let pressed = false;
    let frame = 0;

    const resolve = (target: EventTarget | null): Variant => {
      if (!(target instanceof Element)) return "default";
      if (target.closest(TEXT_FIELD)) return "text";
      const tagged = target.closest("[data-cursor]");
      if (tagged) return (tagged.getAttribute("data-cursor") as Variant) ?? "default";
      return target.closest(INTERACTIVE) ? "link" : "default";
    };

    const move = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      const next = resolve(event.target);
      if (next !== currentVariant) {
        currentVariant = next;
        targetScale = SCALE[next];
        setVariant(next);
      }
      targetOpacity = next === "text" ? 0 : 1;
    };

    const leave = () => {
      targetOpacity = 0;
    };
    const down = () => {
      pressed = true;
    };
    const up = () => {
      pressed = false;
    };

    const tick = () => {
      ringX += (pointerX - ringX) * 0.16;
      ringY += (pointerY - ringY) * 0.16;
      scale += (targetScale * (pressed ? 0.82 : 1) - scale) * 0.18;
      opacity += (targetOpacity - opacity) * 0.2;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
      ring.style.opacity = String(opacity);
      dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;
      dot.style.opacity = String(currentVariant === "default" ? opacity : 0);

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("blur", leave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("blur", leave);
    };
  }, [enabled]);

  if (!enabled) return null;

  const isPlay = variant === "play";

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      <div
        ref={ringRef}
        style={{ mixBlendMode: isPlay ? "normal" : "difference" }}
        className={`absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border opacity-0 transition-[background-color,border-color] duration-200 ${
          isPlay ? "border-transparent bg-accent" : "border-white bg-white/0"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className={`h-3.5 w-3.5 text-accent-ink transition-opacity duration-200 ${
            isPlay ? "opacity-100" : "opacity-0"
          }`}
          fill="currentColor"
        >
          <path d="M8 5.5v13l11-6.5z" />
        </svg>
      </div>

      <div
        ref={dotRef}
        style={{ mixBlendMode: "difference" }}
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-white opacity-0"
      />
    </div>
  );
}
