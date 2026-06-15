"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { EASE } from "@/lib/motion";
import { images, getImagePath } from "@/lib/images";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

/**
 * Conversion-optimized authority hero.
 * Two columns at md+: copy left, headshot right.
 * Collapses to single column under 768px (headshot first, copy second).
 */
export function AuthorityHero() {
  return (
    <section
      id="hero"
      className="relative bg-[#FAF8F3] pt-24 pb-16 md:pt-28 md:pb-20 px-6 md:px-12"
      style={{ minHeight: "min(100vh, 900px)" }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center min-h-[600px]">
        {/* Copy column */}
        <div className="order-2 md:order-1">
          <motion.p
            {...rise(0.1)}
            className="font-sans text-brand-gold mb-5"
            style={{ fontSize: "0.78rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}
          >
            Federal EEO Advocacy
          </motion.p>

          <h1 className="font-serif text-brand-navy mb-6" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)", lineHeight: 1.02, letterSpacing: "-0.025em" }}>
            <motion.span {...rise(0.3)} className="block">
              When the federal EEO process is working against you,
            </motion.span>
            <motion.span {...rise(0.55)} className="block text-brand-gold mt-2">
              I help you get it right.
            </motion.span>
          </h1>

          <motion.p
            {...rise(0.85)}
            className="font-sans text-brand-ink max-w-[520px] mb-9"
            style={{ fontSize: "1.0625rem", lineHeight: 1.6 }}
          >
            Most federal EEO cases are lost in the first 45 days — before
            anyone hears the merits. Twenty years inside the federal EEO
            process. ABA Commissioner on Disability Rights. The strategy
            your case needs, from the moment you reach out.
          </motion.p>

          <motion.div {...rise(1.1)} className="flex flex-col sm:flex-row gap-3 mb-9">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-gold text-white text-sm font-sans font-medium rounded-sm hover:bg-brand-gold/90 hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Book a Strategic Consultation
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              href="/webinars/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-brand-navy/30 text-brand-navy text-sm font-sans font-medium rounded-sm hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all"
            >
              <PlayCircle size={15} aria-hidden="true" />
              Watch a Free Webinar
            </Link>
          </motion.div>

          <motion.div
            {...rise(1.3)}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-brand-muted"
            style={{ fontSize: "0.78rem", letterSpacing: "0.06em" }}
          >
            <span>Licensed Attorney</span>
            <span className="text-brand-gold" aria-hidden="true">•</span>
            <span>20+ Years Federal EEO</span>
            <span className="text-brand-gold" aria-hidden="true">•</span>
            <span>GW Law JD</span>
          </motion.div>
        </div>

        {/* Headshot column */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
          className="order-1 md:order-2 relative flex justify-center md:justify-end"
        >
          {/* Decorative gold circle behind headshot */}
          <div
            aria-hidden="true"
            className="absolute hidden md:block border border-brand-gold/45 rounded-full pointer-events-none"
            style={{
              width: "70%",
              aspectRatio: "1 / 1",
              top: "8%",
              right: "-6%",
            }}
          />
          {/* Headshot frame */}
          <div
            className="relative w-[280px] sm:w-[340px] md:w-[420px] lg:w-[480px] aspect-[4/5] overflow-hidden rounded-2xl"
            style={{
              boxShadow: "0 0 0 2px #C4922A, 24px 24px 48px rgba(27, 42, 74, 0.15)",
            }}
          >
            <Image
              src={getImagePath(images.erickaHeadshot.src)}
              alt={images.erickaHeadshot.alt}
              fill
              priority
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 420px, 480px"
              className="object-cover"
            />
          </div>
          {/* Caption */}
          <div className="absolute -bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-2 text-center md:text-right">
            <p className="font-serif italic text-brand-navy" style={{ fontSize: "1rem" }}>
              Ericka G. Dorsey, Esq.
            </p>
            <p className="font-sans text-brand-gold mt-0.5" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", fontWeight: 600 }}>
              FOUNDER &amp; PRINCIPAL CONSULTANT
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
