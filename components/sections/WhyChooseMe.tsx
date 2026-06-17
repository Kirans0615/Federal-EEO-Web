"use client";

import { motion } from "framer-motion";
import { Scale, Clock, ShieldCheck } from "lucide-react";
import { EASE } from "@/lib/motion";

const CARDS = [
  {
    icon: Scale,
    title: "Federal sector is all I do",
    body: "Most employment attorneys split their attention across private-sector cases. My practice is built entirely around the federal EEO process and its 29 CFR Part 1614 framework. That focus is the difference between strategy and improvisation.",
  },
  {
    icon: Clock,
    title: "I move at the speed of the deadline",
    body: "Federal EEO cases live and die on procedural timelines. From the 45-day initial counselor contact through appeal windows, I structure every engagement around the calendar your case actually runs on.",
  },
  {
    icon: ShieldCheck,
    title: "I work cases personally, not through associates",
    body: "When you hire Federal EEO, LLC, you work with me. Every consultation, every ROI analysis, every hearing strategy comes from twenty years of federal-sector advocacy — not from a junior attorney learning on your case.",
  },
];

export function WhyChooseMe() {
  return (
    <section className="bg-[#F4EFE2] py-20 md:py-28 px-6 md:px-12 border-y border-brand-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="font-sans text-brand-gold-ink mb-3" style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}>
            The Difference
          </p>
          <h2 className="font-serif text-brand-navy" style={{ fontSize: "clamp(1.85rem, 3.4vw, 2.5rem)", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Why federal employees choose to work with me.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
                className="bg-[#FAF8F3] border border-brand-gold/30 rounded-sm p-8 hover:shadow-md transition-shadow"
              >
                <Icon size={32} className="text-brand-gold mb-5" aria-hidden="true" />
                <h3 className="font-serif text-brand-navy mb-4" style={{ fontSize: "1.375rem", lineHeight: 1.25, fontWeight: 600 }}>
                  {c.title}
                </h3>
                <p className="font-sans text-brand-ink" style={{ fontSize: "1rem", lineHeight: 1.65 }}>
                  {c.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
