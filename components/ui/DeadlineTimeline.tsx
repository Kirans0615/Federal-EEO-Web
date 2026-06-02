"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "@/lib/motion";

const DEADLINES = [
  {
    day:   "Day 0",
    label: "Discriminatory Event",
    color: "#6B7280",
    desc:  "The clock starts the moment a discriminatory act occurs — or from when you became aware of it. Document everything: dates, witnesses, communications, and how the event affected your employment.",
  },
  {
    day:   "Day 45",
    label: "EEO Counselor Contact",
    color: "#C4922A",
    desc:  "You MUST contact your agency's EEO Counselor within 45 calendar days. This is the most critical and most commonly missed deadline in the federal EEO process. Missing it almost always results in permanent dismissal of your claim.",
  },
  {
    day:   "Day ~75",
    label: "Counseling Ends",
    color: "#1B2A4A",
    desc:  "The informal counseling period lasts approximately 30 days (extendable to 90 days with consent for ADR). If the matter is not resolved, the Counselor issues a Notice of Right to File a Formal Complaint.",
  },
  {
    day:   "Day ~105",
    label: "Formal Complaint Filed",
    color: "#1B2A4A",
    desc:  "You have 15 days from receipt of the Notice of Right to File to submit your formal complaint to the agency's EEO office. The formal complaint triggers a formal investigation.",
  },
  {
    day:   "Day ~275",
    label: "Appeal Window",
    color: "#6B7280",
    desc:  "After the Final Agency Decision (FAD), you have 30 days to appeal to the EEOC's Office of Federal Operations (OFO), or 90 days to file in federal district court. Missing these deadlines forecloses your remedy.",
  },
];

export function DeadlineTimeline() {
  const [active, setActive] = useState<number | null>(1); // default: highlight the 45-day one

  return (
    <div className="bg-white border border-brand-border rounded-sm overflow-hidden">
      <div className="p-6 border-b border-brand-border">
        <p className="eyebrow mb-2">Interactive Guide</p>
        <h3 className="font-serif text-brand-navy text-xl">The 5 Critical Federal EEO Deadlines</h3>
        <p className="font-sans text-xs text-brand-muted mt-1">Click any milestone to learn more.</p>
      </div>

      {/* Timeline rail — horizontal on desktop, vertical on mobile */}
      <div className="p-6">
        {/* Desktop horizontal */}
        <div className="hidden md:block relative mb-8">
          {/* Rail */}
          <div className="absolute top-3 left-0 right-0 h-0.5 bg-brand-border" aria-hidden="true" />
          {/* Gold fill to active */}
          <motion.div
            className="absolute top-3 left-0 h-0.5 bg-brand-gold"
            animate={{ width: active !== null ? `${(active / (DEADLINES.length - 1)) * 100}%` : "0%" }}
            transition={{ duration: 0.5, ease: EASE }}
            aria-hidden="true"
          />

          <div className="relative flex justify-between">
            {DEADLINES.map((d, i) => (
              <button
                key={i}
                onClick={() => setActive(active === i ? null : i)}
                className="flex flex-col items-center gap-2 group focus-visible:outline-brand-gold"
                aria-pressed={active === i}
                aria-label={`${d.day}: ${d.label}`}
              >
                <motion.div
                  animate={{
                    scale: active === i ? 1.4 : 1,
                    backgroundColor: active === i ? "#C4922A" : i === 1 ? "#C4922A" : "#1B2A4A",
                  }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="w-3 h-3 rounded-full z-10 relative"
                />
                <span className="font-sans text-[0.62rem] tracking-[0.1em] uppercase text-brand-gold font-medium">{d.day}</span>
                <span className="font-sans text-[0.72rem] text-brand-ink text-center leading-tight max-w-[90px]">{d.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden space-y-3 mb-6">
          {DEADLINES.map((d, i) => (
            <button
              key={i}
              onClick={() => setActive(active === i ? null : i)}
              className={`w-full text-left flex items-center gap-3 p-3 rounded-sm border transition-colors duration-200 ${
                active === i ? "border-brand-gold bg-brand-gold/5" : "border-brand-border bg-white"
              }`}
              aria-pressed={active === i}
            >
              <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${i === 1 || active === i ? "bg-brand-gold" : "bg-brand-navy"}`} />
              <span className="font-sans text-xs text-brand-gold font-medium w-16 shrink-0">{d.day}</span>
              <span className="font-sans text-sm text-brand-ink">{d.label}</span>
            </button>
          ))}
        </div>

        {/* Detail card */}
        <AnimatePresence mode="wait">
          {active !== null && (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: EASE }}
              className={`rounded-sm p-5 border-l-2 ${active === 1 ? "bg-amber-50 border-brand-gold" : "bg-brand-cream border-brand-navy"}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="font-sans text-[0.65rem] tracking-[0.14em] uppercase text-brand-gold font-semibold">
                  {DEADLINES[active].day}
                </span>
                <span className="font-serif text-brand-navy font-semibold">{DEADLINES[active].label}</span>
                {active === 1 && (
                  <span className="ml-auto bg-brand-gold text-white text-[0.6rem] px-2 py-0.5 rounded-sm font-sans tracking-wide uppercase">
                    Most Critical
                  </span>
                )}
              </div>
              <p className="font-sans text-sm text-brand-ink leading-relaxed">{DEADLINES[active].desc}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
