import type { Metadata } from "next";
import Link from "next/link";
import { PROCESS_STAGES } from "@/content/process";
import { ProcessScroller } from "./ProcessScroller";

export const metadata: Metadata = {
  title: "Federal EEO Process Map",
  description:
    "An interactive walkthrough of the federal EEO complaint process — from discriminatory event through OFO appeal. Scroll-linked stages, deadlines, and what to do at each step.",
};

export default function ProcessPage() {
  const draftPending = PROCESS_STAGES.some((s) => s.draftPending);
  return (
    <>
      {draftPending && (
        <div
          role="note"
          className="bg-amber-50 border-b border-amber-200 text-amber-900 text-sm font-sans py-2.5 px-6 text-center"
        >
          <strong className="font-semibold">Draft pending review by Ericka G. Dorsey, Esq.</strong>{" "}
          Content based on 29 CFR Part 1614.
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
            Process Map
          </p>
          <h1 className="font-serif text-white text-display-lg leading-[1.05] text-balance">
            The federal EEO process, end to end.
          </h1>
          <p className="font-serif text-white/85 text-lg leading-relaxed mt-5 max-w-3xl">
            From the moment a federal employee experiences potential
            discrimination through the EEOC OFO appeal. Every stage in plain
            language — with what to do, the typical timeline, the common
            mistakes, and where we help.
          </p>
        </div>
      </section>

      <ProcessScroller stages={PROCESS_STAGES} />
    </>
  );
}
