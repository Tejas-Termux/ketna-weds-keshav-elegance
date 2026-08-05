# Ketna Weds Keshav — Wedding Invitation Microsite

A single-page luxury Hindu wedding invitation with a card-opening entry screen, built on the existing TanStack Start app at `/`.

## Experience flow

1. **Entry screen** — full-viewport ivory/maroon scene with drifting golden particles and floral corner motifs. Centered: "Ketna / Weds / Keshav" in a premium serif, with a gold "Open Invitation" button.
2. **Card opening** — on click, the entry screen splits and rotates open like a wedding card (3D perspective on two halves) while the invitation fades and scales in behind it. Page scroll unlocks after the animation.
3. **Invitation** — the full scrolling microsite below.

## Sections

- **Hero** — Ganesha illustration, `|| Om Shri Ganeshaya Namah ||`, decorative gold dividers.
- **Blessings & Invitation** — grandparents line, parents (Smt. Renu Gupta & Sh. Ashwani Gupta), invitation copy, oversized "Ketna / with / Keshav" typography, groom's parents line. All centered.
- **Couple** — romantic split panel with floral border frames, bride ❤️ groom names, gentle reveal animation.
- **Programme timeline** — vertical gold-rule timeline with two event groups (30 Aug 2026 at Ram Mandir; 3 Sep 2026 at Hotel Golden), icon medallions per item, times and venue blocks.
- **Gallery** — masonry grid of 10 wedding images with hover zoom + gold overlay, lazy-loaded.
- **Quote** — the "Two souls, one beautiful journey…" blessing on a maroon band with soft glow.
- **Venue Locations** — two cards, each with an embedded map iframe and an "Open in Google Maps" button.
- **RSVP** — left column of five elegant contact cards with tap-to-call numbers; right column "With Best Compliments From / Nanke & Dadke / All Relatives & Friends".
- **Footer** — gold divider, "Thank You", the awaiting-presence line, "Made with ❤️ for Ketna & Keshav".

## Design system

- Tokens added to `src/styles.css`: ivory `#FFFDF8` background, royal gold `#C8A45A`, deep maroon `#6E1F28`, soft beige, white. Gold gradient + soft glow shadow tokens. No hardcoded color classes in components.
- Fonts via `<link>` in `__root.tsx`: Cormorant Garamond (headings) + Jost/Karla (body), wired through `@theme`.
- Generous spacing, thin gold rules, restrained motion.

## Motion & audio

- Scroll-reveal fade/rise on every section via IntersectionObserver, respecting `prefers-reduced-motion`.
- Floating petals and slow parallax on decorative layers (CSS-driven, GPU-friendly, reduced on mobile).
- Floating music toggle, bottom-right, muted by default; soft instrumental track started only on user tap.

## Technical notes

- Everything lives in `src/routes/index.tsx` composing small components under `src/components/wedding/`; entry-screen state held at page level.
- Route `head()` gets a wedding-specific title, description, og/twitter tags; semantic landmarks, alt text, and JSON-LD Event markup for both ceremonies.
- Maps embedded as plain iframes with `loading="lazy"` using search queries for the two addresses — no API key needed.
- Imagery (Ganesha, couple, gallery, floral motifs) generated as assets into `src/assets/`.
- Background music: a soft instrumental track added as a project asset; if no suitable licensed track is available, the player ships with the toggle wired and a placeholder file you can swap.
