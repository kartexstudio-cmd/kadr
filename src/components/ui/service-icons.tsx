import type { SVGProps } from "react";

const icons = [
  // UA и перформанс-креативы — мишень
  (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  // Трейлеры и cinematic-ролики — хлопушка
  (props: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3.5" y="8.5" width="17" height="11" rx="1.5" />
      <path d="M4 8.5 5 4h14l1 4.5" />
      <path d="M8 4 6.5 8.5M14 4l-1.5 4.5" />
    </svg>
  ),
  // Анимация и CGI (2D и 3D в одном) — слои
  (props: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3 21 8l-9 5-9-5 9-5Z" />
      <path d="M3 12l9 5 9-5" />
      <path d="M3 16l9 5 9-5" />
    </svg>
  ),
];

export function ServiceIcon({ index, className }: { index: number; className?: string }) {
  const Icon = icons[index % icons.length];
  return <Icon className={className} />;
}
