/**
 * Hand-drawn style animated bride & groom illustration (pure SVG, no photos).
 */
export function CoupleIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 400 460"
        role="img"
        aria-label="Illustration of an Indian bride and groom"
        className="w-full"
        style={{ animation: "soft-pulse 7s ease-in-out infinite" }}
      >
        <defs>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--gold))" />
            <stop offset="50%" stopColor="hsl(var(--gold-soft))" />
            <stop offset="100%" stopColor="hsl(var(--gold-deep))" />
          </linearGradient>
        </defs>

        {/* halo */}
        <circle cx="200" cy="220" r="165" fill="none" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.5" />
        <circle
          cx="200"
          cy="220"
          r="150"
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="0.8"
          strokeDasharray="4 10"
          opacity="0.8"
          style={{ transformOrigin: "200px 220px", animation: "spin-slow 40s linear infinite" }}
        />

        <g
          fill="none"
          stroke="hsl(var(--maroon))"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* ---- Groom ---- */}
          <g style={{ transformOrigin: "150px 300px", animation: "sway-left 6s ease-in-out infinite" }}>
            {/* turban */}
            <path d="M120 132c0-22 16-36 34-36s34 14 34 36c-12-10-22-14-34-14s-22 4-34 14z" fill="hsl(var(--maroon))" />
            <path d="M120 132c22-8 46-8 68 0" />
            <path d="M188 118c10-6 16 2 12 10" stroke="url(#goldGrad)" strokeWidth="3" />
            {/* face */}
            <circle cx="154" cy="160" r="26" />
            <path d="M142 168c8 7 16 7 24 0" />
            {/* body / sherwani */}
            <path d="M154 186v22" />
            <path d="M118 320c0-62 12-104 36-112 24 8 36 50 36 112z" fill="hsl(var(--ivory))" />
            <path d="M154 208v112" />
            <path d="M132 236c14-8 30-8 44 0" stroke="url(#goldGrad)" />
            <path d="M118 320h72" stroke="url(#goldGrad)" />
            {/* garland */}
            <path d="M136 214c-6 34 4 62 18 76" stroke="url(#goldGrad)" strokeWidth="3" />
          </g>

          {/* ---- Bride ---- */}
          <g style={{ transformOrigin: "250px 300px", animation: "sway-right 6s ease-in-out infinite" }}>
            {/* veil + hair */}
            <path d="M216 150c0-26 14-44 32-44s32 18 32 44c0 30-8 54-32 54s-32-24-32-54z" fill="hsl(var(--maroon))" />
            <circle cx="248" cy="164" r="24" fill="hsl(var(--ivory))" />
            <path d="M238 172c6 6 14 6 20 0" />
            {/* maang tikka */}
            <path d="M248 140v8" stroke="url(#goldGrad)" strokeWidth="3" />
            <circle cx="248" cy="152" r="3" fill="url(#goldGrad)" stroke="none" />
            {/* lehenga */}
            <path d="M248 190v20" />
            <path d="M206 330c0-70 18-114 42-120 24 6 42 50 42 120z" fill="hsl(var(--ivory))" />
            <path d="M206 330c28 10 56 10 84 0" stroke="url(#goldGrad)" strokeWidth="3" />
            <path d="M224 268c16-8 32-8 48 0" stroke="url(#goldGrad)" />
            <path d="M232 300c10-6 22-6 32 0" stroke="url(#goldGrad)" />
            {/* dupatta */}
            <path d="M280 200c22 26 26 66 16 104" stroke="url(#goldGrad)" strokeWidth="2" />
          </g>

          {/* joined hands */}
          <path d="M188 262c8 6 16 6 24 0" stroke="url(#goldGrad)" strokeWidth="3" />
        </g>

        {/* floating hearts */}
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d="M0 4c-3-4-8-1-8 3 0 5 8 9 8 9s8-4 8-9c0-4-5-7-8-3z"
            fill="hsl(var(--maroon))"
            opacity="0.5"
            transform={`translate(${150 + i * 50} ${120 - i * 14}) scale(${0.8 + i * 0.2})`}
            style={{ animation: `shimmer-float ${5 + i}s ease-in-out ${i * 0.8}s infinite` }}
          />
        ))}
      </svg>
    </div>
  );
}
