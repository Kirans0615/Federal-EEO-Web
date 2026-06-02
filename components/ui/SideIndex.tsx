"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

interface SideSection {
  id: string;
  label: string;
}

interface SideIndexProps {
  sections: SideSection[];
}

export function SideIndex({ sections }: SideIndexProps) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");
  const [hovered, setHovered] = useState<string | null>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
  }

  return (
    <nav
      aria-label="Page sections"
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-0"
      style={{ gap: 0 }}
    >
      {sections.map((section, i) => {
        const isActive = active === section.id;
        return (
          <div key={section.id} className="flex flex-col items-center">
            {i > 0 && (
              <div className="w-px h-6 bg-brand-gold/40" aria-hidden="true" />
            )}
            <div className="relative flex items-center group">
              <button
                onClick={() => scrollTo(section.id)}
                onMouseEnter={() => setHovered(section.id)}
                onMouseLeave={() => setHovered(null)}
                aria-label={`Scroll to ${section.label}`}
                className="flex items-center justify-center focus-visible:outline-brand-gold focus-visible:outline-offset-4 rounded-full"
              >
                <motion.div
                  animate={{
                    width: isActive ? 12 : 8,
                    height: isActive ? 12 : 8,
                    backgroundColor: isActive ? "#C4922A" : "transparent",
                    borderColor: isActive ? "#C4922A" : "rgba(196,146,42,0.4)",
                    scale: isActive ? 1 : 1,
                  }}
                  transition={{ duration: prefersReduced ? 0 : 0.3, ease: EASE }}
                  className="rounded-full border"
                  style={{ borderWidth: 1.5 }}
                />
              </button>
              {/* Label tooltip */}
              <AnimatePresence>
                {hovered === section.id && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.2, ease: EASE }}
                    className="absolute right-full mr-3 whitespace-nowrap font-sans bg-white border border-brand-border rounded-sm px-2.5 py-1 shadow-sm pointer-events-none"
                    style={{ fontSize: "0.6875rem", letterSpacing: "0.08em", color: "#1B2A4A" }}
                  >
                    {section.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
