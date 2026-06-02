"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { EASE } from "@/lib/motion";

export function ConsultationCTA() {
  return (
    <section className="bg-brand-navy section-padding relative overflow-hidden" aria-label="Book a consultation">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brand-gold/10 blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-brand-gold/5 blur-2xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container-narrow text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <div className="flex justify-center mb-6">
            <div className="flex gap-1">
              {[1,2,3].map((i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#C4922A" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
          </div>

          <h2 className="font-serif text-white text-display-lg mb-5 text-balance">
            Don&rsquo;t Navigate This Alone.
          </h2>

          <p className="font-sans text-white/70 text-base leading-relaxed mb-4 max-w-lg mx-auto">
            The federal EEO process is procedurally complex and deadline-driven. One missed
            step can permanently foreclose your claim. We can help you get it right.
          </p>

          <div className="flex items-center justify-center gap-2 mb-10 text-brand-gold">
            <Clock size={15} aria-hidden="true" />
            <p className="font-sans text-sm">
              Your 45-day window may already be counting down.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-white font-sans font-medium text-sm tracking-wide hover:bg-brand-gold/90 transition-colors duration-200 rounded-sm"
            >
              Schedule a Consultation <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-sans text-sm tracking-wide hover:border-white/60 hover:bg-white/5 transition-all duration-200 rounded-sm"
            >
              View All Services
            </Link>
          </div>

          <p className="mt-8 text-white/40 font-sans text-xs max-w-lg mx-auto">
            Consultations are for strategic guidance and case assessment. Booking does not
            create an attorney-client relationship or guarantee representation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
