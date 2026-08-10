import { createFileRoute } from "@tanstack/react-router";
import { Flower2, UtensilsCrossed, Gem, Phone, MapPin, Heart } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Countdown } from "@/components/wedding/Countdown";
import { CoupleIllustration } from "@/components/wedding/CoupleIllustration";
import { EntryScreen } from "@/components/wedding/EntryScreen";
import { MusicToggle } from "@/components/wedding/MusicToggle";
import {
  Divider,
  CornerFlourish,
  Petals,
  Sparkles,
  MandalaBackdrop,
  Diya,
} from "@/components/wedding/Ornaments";
import { Reveal } from "@/components/wedding/Reveal";
import ganesha from "@/assets/ganesha.png";
import weddingMusic from "@/assets/wedding-music.mp3.asset.json";


const SITE_URL = "https://ketna-weds-keshav-elegance.lovable.app";
const TITLE = "Ketna ❤️ Keshav | Wedding Invitation";
const DESCRIPTION =
  "With immense joy and blessings, we invite you to celebrate the wedding of Ketna and Keshav. Your presence will make our special day even more memorable. Join us for love, laughter, and lifelong memories.";
const OG_TITLE = "You're Invited! 💍 Ketna ❤️ Keshav Wedding";
const OG_DESCRIPTION =
  "Celebrate the beautiful union of Ketna and Keshav. We would be honored to have you join us on our special day.";
const OG_IMAGE = `${SITE_URL}/og-image-vertical.jpg`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      {
        name: "keywords",
        content:
          "Ketna Keshav wedding, Indian wedding invitation, Mansa Punjab wedding, Sultanpur Lodhi, 3 September 2026",
      },
      { property: "og:site_name", content: "Ketna ❤️ Keshav" },
      { property: "og:title", content: OG_TITLE },
      { property: "og:description", content: OG_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "1600" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:alt", content: "Ketna & Keshav wedding invitation" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: OG_TITLE },
      { name: "twitter:description", content: OG_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: "Ketna & Keshav wedding invitation" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Event",
            name: "Mata Ki Chowki — Ketna & Keshav",
            startDate: "2026-08-30T19:00",
            location: {
              "@type": "Place",
              name: "Ram Mandir",
              address: "Mandi Road, Sultanpur Lodhi, Punjab",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "Event",
            name: "Wedding Ceremony — Ketna & Keshav",
            startDate: "2026-09-03T20:00",
            location: {
              "@type": "Place",
              name: "Hotel Golden",
              address: "Opposite Renaissance School, Barnala Road, Mansa, Punjab",
            },
          },
        ]),
      },
    ],
  }),
  component: Invitation,
});




const rsvpContacts = [
  { name: "Ashwani Gupta & Renu Gupta", relation: "Father & Mother", phone: "9646606712" },
  { name: "Prabhat Gupta", relation: "Brother", phone: "8360859467" },
  { name: "Ajay Gupta & Rajni Gupta", relation: "Chacha Ji & Chachi Ji", phone: "9463847358" },
  { name: "Naveen Gupta & Ashu Gupta", relation: "Chacha Ji & Chachi Ji", phone: "9876352962" },
  { name: "Bhushan Gupta & Ruchi Gupta", relation: "Chacha Ji & Chachi Ji", phone: "9872347281" },
  { name: "Pankaj Gupta & Monika Gupta", relation: "Fufar Ji & Bhua Ji", phone: "7986326547" },
];

const venues = [
  {
    title: "Mata Ki Chowki",
    place: "Ram Mandir",
    address: "Mandi Road, Sultanpur Lodhi, Punjab",
    query: "Ram Mandir, Mandi Road, Sultanpur Lodhi, Punjab",
    mapUrl: "https://maps.app.goo.gl/79xbnMuRwDUR7JMNA",
  },
  {
    title: "Wedding Ceremony",
    place: "Hotel Golden Palm",
    address: "Opposite Renaissance School, Barnala Road, Mansa, Punjab",
    query: "Hotel Golden Palm, Barnala Road, Mansa, Punjab",
    mapUrl: "https://maps.app.goo.gl/6vKWtHLJ7NeoGpCo6",
  },
];

