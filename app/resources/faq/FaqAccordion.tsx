"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { EASE } from "@/lib/motion";
import type { FaqEntry } from "@/content/faq";

export function FaqAccordion({ entries }: { entries: FaqEntry[] }) {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter((e) => {
      if (e.question.toLowerCase().includes(q)) return true;
      if (e.keywords.some((k) => k.toLowerCase().includes(q))) return true;
      return e.answer.some((p) => p.toLowerCase().includes(q));
    });
  }, [query, entries]);

  return (
    <>
      <div className="relative mb-10">
        <Search
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted pointer-events-none"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search the questions…"
          aria-label="Search FAQ"
          className="w-full pl-11 pr-4 py-3 bg-white border border-brand-border rounded-sm font-sans text-sm text-brand-ink placeholder:text-brand-muted/70 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="font-serif italic text-center text-brand-muted py-10">
          No matches. Try a different word, or{" "}
          <a
            href="/contact/"
            className="text-brand-gold underline hover:text-brand-ink"
          >
            send us the question directly
          </a>
          .
        </p>
      ) : (
        <ul className="border-t border-brand-border">
          {filtered.map((entry) => {
            const isOpen = openId === entry.id;
            return (
              <li
                key={entry.id}
                className="border-b border-brand-border"
                id={entry.id}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : entry.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${entry.id}`}
                  className="w-full text-left py-6 flex items-start justify-between gap-6 group"
                >
                  <span className="font-serif text-xl md:text-2xl text-brand-navy leading-snug group-hover:text-brand-gold transition-colors text-balance">
                    {entry.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`mt-1 shrink-0 text-brand-gold transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${entry.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="pb-7 space-y-4 max-w-prose">
                        {entry.answer.map((p, i) => (
                          <p
                            key={i}
                            className="font-serif text-brand-ink text-lg leading-[1.7]"
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
