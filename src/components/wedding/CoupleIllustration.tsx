import coupleArt from "@/assets/couple-illustration.png";

/**
 * Animated bride & groom artwork framed by rotating gold mandala rings.
 */
export function CoupleIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* rotating mandala rings */}
      <svg
        viewBox="0 0 400 400"
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[112%] w-[112%] -translate-x-1/2 -translate-y-1/2"
      >
        <defs>
          <linearGradient id="coupleGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--gold-deep)" />
            <stop offset="50%" stopColor="var(--gold-soft)" />
            <stop offset="100%" stopColor="var(--gold)" />
          </linearGradient>
        </defs>
        <circle
          cx="200"
          cy="200"
          r="186"
          fill="none"
          stroke="url(#coupleGold)"
          strokeWidth="0.8"
          strokeDasharray="3 9"
          opacity="0.75"
          style={{ transformOrigin: "200px 200px", animation: "spin-slow 60s linear infinite" }}
        />
        <g
          fill="none"
          stroke="url(#coupleGold)"
          strokeWidth="0.9"
          opacity="0.55"
          style={{
            transformOrigin: "200px 200px",
            animation: "spin-slow 90s linear infinite reverse",
          }}
        >
          {Array.from({ length: 24 }).map((_, i) => (
            <path
              key={i}
              d="M200 26c9 12 13 20 13 27s-4 12-13 20c-9-8-13-13-13-20s4-15 13-27Z"
              transform={`rotate(${i * 15} 200 200)`}
            />
          ))}
        </g>
        <circle cx="200" cy="200" r="150" fill="none" stroke="url(#coupleGold)" strokeWidth="0.7" opacity="0.5" />
      </svg>

      {/* glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/25 blur-3xl"
        style={{ animation: "soft-pulse 8s ease-in-out infinite" }}
      />

      <img
        src={coupleArt}
        alt="Illustration of an Indian bride and groom in traditional wedding attire"
        loading="lazy"
        width={1024}
        height={1152}
        className="relative mx-auto w-[82%]"
        style={{ animation: "gentle-float 7s ease-in-out infinite" }}
      />

      {/* floating hearts */}
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          aria-hidden="true"
          className="absolute block h-2.5 w-2.5 rotate-45 bg-maroon/40"
          style={{
            left: `${18 + i * 30}%`,
            top: `${12 + (i % 2) * 10}%`,
            animation: `shimmer-float ${5 + i}s ease-in-out ${i * 0.8}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