function Invitation() {
  const [opened, setOpened] = useState(false);
  const [playSignal, setPlaySignal] = useState(0);
  const handleOpened = useCallback(() => setOpened(true), []);
  const handleEnterClick = useCallback(() => setPlaySignal((n) => n + 1), []);

  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  return (
    <>
      {!opened && <EntryScreen onOpened={handleOpened} onEnterClick={handleEnterClick} />}
      <Petals />
      <Sparkles />
      <MusicToggle src={weddingMusic.url} playSignal={playSignal} />

      <main
        className={`paper relative overflow-hidden transition-all duration-1000 ${
          opened ? "scale-100 opacity-100 blur-0" : "scale-[0.98] opacity-0 blur-sm"
        }`}
      >
        {/* ---------------- Hero ---------------- */}
        <section className="relative px-6 pt-20 pb-16 text-center sm:pt-28">
          <MandalaBackdrop className="left-1/2 top-4 h-[26rem] w-[26rem] -translate-x-1/2 opacity-60" />
          <CornerFlourish className="left-4 top-4 sm:left-10 sm:top-10" />
          <CornerFlourish className="right-4 top-4 -scale-x-100 sm:right-10 sm:top-10" />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl"
            style={{ animation: "soft-pulse 9s ease-in-out infinite" }}
          />
          <Reveal className="mx-auto max-w-3xl">
            <img
              src={ganesha}
              alt="Illustration of Lord Ganesha"
              width={816}
              height={816}
              className="mx-auto h-40 w-40 sm:h-56 sm:w-56"
            />
            <p className="mt-6 font-serif text-2xl text-maroon italic sm:text-3xl">
              || Om Shri Ganeshaya Namah ||
            </p>
            <Divider className="mt-8" />
            <div className="mt-10 flex flex-col items-center gap-2" style={{ animation: "gentle-float 3s ease-in-out infinite" }}>
              <span className="font-sans text-[0.6rem] tracking-[0.4em] text-gold-deep uppercase">
                Scroll Down
              </span>
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-gold-deep" strokeWidth="1.2">
                <path d="M12 4v14M6 13l6 6 6-6" />
              </svg>
            </div>
          </Reveal>
        </section>

        {/* ---------------- Blessings & Invitation ---------------- */}
        <section className="px-6 pb-24 text-center">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="font-sans text-[0.65rem] tracking-[0.42em] text-gold-deep uppercase">
                With the Blessings of Grandparents
              </p>
              <p className="mt-4 font-serif text-xl text-maroon sm:text-2xl">
                Smt. Shimla Rani &amp; Late Sh. Surinder Pal Gupta
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-14">
              <p className="font-serif text-2xl text-foreground sm:text-3xl">Smt. Renu Gupta</p>
              <p className="my-2 font-serif text-3xl text-gold italic">&amp;</p>
              <p className="font-serif text-2xl text-foreground sm:text-3xl">Sh. Ashwani Gupta</p>
              <p className="mx-auto mt-6 max-w-xl font-sans text-sm leading-relaxed text-muted-foreground">
                invite you to celebrate the auspicious union of their beloved daughter
              </p>
            </Reveal>

            <Reveal delay={200} className="mt-12">
              <h2 className="flex flex-col items-center leading-none">
                <span className="font-serif text-6xl text-maroon italic sm:text-7xl md:text-8xl">
                  Ketna
                </span>
                <span className="my-4 font-sans text-xs tracking-[0.5em] text-gold-deep uppercase">
                  with
                </span>
                <span className="font-serif text-6xl text-maroon italic sm:text-7xl md:text-8xl">
                  Keshav
                </span>
              </h2>
              <p className="mt-8 font-sans text-xs tracking-[0.18em] text-muted-foreground">
                (S/O Smt. Sheeru Garg &amp; Sh. Rakesh Garg, Mansa)
              </p>
              <Divider className="mt-10" />
            </Reveal>
          </div>
        </section>

        {/* ---------------- Couple ---------------- */}
        <section className="relative bg-beige/60 px-6 py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
            <Reveal className="relative mx-auto w-full max-w-md">
              <div className="relative p-6">
                <span className="absolute inset-0 border border-gold/50" aria-hidden="true" />
                <span className="absolute inset-3 border border-gold/25" aria-hidden="true" />
                <CoupleIllustration className="relative" />
              </div>
            </Reveal>


            <Reveal delay={120} className="text-center lg:text-left">
              <p className="font-sans text-[0.65rem] tracking-[0.45em] text-gold-deep uppercase">
                Bride <Heart aria-hidden="true" className="mx-1 inline h-3 w-3 fill-maroon text-maroon" /> Groom
              </p>
              <h2 className="mt-6 font-serif text-5xl text-maroon italic sm:text-6xl">Ketna</h2>
              <p className="my-3 font-sans text-xs tracking-[0.45em] text-gold-deep uppercase">and</p>
              <h2 className="font-serif text-5xl text-maroon italic sm:text-6xl">Keshav</h2>
              <p className="mt-8 max-w-md font-sans text-sm leading-loose text-muted-foreground">
                Two families, countless prayers, and one shared beginning. We would be blessed to
                have you beside us as we take our seven vows together.
              </p>
              <Divider className="mt-10 lg:justify-start" />
            </Reveal>
          </div>
        </section>

        {/* ---------------- Programme ---------------- */}
        <section className="relative px-6 py-24">
          <MandalaBackdrop className="right-[-6rem] top-10 h-[24rem] w-[24rem] opacity-40" />
          <Reveal className="text-center">
            <div className="flex items-center justify-center gap-6">
              <Diya />
              <h2 className="font-serif text-4xl text-maroon italic sm:text-5xl">Programme</h2>
              <Diya className="-scale-x-100" />
            </div>
            <Divider className="mt-6" />
          </Reveal>

          <div className="mx-auto mt-16 grid max-w-5xl gap-12 md:grid-cols-2">
            {[
              {
                day: "Sunday • 30 August 2026",
                events: [
                  { Icon: Flower2, name: "Mata Ki Chowki", time: "7:00 PM" },
                  { Icon: UtensilsCrossed, name: "Dinner", time: "9:00 PM" },
                ],
                venueLabel: "Location",
                venue: ["Ram Mandir", "Mandi Road", "Sultanpur Lodhi"],
              },
              {
                day: "Thursday • 3 September 2026",
                events: [{ Icon: Gem, name: "Wedding Ceremony", time: "8:00 PM" }],
                venueLabel: "Venue",
                venue: [
                  "Hotel Golden Palm",
                  "Opposite Renaissance School",
                  "Barnala Road",
                  "Mansa, Punjab",
                ],
              },
            ].map((group, gi) => (
              <Reveal key={group.day} delay={gi * 140} className="relative">
                <div className="relative border border-gold/30 bg-card/70 px-7 py-10 shadow-elegant backdrop-blur-sm">
                  <CornerFlourish className="left-2 top-2 h-16 w-16" />
                  <CornerFlourish className="bottom-2 right-2 h-16 w-16 -scale-100" />
                  <p className="text-center font-sans text-[0.65rem] tracking-[0.35em] text-gold-deep uppercase">
                    {group.day}
                  </p>

                  <ol className="mt-9 space-y-9 border-l border-gold/40 pl-8">
                    {group.events.map((e) => (
                      <li key={e.name} className="relative">
                        <span className="absolute -left-[2.6rem] flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 bg-ivory text-base shadow-gold-glow">
                          <e.Icon aria-hidden="true" className="h-4 w-4 text-gold-deep" strokeWidth={1.4} />
                        </span>
                        <p className="font-serif text-2xl text-maroon">{e.name}</p>
                        <p className="mt-1 font-sans text-xs tracking-[0.28em] text-muted-foreground uppercase">
                          {e.time}
                        </p>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-10 border-t border-gold/25 pt-6 text-center">
                    <p className="font-sans text-[0.6rem] tracking-[0.4em] text-gold-deep uppercase">
                      {group.venueLabel}
                    </p>
                    {group.venue.map((line, i) => (
                      <p
                        key={line}
                        className={
                          i === 0
                            ? "mt-3 font-serif text-xl text-maroon"
                            : "font-sans text-sm text-muted-foreground"
                        }
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- Countdown ---------------- */}
        <section className="relative overflow-hidden bg-beige/50 px-6 py-24">
          <MandalaBackdrop className="left-[-8rem] top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 opacity-40" />
          <Reveal className="text-center">
            <h2 className="font-serif text-4xl italic text-shimmer sm:text-5xl">
              Counting Down
            </h2>
            <p className="mt-4 font-sans text-[0.65rem] tracking-[0.4em] text-gold-deep uppercase">
              Until 3 September 2026 &middot; 8:00 PM
            </p>
            <Divider className="mt-6" />
          </Reveal>
          <Reveal delay={120} className="mt-14">
            <Countdown />
          </Reveal>
        </section>


        {/* ---------------- Quote ---------------- */}
        <section className="relative overflow-hidden bg-maroon px-6 py-28 text-center">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl"
            style={{ animation: "soft-pulse 11s ease-in-out infinite" }}
          />
          <Reveal className="relative mx-auto max-w-3xl">
            <blockquote className="font-serif text-2xl leading-relaxed text-ivory italic sm:text-3xl">
              “Two souls, one beautiful journey. With the blessings of our elders and the grace of
              Lord Ganesha, we invite you to celebrate our union.”
            </blockquote>
            <p className="mt-8 font-sans text-[0.65rem] tracking-[0.45em] text-gold-soft uppercase">
              Ketna &amp; Keshav
            </p>
          </Reveal>
        </section>

        {/* ---------------- Venues ---------------- */}
        <section className="px-6 py-24">
          <Reveal className="text-center">
            <h2 className="font-serif text-4xl text-maroon italic sm:text-5xl">Venue Locations</h2>
            <Divider className="mt-6" />
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-6xl gap-10 md:grid-cols-2">
            {venues.map((v, i) => (
              <Reveal key={v.place} delay={i * 130}>
                <article className="border border-gold/30 bg-card/70 p-5 shadow-elegant">
                  <p className="font-sans text-[0.6rem] tracking-[0.4em] text-gold-deep uppercase">
                    {v.title}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-maroon">{v.place}</h3>
                  <p className="mt-1 font-sans text-sm text-muted-foreground">{v.address}</p>
                  <iframe
                    title={`Map of ${v.place}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(v.query)}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="mt-5 h-64 w-full border border-gold/20"
                  />
                  <a
                    href={v.mapUrl ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.query)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-5 inline-flex items-center gap-2 border border-gold/60 px-6 py-3 font-sans text-[0.7rem] tracking-[0.28em] text-maroon uppercase transition-colors duration-300 hover:bg-maroon hover:text-ivory"
                  >
                    <MapPin aria-hidden="true" className="h-4 w-4" strokeWidth={1.4} /> Open in Google Maps
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- RSVP ---------------- */}
        <section className="bg-beige/60 px-6 py-24">
          <Reveal className="text-center">
            <h2 className="font-serif text-4xl text-maroon italic sm:text-5xl">RSVP</h2>
            <Divider className="mt-6" />
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-6xl gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {rsvpContacts.map((c, i) => (
                <Reveal key={c.phone} delay={i * 80}>
                  <a
                    href={`tel:+91${c.phone}`}
                    className="group flex h-full items-center justify-between gap-4 border border-gold/30 bg-card/80 px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
                  >
                    <span>
                      <span className="block font-serif text-xl text-maroon">{c.name}</span>
                      <span className="block font-sans text-[0.6rem] tracking-[0.32em] text-gold-deep uppercase">
                        {c.relation}
                      </span>
                    </span>
                    <span className="font-sans text-sm text-muted-foreground transition-colors group-hover:text-maroon">
                      <span className="inline-flex items-center gap-2"><Phone aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.4} />{c.phone}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={140}>
              <div className="relative flex h-full flex-col items-center justify-center border border-gold/40 bg-ivory px-8 py-14 text-center shadow-elegant">
                <CornerFlourish className="left-2 top-2 h-16 w-16" />
                <CornerFlourish className="bottom-2 right-2 h-16 w-16 -scale-100" />
                <p className="font-sans text-[0.6rem] tracking-[0.4em] text-gold-deep uppercase">
                  With Best Compliments From
                </p>
                <p className="mt-6 font-serif text-3xl text-maroon italic">Nanke &amp; Dadke</p>
                <p className="mt-3 font-serif text-xl text-foreground">
                  All Relatives &amp; Friends
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- Footer ---------------- */}
        <footer className="px-6 py-24 text-center">
          <Reveal>
            <Divider />
            <h2 className="mt-10 font-serif text-4xl text-maroon italic sm:text-5xl">Thank You</h2>
            <p className="mx-auto mt-6 max-w-xl font-serif text-lg text-muted-foreground italic">
              “We eagerly await your gracious presence to bless the newlyweds.”
            </p>
            <p className="mt-12 font-sans text-[0.6rem] tracking-[0.35em] text-gold-deep uppercase">
              Made with <Heart aria-hidden="true" className="mx-1 inline h-3 w-3 fill-maroon text-maroon" /> for
            </p>
            <p className="mt-3 font-serif text-2xl text-maroon">Ketna &amp; Keshav</p>
          </Reveal>
        </footer>
      </main>
    </>
  );
}
