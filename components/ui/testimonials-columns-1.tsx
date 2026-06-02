"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

// ⚠️ CONTENT.md — Replace with real client quotes once signed releases are obtained.
export const TESTIMONIALS = [
  {
    quote:   "I contacted Federal EEO three days before my 45-day counselor contact deadline. Ericka assessed my retaliation case immediately and helped me file in time. Without her I would have lost the right to pursue my claim entirely.",
    name:    "Former GS-12 Analyst",
    agency:  "Department of Veterans Affairs",
    outcome: "Timely complaint filed; case advanced to formal stage",
  },
  {
    quote:   "After receiving a 400-page Report of Investigation, I had no idea what I was looking at. Federal EEO walked me through the critical evidence gaps and helped me build a hearing strategy. We won at the administrative judge level.",
    name:    "Federal Law Enforcement Officer",
    agency:  "Department of Homeland Security",
    outcome: "Administrative judge ruled in client's favor",
  },
  {
    quote:   "My agency denied my reasonable accommodation request twice. Ericka helped me understand the interactive process requirements under the Rehabilitation Act and we submitted a third request with supporting documentation they couldn't refuse.",
    name:    "Program Specialist, GS-11",
    agency:  "Department of Health and Human Services",
    outcome: "Reasonable accommodation granted after third request",
  },
  {
    quote:   "I was transferred to a less desirable position after filing an EEO complaint. Federal EEO identified it as textbook reprisal, helped me amend my complaint, and negotiated a settlement that included a return to my original position.",
    name:    "Administrative Officer",
    agency:  "Department of Defense",
    outcome: "Settlement: position restoration + back pay",
  },
  {
    quote:   "The training Federal EEO provided to our union local was exceptional. Members now understand the 45-day rule, the difference between informal and formal complaints, and what to document from day one.",
    name:    "Chapter President",
    agency:  "AFGE Local, Department of Labor",
    outcome: "150 union members trained; 3 subsequent timely filings",
  },
  {
    quote:   "I had already missed the counselor contact deadline and thought my case was dead. Federal EEO identified a continuing violation theory that applied to my situation and helped me file a complaint that survived the agency's motion to dismiss.",
    name:    "IT Specialist, GS-13",
    agency:  "General Services Administration",
    outcome: "Complaint survived dismissal via continuing violation doctrine",
  },
];

function TestimonialCard({ quote, name, agency, outcome }: (typeof TESTIMONIALS)[0]) {
  return (
    <div className="bg-brand-cream border-l-2 border-brand-gold rounded-sm p-6 flex flex-col gap-4"
         style={{ boxShadow: "inset 0 2px 8px rgba(27,42,74,0.06), 0 1px 3px rgba(27,42,74,0.08)" }}>
      <div className="flex gap-1" aria-label="Five stars">
        {[1,2,3,4,5].map((i) => (
          <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#C4922A" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>
      <blockquote className="font-serif text-brand-navy text-[1.05rem] leading-relaxed italic flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="pt-4 border-t border-brand-border">
        <p className="font-sans font-semibold text-sm text-brand-navy">{name}</p>
        <p className="font-sans text-xs text-brand-muted mt-0.5">{agency}</p>
        <p className="font-sans text-xs text-brand-gold mt-1.5 font-medium">{outcome}</p>
      </div>
    </div>
  );
}

export function TestimonialsColumns() {
  const col1 = TESTIMONIALS.filter((_, i) => i % 3 === 0);
  const col2 = TESTIMONIALS.filter((_, i) => i % 3 === 1);
  const col3 = TESTIMONIALS.filter((_, i) => i % 3 === 2);

  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "linear-gradient(to bottom, #1B2A4A 0%, #223256 100%)" }}
      aria-label="Client testimonials"
    >
      <div className="container-wide px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center mb-14"
        >
          <p className="font-sans text-[0.7rem] tracking-[0.15em] uppercase text-brand-gold mb-3">Results</p>
          <h2 className="font-serif text-brand-cream text-balance" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            Federal Employees We&rsquo;ve Helped
          </h2>
          <p className="font-sans text-white/50 max-w-md mx-auto text-sm mt-3">
            Placeholder testimonials — replace with real quotes once signed releases are obtained.
          </p>
        </motion.div>

        {/* Desktop 3-col */}
        <div className="hidden md:grid grid-cols-3 gap-5 items-start relative"
             style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
          {[col1, col2, col3].map((col, ci) => (
            <div key={ci} className={`flex flex-col gap-5 ${ci === 1 ? "mt-10" : ci === 2 ? "mt-5" : ""}`}>
              {col.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.65, ease: EASE, delay: ci * 0.1 + i * 0.08 }}
                >
                  <TestimonialCard {...t} />
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile single col */}
        <div className="md:hidden flex flex-col gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }}
            >
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
