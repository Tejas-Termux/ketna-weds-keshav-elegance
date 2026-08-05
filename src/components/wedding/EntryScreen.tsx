import { useEffect, useState } from "react";
import { CornerFlourish } from "./Ornaments";
import ganesha from "@/assets/ganesha.png";

export function EntryScreen({ onOpened }: { onOpened: () => void }) {
  const [opening, setOpening] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (!opening) return;
    const t = setTimeout(() => {
      setGone(true);
      onOpened();
    }, 1500);
    return () => clearTimeout(t);
  }, [opening, onOpened]);

  if (gone) return null;

  const panel =
    "absolute inset-y-0 w-1/2 paper overflow-hidden transition-transform duration-[1500ms] ease-[cubic-bezier(0.65,0,0.35,1)]";

  return (
    <div
      className="fixed inset-0 z-50"
      style={{ perspective: "1800px" }}
      aria-hidden={opening ? "true" : undefined}
    >
      {/* card halves */}
      <div
        className={`${panel} left-0 origin-left border-r border-gold/30`}
        style={{ transform: opening ? "rotateY(-105deg)" : "none" }}
      >
        <CornerFlourish className="left-6 top-6" />
        <CornerFlourish className="bottom-6 left-6 -scale-y-100" />
      </div>
      <div
        className={`${panel} right-0 origin-right border-l border-gold/30`}
        style={{ transform: opening ? "rotateY(105deg)" : "none" }}
      >
        <CornerFlourish className="right-6 top-6 -scale-x-100" />
        <CornerFlourish className="bottom-6 right-6 -scale-x-100 -scale-y-100" />
      </div>

      {/* golden dust */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 26 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-gold/60"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              width: 2 + (i % 4),
              height: 2 + (i % 4),
              animation: `shimmer-float ${6 + (i % 7)}s ease-in-out ${(i % 9) * 0.6}s infinite`,
            }}
          />
        ))}
      </div>

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-all duration-700 ${
          opening ? "scale-105 opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={ganesha}
          alt=""
          width={816}
          height={816}
          className="mb-4 h-20 w-20 opacity-80 sm:h-24 sm:w-24"
        />
        <p className="animate-rise font-sans text-[0.68rem] tracking-[0.55em] text-gold-deep uppercase">
          The Wedding Celebration Of
        </p>
        <h1 className="mt-6 flex flex-col items-center leading-[0.95]">
          <span
            className="animate-rise font-serif text-6xl text-maroon italic sm:text-7xl md:text-8xl"
            style={{ animationDelay: "150ms" }}
          >
            Ketna
          </span>
          <span
            className="animate-rise my-3 font-sans text-xs tracking-[0.5em] text-gold-deep uppercase"
            style={{ animationDelay: "300ms" }}
          >
            Weds
          </span>
          <span
            className="animate-rise font-serif text-6xl text-maroon italic sm:text-7xl md:text-8xl"
            style={{ animationDelay: "450ms" }}
          >
            Keshav
          </span>
        </h1>

        <button
          type="button"
          onClick={() => setOpening(true)}
          className="animate-rise group relative mt-12 overflow-hidden rounded-full px-10 py-4 font-sans text-xs tracking-[0.32em] text-maroon-deep uppercase shadow-gold-glow transition-transform duration-300 hover:scale-[1.04] focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2 focus-visible:outline-none"
          style={{ animationDelay: "650ms" }}
        >
          <span className="bg-gilded absolute inset-0" />
          <span className="absolute inset-[1.5px] rounded-full bg-ivory/85 transition-opacity duration-300 group-hover:opacity-0" />
          <span className="relative transition-colors duration-300 group-hover:text-ivory">
            Open Invitation
          </span>
        </button>
      </div>
    </div>
  );
}
