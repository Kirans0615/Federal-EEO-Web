"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

const ITEMS = [
  "Licensed Attorney",
  "Certified Mediator",
  "ABA Commission on Disability Rights",
  "University of Pennsylvania, BA",
  "George Washington University Law School, JD",
  "20+ Years Federal EEO Advocacy",
  "Title VII & Rehabilitation Act Expert",
  "Federal Complaint Process Specialist",
];

const DOT = (
  <span
    className="mx-5 text-brand-gold/60 select-none shrink-0"
    aria-hidden="true"
  >
    •
  </span>
);

function MarqueeRow({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="flex items-center shrink-0"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      aria-hidden="true"
    >
      {children}
      {children}
    </motion.div>
  );
}

export function CredentialsMarquee() {
  const reducedMotion = useReducedMotion();

  const items = (
    <>
      {ITEMS.map((item, i) => (
        <span key={i} className="flex items-center shrink-0">
          <span className="font-sans text-[0.68rem] tracking-[0.18em] uppercase text-brand-cream/85 small-caps whitespace-nowrap">
            {item}
          </span>
          {DOT}
        </span>
      ))}
    </>
  );

  if (reducedMotion) {
    return (
      <div className="bg-brand-navy py-3 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-6 gap-y-1">
          {ITEMS.map((item, i) => (
            <span key={i} className="font-sans text-[0.68rem] tracking-[0.18em] uppercase text-brand-cream/85 small-caps">
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-brand-navy py-3 border-y border-white/5 overflow-hidden"
      aria-label="Ericka Guthrie Dorsey credentials and affiliations"
    >
      {/* Fade edges */}
      <div className="relative flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-brand-navy to-transparent pointer-events-none" aria-hidden="true" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-brand-navy to-transparent pointer-events-none" aria-hidden="true" />
        <MarqueeRow>{items}</MarqueeRow>
        <MarqueeRow>{items}</MarqueeRow>
      </div>
    </div>
  );
}
