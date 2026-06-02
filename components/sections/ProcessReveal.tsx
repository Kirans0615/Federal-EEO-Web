"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Clock, FileText, Search, Gavel, Scale } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

interface Stage {
  id: number;
  icon: React.ElementType;
  label: string;
  timeline: string;
  whatHappens: string;
  yourRole: string;
  ourSupport: string;
}

const STAGES: Stage[] = [
  {
    id: 1,
    icon: Clock,
    label: "Initial Counselor Contact",
    timeline: "Day 1–45",
    whatHappens:
      "The 45-day window opens from the date of the discriminatory act. A federal employee must contact an EEO counselor within this window or risk permanent dismissal of the complaint.",
    yourRole:
      "Identify the triggering event, calculate your exact deadline, and contact your agency EEO office in writing before day 45. Document everything from day one.",
    ourSupport:
      "We help you identify the correct triggering event, calculate your deadline precisely, and frame the initial counselor contact to preserve all legal theories — including those you may not yet realize you have.",
  },
  {
    id: 2,
    icon: FileText,
    label: "Formal Complaint Filing",
    timeline: "Day 45–60",
    whatHappens:
      "If counseling doesn't resolve the matter, the counselor issues a Notice of Right to File within 30 days. You then have 15 days to file a formal written complaint with the agency.",
    yourRole:
      "File the formal complaint within the 15-day window after receiving your Notice of Right to File. The complaint must identify every basis, issue, and discriminatory act you intend to pursue.",
    ourSupport:
      "We draft or review your formal complaint to ensure all legal theories are preserved, all protected bases are properly asserted, and all incidents are included — errors at this stage cannot be corrected later.",
  },
  {
    id: 3,
    icon: Search,
    label: "Investigation (ROI)",
    timeline: "Months 2–8",
    whatHappens:
      "The agency conducts an investigation lasting up to 180 days and produces a Report of Investigation (ROI) — the evidentiary record that will define your case at the hearing stage.",
    yourRole:
      "Respond to investigator requests, provide documentation, and identify witnesses. The record built during investigation is the record you'll live with at the hearing.",
    ourSupport:
      "We analyze the ROI for evidentiary gaps, agency overreach, and opportunities to request supplemental investigation. We translate the dense procedural record into a strategic hearing roadmap.",
  },
  {
    id: 4,
    icon: Gavel,
    label: "Hearing or Final Decision",
    timeline: "Months 9–18+",
    whatHappens:
      "After the ROI, you may request an EEOC hearing before an administrative judge, or request a Final Agency Decision. The hearing is your most powerful opportunity to present evidence and challenge the agency.",
    yourRole:
      "Make the critical strategic election: hearing before an EEOC administrative judge, or FAD from the agency. The choice has significant implications for your outcome and appeal options.",
    ourSupport:
      "We handle every aspect of the hearing: discovery, motions, witness preparation, direct and cross-examination, and closing submissions. We represent with courtroom rigor in an administrative forum.",
  },
  {
    id: 5,
    icon: Scale,
    label: "Appeal",
    timeline: "Months 18–36+",
    whatHappens:
      "Unfavorable decisions can be appealed to the EEOC's Office of Federal Operations (OFO), and from there to federal district court. Roughly one-third of agency final actions are reversed on appeal.",
    yourRole:
      "File a timely appeal — 30 days from receipt of a Final Agency Decision, or 30 days from an administrative judge's final order. Missing the appeal deadline is generally fatal to the claim.",
    ourSupport:
      "We draft appellate briefs for OFO and evaluate the strength of district court options. Many claims that appear lost at the agency level are salvageable on appeal with the right argument.",
  },
];

export function ProcessReveal() {
  const [active, setActive] = useState<number>(1);
  const prefersReduced = useReducedMotion();
  const current = STAGES.find((s) => s.id === active) ?? STAGES[0];

  return (
    <section aria-label="Federal EEO process stages" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-sans text-brand-gold mb-3" style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            The Process
          </p>
          <h2 className="font-serif text-brand-navy" style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", letterSpacing: "-0.02em" }}>
            Five stages. Every one matters.
          </h2>
          <p className="font-sans text-brand-muted mt-3 max-w-xl" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
            The federal EEO complaint process is procedurally dense and unforgiving of missed deadlines. Click each stage to understand what it demands — and how we help.
          </p>
        </div>

        {/* Rail + nodes */}
        <div className="relative mb-12" role="tablist" aria-label="Process stages">
          {/* Background rail */}
          <div className="absolute top-[22px] left-0 right-0 h-0.5 bg-brand-navy/15" aria-hidden="true" />
          {/* Gold fill to active node */}
          <motion.div
            className="absolute top-[22px] left-0 h-0.5 bg-brand-gold"
            animate={{ width: `${((active - 1) / (STAGES.length - 1)) * 100}%` }}
            transition={{ duration: prefersReduced ? 0 : 0.4, ease: EASE }}
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-5 gap-2">
            {STAGES.map((stage) => {
              const Icon = stage.icon;
              const isActive = stage.id === active;
              return (
                <button
                  key={stage.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`stage-panel-${stage.id}`}
                  onClick={() => setActive(stage.id)}
                  className="flex flex-col items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 rounded-sm"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.35 : 1,
                      opacity: isActive ? 1 : 0.4,
                    }}
                    transition={{ duration: prefersReduced ? 0 : 0.25, ease: EASE }}
                    className={`w-11 h-11 rounded-full flex items-center justify-center border-2 transition-colors duration-200 ${
                      isActive
                        ? "bg-brand-gold border-brand-gold text-white shadow-md"
                        : "bg-white border-brand-navy/30 text-brand-navy group-hover:border-brand-gold group-hover:text-brand-gold"
                    }`}
                  >
                    <Icon size={16} />
                  </motion.div>
                  <span
                    className="font-sans text-center leading-tight transition-colors duration-200"
                    style={{
                      fontSize: "0.6875rem",
                      letterSpacing: "0.04em",
                      color: isActive ? "#C4922A" : "#6B7280",
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {stage.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            id={`stage-panel-${active}`}
            role="tabpanel"
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="bg-brand-cream border border-brand-border rounded-sm p-8 md:p-10"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="font-sans text-brand-gold mb-2" style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  Timeline
                </p>
                <p className="font-serif text-brand-navy text-xl">{current.timeline}</p>
                <div className="mt-4 h-0.5 w-12 bg-brand-gold" />
              </div>
              <div className="md:col-span-2 space-y-6">
                <div>
                  <p className="font-sans text-brand-gold mb-2" style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                    What Happens
                  </p>
                  <p className="font-sans text-brand-ink leading-relaxed" style={{ fontSize: "0.9375rem" }}>{current.whatHappens}</p>
                </div>
                <div>
                  <p className="font-sans text-brand-gold mb-2" style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                    Your Role
                  </p>
                  <p className="font-sans text-brand-ink leading-relaxed" style={{ fontSize: "0.9375rem" }}>{current.yourRole}</p>
                </div>
                <div>
                  <p className="font-sans text-brand-gold mb-2" style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                    How We Help
                  </p>
                  <p className="font-sans text-brand-ink leading-relaxed" style={{ fontSize: "0.9375rem" }}>{current.ourSupport}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
