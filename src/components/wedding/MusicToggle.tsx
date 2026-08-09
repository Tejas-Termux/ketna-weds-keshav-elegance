import { useEffect, useRef, useState } from "react";

export function MusicToggle({ src, playSignal = 0 }: { src: string; playSignal?: number }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      audio?.pause();
    };
  }, []);

  // Start playback when the entry button is clicked (uses that user gesture).
  useEffect(() => {
    if (!playSignal) return;
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = false;
    audio.volume = 0.6;
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, [playSignal]);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    audio.volume = 0.6;
    audio.muted = false;
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop playsInline preload="metadata" />

      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Turn wedding music off" : "Turn wedding music on"}
        className="fixed right-4 bottom-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 bg-ivory/90 text-gold-deep shadow-elegant backdrop-blur transition-transform duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-maroon focus-visible:outline-none sm:right-6 sm:bottom-6"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.4">
          <path d="M9 18V6l10-2v12" />
          <circle cx="6.5" cy="18" r="2.5" />
          <circle cx="16.5" cy="16" r="2.5" />
          {!playing && <path d="M3 3l18 18" strokeWidth="1.2" />}
        </svg>
      </button>
    </>
  );
}
