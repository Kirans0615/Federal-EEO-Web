"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { EASE } from "@/lib/motion";

/**
 * Recent Wins — placeholder anonymized outcomes.
 *
 * ⚠️ CONTENT.md: Ericka to replace with real curated case summaries
 * (release signed, or genuinely anonymized) before public launch.
 * Recent outcomes are the strongest trust signal a legal practice can deploy.
 */

const WINS = [
  {
    agency: "Federal employee at a cabinet-level executive agency",
    resolution:
      "Reinstatement with restored seniority, full back pay, and the removal of disciplinary documents from the personnel file.",
    timeline: "9 months from initial counseling to resolution",
    draft: true,
  },
  {
    agency: "Federal employee at a large independent agency",
    resolution:
      "Reasonable accommodation granted following denial and renewed interactive process — including a modified schedule and the reassignment of marginal duties.",
    timeline: "5 months from accommodation denial to implementation",
    draft: true,
  },
  {
    agency: "Federal employee at a regulatory body",
    resolution:
      "Confidential settlement following ROI review — including non-monetary terms tied to future treatment and an agreed reference.",
    timeline: "11 months from the discriminatory event",
    draft: true,
  },
  {
    agency: "Federal employee at a Department of Defense component",
    resolution:
      "OFO appeal reversed adverse FAD on legal-error grounds, with remand for further proceedings on liability and remedy.",
    timeline: "16 months on appeal to decision",
    draft: true,
  },
];

export function RecentWins() {
  const anyDraft = WINS.some((w) => w.draft);

  return (
    <section className="bg-brand-cream py-20 md:py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <Trophy size={16} className="text-brand-gold" aria-hidden="true" />
          <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase">
            Recent Wins
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-brand-navy text-balance leading-tight mb-4 max-w-2xl">
          A few of the outcomes we&apos;ve helped federal employees achieve.
        </h2>
        <p className="font-sans text-brand-muted text-base leading-relaxed max-w-2xl mb-12">
          Every matter is unique, and past results are not a guarantee of
          future outcomes. The summaries below describe the kinds of resolutions
          our work has produced.
        </p>

        {anyDraft && (
          <p className="font-sans text-xs italic text-amber-900 bg-amber-50 border border-amber-200 rounded-sm px-4 py-3 mb-10">
            <strong className="font-semibold">Draft placeholders.</strong>{" "}
            Ericka to replace with real curated outcomes (signed release or
            genuinely anonymized) before launch — see CONTENT.md.
          </p>
        )}

        <div className="space-y-7">
          {WINS.map((w, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
              className="bg-white border border-brand-border rounded-sm p-7 md:p-8 grid md:grid-cols-[1fr_2fr] gap-x-10 gap-y-3"
            >
              <p className="font-sans text-xs tracking-[0.18em] uppercase text-brand-muted">
                {w.agency}
              </p>
              <div>
                <p className="font-serif text-brand-ink text-lg leading-relaxed mb-3">
                  {w.resolution}
                </p>
                <p className="font-sans text-sm text-brand-muted">{w.timeline}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
