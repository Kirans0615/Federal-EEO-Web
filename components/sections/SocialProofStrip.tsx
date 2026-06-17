"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

/**
 * Placeholder anonymized agency-type results. Ericka to replace with
 * curated real outcomes once releases are signed. See CONTENT.md.
 */
const ENTRIES = [
  {
    agency: "Department of [REDACTED]",
    outcome: "Reasonable accommodation secured after agency denial — 47 days from intake to resolution.",
  },
  {
    agency: "[REDACTED] Federal Agency",
    outcome: "Retaliation finding reversed on OFO appeal; full restoration and back pay.",
  },
  {
    agency: "[REDACTED] Veteran Services Administration",
    outcome: "Hostile-work-environment claim resolved at mediation with structured return-to-work terms.",
  },
];

export function SocialProofStrip() {
  return (
    <section className="bg-[#FAF8F3] py-16 md:py-20 px-6 md:px-12 border-t border-brand-border/40">
      <div className="max-w-7xl mx-auto">
        <p className="font-sans text-brand-gold-ink mb-2 text-center" style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}>
          Federal Employees I&apos;ve Helped At
        </p>
        <p className="font-serif italic text-brand-muted text-center mb-12" style={{ fontSize: "0.95rem" }}>
          (Agency names and identifying details anonymized.)
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {ENTRIES.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="border border-brand-gold/40 bg-white rounded-sm p-6 text-center"
            >
              <p className="font-serif text-brand-navy mb-3" style={{ fontSize: "1.05rem", letterSpacing: "0.01em", fontWeight: 600 }}>
                {e.agency}
              </p>
              <p className="font-sans italic text-brand-ink" style={{ fontSize: "0.9rem", lineHeight: 1.55 }}>
                {e.outcome}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
