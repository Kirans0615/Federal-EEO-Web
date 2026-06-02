"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

// ⚠️ CONTENT.md: All three article titles and excerpts below are placeholders.
// Ericka must supply the actual article copy and confirm the topics before launch.
const ARTICLES = [
  {
    num: "01",
    title: "The 45-Day Clock: A Federal Employee's First Move",
    excerpt:
      "Missing the initial counselor contact deadline is the single most preventable way to lose a federal EEO case. Here's what the clock means, when it starts, and what to do right now.",
    href: "/resources",
  },
  {
    num: "02",
    title: "Reasonable Accommodation: What Agencies Actually Owe You",
    excerpt:
      "The interactive process has rules — and agencies break them more often than employees realize. Understanding your rights under the Rehabilitation Act is the first step to enforcing them.",
    href: "/resources",
  },
  {
    num: "03",
    title: "Reading Your ROI: A Strategic Framework",
    excerpt:
      "The Report of Investigation is hundreds of pages of agency-produced evidence. Most employees don't know how to read it strategically. Here's the framework we use in every case.",
    href: "/resources",
  },
];

export function FeaturedResources() {
  return (
    <section aria-label="Featured resources" className="bg-brand-cream section-padding">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <p className="eyebrow mb-3">From the Practice</p>
          <h2 className="font-serif text-brand-navy" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}>
            What you need to know, plainly stated.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ARTICLES.map((article, i) => (
            <motion.article
              key={article.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              className="group bg-[#FAF8F3] border border-brand-border rounded-sm p-8 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              style={{ borderTop: "1px solid #C4922A" }}
            >
              <span
                className="font-serif italic text-brand-gold"
                style={{ fontSize: "1.125rem" }}
                aria-hidden="true"
              >
                {article.num}
              </span>
              <h3
                className="font-serif text-brand-navy"
                style={{ fontSize: "1.375rem", letterSpacing: "-0.01em", lineHeight: 1.25, fontWeight: 600 }}
              >
                {article.title}
              </h3>
              <p className="font-sans text-brand-ink leading-relaxed flex-1" style={{ fontSize: "0.9375rem" }}>
                {article.excerpt}
              </p>
              <Link
                href={article.href}
                className="inline-flex items-center gap-1.5 font-sans text-brand-gold link-underline group-hover:gap-2.5 transition-all duration-200"
                style={{ fontSize: "0.8125rem", letterSpacing: "0.04em" }}
              >
                Coming soon
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
