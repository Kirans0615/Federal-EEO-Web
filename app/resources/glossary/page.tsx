import type { Metadata } from "next";
import Link from "next/link";
import { GLOSSARY } from "@/content/glossary";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Federal EEO Glossary",
  description:
    "Plain-English definitions of 36 federal EEO and employment-law terms — adverse action, pretext, ROI, reasonable accommodation, undue hardship, and more.",
};

export default function GlossaryPage() {
  const grouped = GLOSSARY.reduce<Record<string, typeof GLOSSARY>>((acc, term) => {
    const letter = term.term[0].toUpperCase().replace(/[^A-Z]/, "#");
    (acc[letter] ||= []).push(term);
    return acc;
  }, {});
  const letters = Object.keys(grouped).sort();
  const draftPending = GLOSSARY.some((t) => t.draftPending);

  return (
    <>
      <ArticleJsonLd
        headline="Federal EEO Glossary"
        description="36 federal EEO terms with plain-English definitions."
        published="2026-06-15"
        lastReviewed="2026-06-15"
        url={`${SITE_URL}/resources/glossary/`}
        section="Reference"
      />

      {draftPending && (
        <div
          role="note"
          className="bg-amber-50 border-b border-amber-200 text-amber-900 text-sm font-sans py-2.5 px-6 text-center"
        >
          <strong className="font-semibold">Draft pending review by Ericka G. Dorsey, Esq.</strong>{" "}
          Definitions drawn from EEOC guidance and 29 CFR Part 1614.
        </div>
      )}

      <section className="bg-brand-navy pt-28 pb-14 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/resources/"
            className="inline-flex items-center gap-2 font-sans text-sm text-brand-gold hover:text-white transition-colors mb-7"
          >
            ← Resources
          </Link>
          <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">
            Reference
          </p>
          <h1 className="font-serif text-white text-display-lg leading-[1.05] text-balance">
            Federal EEO Glossary
          </h1>
          <p className="font-serif text-white/85 text-lg leading-relaxed mt-5 max-w-3xl">
            36 plain-English definitions of the terms that show up across the
            federal EEO complaint process. Bookmark for the ROI stage.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-wrap gap-2 sticky top-16 lg:top-20 bg-brand-cream/95 backdrop-blur z-20 py-4">
          {letters.map((l) => (
            <a
              key={l}
              href={`#letter-${l}`}
              className="inline-flex items-center justify-center w-9 h-9 border border-brand-border bg-white text-sm font-sans font-medium text-brand-navy rounded-sm hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </section>

      <section className="bg-brand-cream pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          {letters.map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-40">
              <h2 className="font-serif text-3xl text-brand-navy mb-6 border-b border-brand-border pb-3">
                {letter}
              </h2>
              <dl className="space-y-7">
                {grouped[letter].map((t) => (
                  <div key={t.anchor} id={t.anchor} className="scroll-mt-40">
                    <dt className="font-serif text-xl text-brand-navy mb-2">
                      {t.term}
                    </dt>
                    <dd className="font-serif text-brand-ink text-lg leading-relaxed max-w-prose">
                      {t.definition}
                    </dd>
                    {t.relatedSlugs && t.relatedSlugs.length > 0 && (
                      <p className="font-sans text-xs text-brand-muted mt-3">
                        Related reading:{" "}
                        {t.relatedSlugs.map((s, i) => (
                          <span key={s}>
                            {i > 0 && ", "}
                            <Link
                              href={`/resources/${s}/`}
                              className="text-brand-gold hover:underline"
                            >
                              {s.replace(/-/g, " ")}
                            </Link>
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
