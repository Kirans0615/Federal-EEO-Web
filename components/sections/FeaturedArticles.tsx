"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { EASE } from "@/lib/motion";
import { ARTICLES, readingMinutes } from "@/content/articles";

export function FeaturedArticles() {
  const featured = ARTICLES.slice(0, 3);
  return (
    <section className="bg-[#FAF8F3] py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="font-sans text-brand-gold mb-3" style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}>
            Recommended Reading
          </p>
          <h2 className="font-serif text-brand-navy" style={{ fontSize: "clamp(1.85rem, 3.4vw, 2.5rem)", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            The three things every federal employee should read first.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((a, i) => (
            <motion.article
              key={a.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: EASE }}
              className="bg-white border border-brand-border rounded-sm p-8 hover:border-brand-gold/50 hover:shadow-md transition-all flex flex-col"
            >
              <p className="font-sans text-brand-gold mb-3" style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}>
                Recommended Reading
              </p>
              <h3 className="font-serif text-brand-navy mb-3 text-balance" style={{ fontSize: "1.375rem", lineHeight: 1.25, fontWeight: 600 }}>
                {a.title}
              </h3>
              <p className="font-sans text-brand-ink mb-5 flex-1" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                {a.dek}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-brand-border/50">
                <span className="inline-flex items-center gap-1.5 font-sans text-brand-gold" style={{ fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600 }}>
                  <Clock size={11} aria-hidden="true" />
                  {readingMinutes(a)} min read
                </span>
                <Link
                  href={`/resources/${a.slug}/`}
                  className="group inline-flex items-center gap-1 font-sans text-sm font-medium text-brand-gold"
                >
                  Read the guide
                  <ArrowRight size={13} aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/resources/" className="inline-flex items-center gap-1.5 font-sans text-brand-gold hover:underline" style={{ fontSize: "0.95rem", fontWeight: 600 }}>
            Explore the full library
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
