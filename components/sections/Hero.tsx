"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import blurData from "@/lib/blur-data.json";

const EASE = [0.16, 1, 0.3, 1] as const;

const line1Variants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, delay: 0.2 } },
};
const line2Variants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, delay: 0.6 } },
};
const subVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: 1.0 } },
};
const ctaVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay: 1.2 } },
};
const trustVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE, delay: 1.5 } },
};

const TRUST_SIGNALS = [
  "ABA Commissioner",
  "20+ Years Federal EEO",
  "GW Law JD",
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-16" aria-label="Homepage hero">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/washington-overlook.jpg"
          alt="Panoramic view of the Washington DC cityscape and National Mall at dusk, seen from an elevated overlook"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurData.washingtonOverlook}
          quality={85}
        />
        {/* Vertical gradient overlay: navy 75% top → 40% mid → 90% bottom */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(27,42,74,0.78) 0%, rgba(27,42,74,0.42) 45%, rgba(27,42,74,0.92) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-28 md:py-40">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">

          {/* Line 1 */}
          <motion.h1
            variants={line1Variants}
            className="font-serif text-white leading-[1.08] text-balance"
            style={{ fontSize: "clamp(2rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            Most federal EEO cases
            <br />are lost early.
          </motion.h1>

          {/* Line 2 — gold */}
          <motion.p
            variants={line2Variants}
            className="font-serif text-brand-gold italic leading-[1.12] mt-3 text-balance"
            style={{ fontSize: "clamp(1.5rem, 4.5vw, 3.75rem)", letterSpacing: "-0.01em" }}
          >
            We help you get it right, from the start.
          </motion.p>

          {/* Subtitle */}
          <motion.p
            variants={subVariants}
            className="font-sans text-white/75 mt-6 max-w-xl leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.125rem)" }}
          >
            Ericka Guthrie Dorsey, Esq. brings 20+ years of dedicated federal employment
            law experience to every case — from the 45-day counselor contact through
            EEOC administrative hearings.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={ctaVariants} className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-white font-sans font-medium text-sm tracking-wide rounded-sm transition-all duration-200 hover:bg-brand-gold/90 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-white"
            >
              Book a Consultation
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white font-sans text-sm tracking-wide rounded-sm transition-all duration-200 hover:border-white/80 hover:bg-white/10 focus-visible:outline-white"
            >
              Learn the Process
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={trustVariants}
            className="mt-14 flex flex-col items-start gap-6"
          >
            {/* Animated scroll line */}
            <div className="flex flex-col items-center gap-1 opacity-60" aria-hidden="true">
              <div className="w-px h-8 overflow-hidden bg-white/20">
                <motion.div
                  className="w-px bg-white"
                  animate={{ scaleY: [0, 1, 1, 0], y: ["0%", "0%", "100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 0.3 }}
                  style={{ originY: 0, height: "100%" }}
                />
              </div>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-3">
              {TRUST_SIGNALS.map((signal, i) => (
                <span key={signal} className="flex items-center gap-3">
                  <span className="font-sans text-[0.65rem] tracking-[0.18em] uppercase text-white/70">
                    {signal}
                  </span>
                  {i < TRUST_SIGNALS.length - 1 && (
                    <span className="w-1 h-1 rounded-full bg-brand-gold" aria-hidden="true" />
                  )}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
