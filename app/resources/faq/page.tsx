import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/content/faq";
import { FaqAccordion } from "./FaqAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Plain-English answers to the most common federal EEO questions — 45-day deadline, ROI, settlement versus hearing, reasonable accommodation, retaliation, and more.",
};

export default function FaqPage() {
  const draftPending = FAQ.some((f) => f.draftPending);
  return (
    <>
      {draftPending && (
        <div
          role="note"
          className="bg-amber-50 border-b border-amber-200 text-amber-900 text-sm font-sans py-2.5 px-6 text-center"
        >
          <strong className="font-semibold">Draft pending review by Ericka G. Dorsey, Esq.</strong>{" "}
          Substantive content based on EEOC public guidance and 29 CFR Part 1614.
        </div>
      )}

      <section className="bg-brand-navy pt-28 pb-14 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/resources/"
            className="inline-flex items-center gap-2 font-sans text-sm text-brand-gold hover:text-white transition-colors mb-7"
          >
            ← Resources
          </Link>
          <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">
            Frequently Asked
          </p>
          <h1 className="font-serif text-white text-display-lg leading-[1.05] text-balance">
            The questions federal employees actually ask.
          </h1>
          <p className="font-serif text-white/85 text-lg leading-relaxed mt-5 max-w-3xl">
            Search the list, or scroll. Each answer is two to four paragraphs of
            plain-English guidance, with appropriate caveats. For
            case-specific analysis,{" "}
            <Link
              href="/contact/"
              className="text-brand-gold underline hover:text-white"
            >
              book a consultation
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-brand-cream py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <FaqAccordion entries={FAQ} />
        </div>
      </section>
    </>
  );
}
