"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, animate, motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

interface Stat {
  value: string;           // display value e.g. "20+", "45", "1/3", "100%"
  numericTarget?: number;  // for count-up animation; omit for non-numeric
  suffix?: string;         // appended after number: "+" or "%"
  caption: string;
  footnote?: string;
  footnoteText?: string;
}

const STATS: Stat[] = [
  {
    value:         "20+",
    numericTarget: 20,
    suffix:        "+",
    caption:       "Years of federal EEO advocacy",
  },
  {
    value:         "45",
    numericTarget: 45,
    caption:       "Days from incident to deadline",
    footnote:      "*",
    footnoteText:  "Federal employees must contact an EEO counselor within 45 calendar days of the discriminatory act under 29 C.F.R. § 1614.105(a)(1). Missing this deadline can result in dismissal of your complaint.",
  },
  {
    value:         "1/3",
    caption:       "Of agency dismissals reversed on appeal",
    footnote:      "†",
    footnoteText:  "Per EEOC FY2014 Annual Report data on OFO appellate reversals of agency final actions.",
  },
  {
    value:         "100%",
    numericTarget: 100,
    suffix:        "%",
    caption:       "Of consultations handled by Ericka personally",
  },
];

function CountUp({ target, suffix = "", start }: { target: number; suffix?: string; start: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    const controls = animate(0, target, {
      duration: 1.5,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [start, target]);

  return <>{display}{suffix}</>;
}

export function StatisticsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [tooltip, setTooltip] = useState<string | null>(null);

  return (
    <section
      ref={ref}
      aria-label="Key statistics"
      className="relative bg-brand-cream"
      style={{ borderTop: "1px solid #C4922A", borderBottom: "1px solid #C4922A" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.caption}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              className="text-center flex flex-col items-center gap-3"
            >
              <div
                className="font-serif text-brand-navy leading-none"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.03em", fontWeight: 600 }}
                aria-label={stat.value}
              >
                {stat.numericTarget !== undefined && isInView ? (
                  <CountUp target={stat.numericTarget} suffix={stat.suffix} start={isInView} />
                ) : (
                  <span>{stat.value}</span>
                )}
              </div>
              <div>
                <p className="font-sans text-brand-ink" style={{ fontSize: "0.875rem", lineHeight: 1.5 }}>
                  {stat.caption}
                  {stat.footnote && (
                    <button
                      type="button"
                      aria-label={`Footnote: ${stat.footnoteText}`}
                      onClick={() => setTooltip(tooltip === stat.footnote ? null : (stat.footnote ?? null))}
                      className="ml-1 text-brand-gold font-sans text-xs align-super cursor-pointer hover:underline"
                    >
                      {stat.footnote}
                    </button>
                  )}
                </p>
                {tooltip === stat.footnote && stat.footnoteText && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 font-sans text-xs text-brand-muted leading-relaxed max-w-[200px] mx-auto bg-white border border-brand-border rounded-sm p-3 shadow-md"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {stat.footnoteText}
                  </motion.p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
