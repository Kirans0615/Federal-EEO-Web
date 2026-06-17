"use client";

import { motion, useReducedMotion } from "framer-motion";

const TRUST_ITEMS = [
  "George Washington University Law School, JD",
  "American Bar Association Commissioner, Commission on Disability Rights",
  "Certified Federal Mediator",
  "20+ Years Federal EEO Advocacy",
];

/**
 * The visual handshake under the hero — four credentials in a navy strip.
 * Desktop: single line with gold dots. Mobile: slow continuous marquee.
 */
export function TrustBar() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <aside
      aria-label="Credentials"
      className="bg-brand-navy text-white/85 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3.5 hidden md:flex items-center justify-center gap-x-5 gap-y-2 flex-wrap font-sans"
        style={{ fontSize: "0.74rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
      >
        {TRUST_ITEMS.map((item, i) => (
          <span key={item} className="flex items-center gap-5">
            <span>{item}</span>
            {i < TRUST_ITEMS.length - 1 && (
              <span className="text-brand-gold" aria-hidden="true">●</span>
            )}
          </span>
        ))}
      </div>
      {/* Mobile marquee */}
      <div className="md:hidden overflow-hidden py-3" aria-hidden="true">
        <motion.div
          className="flex whitespace-nowrap gap-10 font-sans"
          style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
          animate={prefersReducedMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={prefersReducedMotion ? undefined : { duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[...TRUST_ITEMS, ...TRUST_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-10 shrink-0">
              <span>{item}</span>
              <span className="text-brand-gold">●</span>
            </span>
          ))}
        </motion.div>
      </div>
    </aside>
  );
}
