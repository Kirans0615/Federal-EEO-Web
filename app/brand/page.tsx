import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand",
  description: "Federal EEO, LLC brand assets and logo concepts for review.",
};

const CONCEPTS = [
  {
    id:    "concept-1",
    title: "Concept 1 — Shield Monogram",
    desc:  "Classic FE monogram inside a shield silhouette — signals federal authority and protection.",
    file:  "/logos/concept-1-shield-monogram.svg",
  },
  {
    id:    "concept-2",
    title: "Concept 2 — Scales & Flag Mark",
    desc:  "Scales of justice mark with a gold horizontal flag-stripe accent, paired with wordmark.",
    file:  "/logos/concept-2-scales-flag.svg",
  },
  {
    id:    "concept-3",
    title: "Concept 3 — Serif Wordmark",
    desc:  "Confident serif wordmark with a single gold underline on 'EEO' — typographic restraint.",
    file:  "/logos/concept-3-wordmark.svg",
  },
  {
    id:    "concept-4",
    title: "Concept 4 — Geometric Lockup",
    desc:  "Abstract F+E mark in negative space paired with wordmark for a horizontal lockup.",
    file:  "/logos/concept-4-geometric-lockup.svg",
  },
];

const PALETTE = [
  { name: "Brand Navy",  hex: "#1B2A4A", token: "brand-navy",  on: "white" },
  { name: "Brand Gold",  hex: "#C4922A", token: "brand-gold",  on: "white" },
  { name: "Brand Cream", hex: "#F4EFE6", token: "brand-cream", on: "dark" },
  { name: "Brand Ink",   hex: "#1C1C2E", token: "brand-ink",   on: "white" },
  { name: "Brand Muted", hex: "#6B7280", token: "brand-muted", on: "white" },
  { name: "Brand Border",hex: "#D4C9B8", token: "brand-border",on: "dark" },
];

export default function BrandPage() {
  return (
    <>
      <section className="bg-brand-navy pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">Brand Assets</p>
          <h1 className="font-serif text-white text-display-xl leading-tight text-balance max-w-2xl">
            Logo Concepts &amp; Design System
          </h1>
          <p className="font-sans text-white/70 mt-3 max-w-lg text-sm">
            Four logo concepts for Ericka&rsquo;s review. Each ships on light and dark backgrounds.
            Select one to proceed with final production artwork.
          </p>
        </div>
      </section>

      {/* Logo concepts */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="font-sans text-xs tracking-[0.18em] uppercase text-brand-gold mb-8">Logo Concepts</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CONCEPTS.map((c) => (
              <div key={c.id} className="border border-brand-border rounded-sm overflow-hidden">
                {/* Light background */}
                <div className="bg-white p-10 flex items-center justify-center min-h-[180px] border-b border-brand-border">
                  <img src={c.file} alt={c.title} className="max-h-24 w-auto" loading="lazy" />
                </div>
                {/* Dark background */}
                <div className="bg-brand-navy p-10 flex items-center justify-center min-h-[140px] border-b border-white/10">
                  <img src={c.file} alt={`${c.title} on dark`} className="max-h-20 w-auto" loading="lazy" />
                </div>
                <div className="p-5">
                  <h2 className="font-serif text-brand-navy text-lg mb-1">{c.title}</h2>
                  <p className="font-sans text-sm text-brand-muted">{c.desc}</p>
                  <a
                    href={c.file}
                    download
                    className="mt-3 inline-block font-sans text-xs text-brand-gold border border-brand-gold/30 px-3 py-1.5 hover:bg-brand-gold hover:text-white transition-colors duration-200 rounded-sm"
                  >
                    Download SVG
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color palette */}
      <section className="bg-brand-cream section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="font-sans text-xs tracking-[0.18em] uppercase text-brand-gold mb-8">Color Palette</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PALETTE.map((swatch) => (
              <div key={swatch.token} className="flex flex-col gap-2">
                <div
                  className="h-20 rounded-sm border border-brand-border"
                  style={{ backgroundColor: swatch.hex }}
                  aria-label={`${swatch.name}: ${swatch.hex}`}
                />
                <div>
                  <p className="font-sans font-semibold text-sm text-brand-ink">{swatch.name}</p>
                  <p className="font-sans text-xs text-brand-muted">{swatch.hex}</p>
                  <p className="font-sans text-xs text-brand-muted font-mono">{swatch.token}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="font-sans text-xs tracking-[0.18em] uppercase text-brand-gold mb-8">Typography</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="font-sans text-xs text-brand-muted mb-3 tracking-wider uppercase">Heading — EB Garamond</p>
              <p className="font-serif text-display-lg text-brand-navy">Federal EEO, LLC</p>
              <p className="font-serif text-2xl text-brand-navy mt-2 italic">Experience. Dedication. Results.</p>
              <p className="font-serif text-lg text-brand-navy mt-2">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-serif text-lg text-brand-navy">abcdefghijklmnopqrstuvwxyz</p>
            </div>
            <div>
              <p className="font-sans text-xs text-brand-muted mb-3 tracking-wider uppercase">Body — Inter</p>
              <p className="font-sans text-base text-brand-ink leading-relaxed">
                Federal employees facing EEO matters deserve expert guidance from someone who
                understands both the law and the process. The 45-day deadline is not a technicality
                — it is the gateway to every remedy the system offers.
              </p>
              <p className="font-sans text-sm text-brand-muted mt-3">
                Small text — 14px / brand-muted
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
