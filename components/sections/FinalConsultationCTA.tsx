"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EASE } from "@/lib/motion";
import { getImagePath } from "@/lib/images";

export function FinalConsultationCTA() {
  return (
    <section className="relative bg-brand-navy text-white overflow-hidden">
      <Image
        src={getImagePath("/images/washington-monument.jpg")}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-right opacity-10"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/70" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="font-sans text-brand-gold mb-4"
          style={{ fontSize: "0.75rem", letterSpacing: "0.24em", textTransform: "uppercase", fontWeight: 600 }}
        >
          Ready to talk?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="font-serif text-white mb-6 text-balance"
          style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Most federal EEO cases are lost early. Let&apos;s get yours on the right footing.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2, ease: EASE }}
          className="font-sans text-white/75 mb-10 max-w-2xl mx-auto"
          style={{ fontSize: "1.0625rem", lineHeight: 1.65 }}
        >
          Strategic consultations start with a structured assessment of your
          situation and the deadlines you&apos;re facing. No fluff, no
          boilerplate — just the analysis your case actually needs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-6"
        >
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-gold text-white text-sm font-sans font-medium rounded-sm hover:bg-brand-gold/90 hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            Book a Strategic Consultation
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <Link
            href="/services/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/35 text-white text-sm font-sans font-medium rounded-sm hover:bg-white hover:text-brand-navy transition-all"
          >
            See Service Options
          </Link>
        </motion.div>
        <p className="font-sans text-white/55 text-xs">
          Booking a consultation does not create an attorney-client relationship.{" "}
          <a href="#disclaimer" className="underline hover:text-white">
            See full disclosure
          </a>
          .
        </p>
      </div>
    </section>
  );
}
