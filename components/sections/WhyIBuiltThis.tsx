"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

/**
 * First-person opening section above the formal biography on /about.
 * Sits in the warm cream background and acts as the human handshake before
 * the credentials.
 */
export function WhyIBuiltThis() {
  return (
    <section className="bg-[#FAF8F3] py-20 md:py-28 px-6 md:px-12 border-b border-brand-border/40">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="font-sans text-brand-gold mb-5"
          style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}
        >
          A note from Ericka
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="font-serif text-brand-navy mb-8 text-balance"
          style={{ fontSize: "clamp(1.85rem, 3.4vw, 2.5rem)", lineHeight: 1.15, letterSpacing: "-0.02em" }}
        >
          Why I built Federal EEO, LLC.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.18, ease: EASE }}
          className="font-sans text-brand-ink space-y-6"
          style={{ fontSize: "1.1875rem", lineHeight: 1.65 }}
        >
          <p>
            After twenty years inside the federal EEO process — as advisor,
            litigator, and trainer — I started Federal EEO, LLC because most
            federal employees don&apos;t lose their cases on the merits. They
            lose them on the calendar, on procedural traps, on documentation
            gaps, and on strategy decisions made under pressure without
            specialist guidance.
          </p>
          <p>
            I built this practice to be the resource I wish every federal
            employee had when they first sensed something was wrong at work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          className="mt-10 flex flex-col"
        >
          {/* Placeholder signature — Ericka can swap to a real scanned signature.
              CONTENT.md flags this as an optional asset request. */}
          <p
            className="font-serif italic text-brand-gold"
            style={{ fontSize: "2rem", lineHeight: 1, fontWeight: 400 }}
          >
            Ericka G. Dorsey
          </p>
          <p className="font-sans text-brand-muted mt-2" style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>
            Founder &amp; Principal Consultant
          </p>
        </motion.div>
      </div>
    </section>
  );
}
