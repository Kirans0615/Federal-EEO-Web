"use client";

import { useEffect, useState } from "react";
import type { ArticleBlock } from "@/content/articles";

type H2 = Extract<ArticleBlock, { kind: "h2" }>;

export function ArticleSidebar({ headings }: { headings: H2[] }) {
  const [active, setActive] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    if (typeof window === "undefined" || headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return <aside />;

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start max-w-xs">
      <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">
        On this page
      </p>
      <ol className="space-y-2 border-l border-brand-border">
        {headings.map((h, i) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`block pl-4 py-1.5 -ml-px border-l-2 font-sans text-sm leading-snug transition-colors ${
                active === h.id
                  ? "border-brand-gold text-brand-navy font-medium"
                  : "border-transparent text-brand-muted hover:text-brand-ink"
              }`}
            >
              <span className="mr-2 text-xs text-brand-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
