"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

const ENGAGEMENTS = [
  "American Bar Association — Commission on Disability Rights",
  "GWU Law School — Career Quest Speaker Series",
  "AFGE National Training — Reasonable Accommodation Workshop",
  "Federal Employee Education Foundation — Annual Conference",
  "Federal Mediation and Conciliation Service — Practitioner Roundtable",
  "Continuing Legal Education — Federal-Sector EEO Practice",
];

/**
 * Placeholder speaking history. Ericka to confirm real engagements before
 * launch — see CONTENT.md.
 */
export function SpeakingStrip() {
  return (
    <section className="bg-brand-navy text-white py-16 md:py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <p className="font-sans text-brand-gold mb-6 text-center" style={{ fontSize: "0.72rem", letterSpacing: "0.24em", textTransform: "uppercase", fontWeight: 600 }}>
          Recent Speaking Engagements
        </p>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3 max-w-3xl mx-auto">
          {ENGAGEMENTS.map((e, i) => (
            <motion.p
              key={e}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
              className="font-serif text-white/85 text-center sm:text-left"
              style={{ fontSize: "0.95rem", lineHeight: 1.5, letterSpacing: "0.02em" }}
            >
              {e}
            </motion.p>
          ))}
        </div>
        <p className="font-sans italic text-white/40 text-center mt-10" style={{ fontSize: "0.75rem" }}>
          Placeholder list pending Ericka&apos;s confirmation. See CONTENT.md.
        </p>
      </div>
    </section>
  );
}
