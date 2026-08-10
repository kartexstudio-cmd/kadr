export function PlayBadge({ size = "md" }: { size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-11 w-11" : "h-16 w-16";

  return (
    <span
      aria-hidden="true"
      className={`${box} grid place-items-center rounded-full bg-accent/95 text-accent-ink shadow-[0_0_40px_-8px] shadow-accent/70 transition-transform duration-300 group-hover:scale-110`}
    >
      <svg viewBox="0 0 24 24" className={size === "sm" ? "h-4 w-4" : "h-6 w-6"} fill="currentColor">
        <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11.14-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
      </svg>
    </span>
  );
}
