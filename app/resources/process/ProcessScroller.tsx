"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, AlertTriangle, CheckCircle, Compass } from "lucide-react";
import { EASE } from "@/lib/motion";
import type { ProcessStage } from "@/content/process";

export function ProcessScroller({ stages }: { stages: ProcessStage[] }) {
  const [active, setActive] = useState(stages[0]?.id ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    stages.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [stages]);

  const activeIndex = Math.max(
    0,
    stages.findIndex((s) => s.id === active)
  );
  const progress = ((activeIndex + 1) / stages.length) * 100;

  return (
    <section className="bg-brand-cream py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
        {/* Sticky sidebar nav */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">
            Stage {activeIndex + 1} of {stages.length}
          </p>
          <div className="h-1 bg-brand-border rounded-full mb-7 overflow-hidden">
            <div
              className="h-full bg-brand-gold transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <ol className="space-y-1.5">
            {stages.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`flex items-start gap-3 py-1.5 font-sans text-sm leading-snug transition-colors ${
                    s.id === active
                      ? "text-brand-navy font-medium"
                      : "text-brand-muted hover:text-brand-ink"
                  }`}
                >
                  <span
                    className={`font-serif text-xs w-5 shrink-0 ${
                      i <= activeIndex ? "text-brand-gold" : "text-brand-muted"
                    }`}
                  >
                    {s.numeral}
                  </span>
                  <span>{s.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </aside>

        {/* Stage blocks */}
        <div>
          {stages.map((s) => (
            <motion.section
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.55, ease: EASE }}
              className="mb-24 scroll-mt-28"
            >
              <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">
                Stage {s.numeral}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-navy text-balance leading-[1.1] mb-4">
                {s.title}
              </h2>
              <p className="font-serif italic text-lg text-brand-muted mb-8 max-w-prose">
                {s.summary}
              </p>

              <div className="grid md:grid-cols-2 gap-7 mb-10">
                <div>
                  <h3 className="font-sans text-xs tracking-[0.18em] uppercase text-brand-navy font-semibold mb-3">
                    What happens
                  </h3>
                  <div className="space-y-3">
                    {s.whatHappens.map((p, i) => (
                      <p
                        key={i}
                        className="font-serif text-brand-ink text-base leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-sans text-xs tracking-[0.18em] uppercase text-brand-navy font-semibold mb-3">
                    What you should be doing
                  </h3>
                  <ul className="space-y-2.5">
                    {s.whatYouShouldDo.map((p, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle
                          size={14}
                          className="text-brand-gold shrink-0 mt-1.5"
                          aria-hidden="true"
                        />
                        <span className="font-serif text-brand-ink text-base leading-relaxed">
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-7 mb-8">
                <div className="bg-white border border-brand-border rounded-sm p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={14} className="text-brand-gold" aria-hidden="true" />
                    <p className="font-sans text-xs tracking-[0.18em] uppercase text-brand-navy font-semibold">
                      Typical timeline
                    </p>
                  </div>
                  <p className="font-serif text-brand-ink leading-relaxed">
                    {s.typicalTimeline}
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-sm p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle size={14} className="text-amber-700" aria-hidden="true" />
                    <p className="font-sans text-xs tracking-[0.18em] uppercase text-amber-900 font-semibold">
                      Common mistakes
                    </p>
                  </div>
                  <ul className="space-y-2 list-disc pl-4 marker:text-amber-700">
                    {s.commonMistakes.map((m, i) => (
                      <li
                        key={i}
                        className="font-serif text-amber-900 text-base leading-relaxed"
                      >
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-brand-navy text-white rounded-sm p-6">
                <div className="flex items-start gap-3">
                  <Compass size={18} className="text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-sans text-brand-gold text-xs tracking-[0.18em] uppercase mb-2">
                      How Federal EEO helps at this stage
                    </p>
                    <p className="font-serif text-white/90 leading-relaxed">
                      {s.howWeHelp}
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
}
