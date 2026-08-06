import { useEffect, useState } from "react";

const TARGET = new Date("2026-09-03T20:00:00+05:30").getTime();

function diff() {
  const ms = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    minutes: Math.floor(ms / 60000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
  };
}

export function Countdown() {
  const [t, setT] = useState(() => diff());

  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const units: [string, number][] = [
    ["Days", t.days],
    ["Hours", t.hours],
    ["Minutes", t.minutes],
    ["Seconds", t.seconds],
  ];

  return (
    <div className="mx-auto grid max-w-2xl grid-cols-4 gap-3 sm:gap-6">
      {units.map(([label, value]) => (
        <div
          key={label}
          className="relative border border-gold/40 bg-card/70 px-2 py-6 text-center shadow-elegant backdrop-blur-sm"
        >
          <span
            suppressHydrationWarning
            className="block font-serif text-3xl text-maroon tabular-nums sm:text-5xl"
          >
            {String(value).padStart(2, "0")}
          </span>
          <span className="mt-2 block font-sans text-[0.55rem] tracking-[0.3em] text-gold-deep uppercase sm:text-[0.62rem]">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
