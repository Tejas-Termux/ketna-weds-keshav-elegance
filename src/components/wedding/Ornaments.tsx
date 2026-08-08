import { cn } from "@/lib/utils";

export function Divider({ className, label }: { className?: string; label?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-4 text-gold", className)}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold sm:w-28" />
      <svg viewBox="0 0 48 24" aria-hidden="true" className="h-5 w-10 fill-none stroke-current">
        <path d="M4 12h10M34 12h10" strokeWidth="1" />
        <path
          d="M24 4c4 4 6 6 6 8s-2 4-6 8c-4-4-6-6-6-8s2-4 6-8Z"
          strokeWidth="1"
          className="opacity-90"
        />
        <circle cx="24" cy="12" r="1.6" className="fill-current stroke-none" />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold sm:w-28" />
      {label ? <span className="sr-only">{label}</span> : null}
    </div>
  );
}

export function CornerFlourish({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      className={cn("pointer-events-none absolute h-24 w-24 stroke-gold/60 fill-none", className)}
    >
      <path d="M2 40C2 18 18 2 40 2" strokeWidth="1" />
      <path d="M2 58C2 28 28 2 58 2" strokeWidth="0.7" className="opacity-70" />
      <path
        d="M14 30c10-2 16-8 18-18M30 14c2 10 8 16 18 18"
        strokeWidth="0.7"
        className="opacity-80"
      />
      <circle cx="30" cy="30" r="2.4" className="fill-gold/70 stroke-none" />
      <path
        d="M8 74c14 0 22-6 26-20M74 8c0 14-6 22-20 26"
        strokeWidth="0.6"
        className="opacity-50"
      />
    </svg>
  );
}

export function Petals({ count = 14 }: { count?: number }) {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const left = (i * 97) % 100;
        const duration = 16 + ((i * 7) % 14);
        const delay = (i * 3.4) % 18;
        const size = 7 + ((i * 5) % 9);
        return (
          <span
            key={i}
            className="absolute top-0 block rounded-[100%_0_100%_0] bg-gold/40"
            style={{
              left: `${left}%`,
              width: size,
              height: size * 0.7,
              // @ts-expect-error custom property
              "--drift": `${((i % 5) - 2) * 60}px`,
              animation: `petal-fall ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}

export function Sparkles({ count = 26 }: { count?: number }) {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const left = (i * 37) % 100;
        const top = (i * 61) % 100;
        const size = 2 + ((i * 3) % 4);
        return (
          <span
            key={i}
            className="absolute block rotate-45 bg-gold/70"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              animation: `twinkle ${4 + (i % 5)}s ease-in-out ${(i % 7) * 0.7}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}

export function MandalaBackdrop({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      aria-hidden="true"
      className={cn("pointer-events-none absolute -z-10 stroke-gold/25 fill-none", className)}
      style={{ animation: "spin-slow 120s linear infinite" }}
    >
      {Array.from({ length: 16 }).map((_, i) => (
        <g key={i} transform={`rotate(${i * 22.5} 200 200)`}>
          <path d="M200 22c14 22 20 36 20 48s-6 22-20 36c-14-14-20-24-20-36s6-26 20-48Z" strokeWidth="0.8" />
          <circle cx="200" cy="70" r="2.5" strokeWidth="0.8" />
        </g>
      ))}
      <circle cx="200" cy="200" r="118" strokeWidth="0.8" />
      <circle cx="200" cy="200" r="96" strokeWidth="0.6" strokeDasharray="2 8" />
    </svg>
  );
}

export function Diya({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" aria-hidden="true" className={cn("h-10 w-10", className)}>
      <ellipse cx="30" cy="44" rx="18" ry="7" className="fill-maroon/80" />
      <path d="M12 42c4 6 32 6 36 0" className="fill-none stroke-gold" strokeWidth="1.2" />
      <path
        d="M30 18c5 6 7 9 7 13a7 7 0 0 1-14 0c0-4 2-7 7-13Z"
        className="fill-gold"
        style={{ transformOrigin: "30px 38px", animation: "diya-flicker 2.4s ease-in-out infinite" }}
      />
    </svg>
  );
}
