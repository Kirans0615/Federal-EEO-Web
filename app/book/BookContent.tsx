"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, Mail, Phone } from "lucide-react";
import { EASE } from "@/lib/motion";
import {
  CALENDLY_CONSULTATION_URL,
  isCalendlyConfigured,
  FIRM,
} from "@/lib/constants";

export function BookContent() {
  const params = useSearchParams();
  const submitted = params.get("submitted") === "true";
  const calendlyReady = isCalendlyConfigured();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <section className="bg-brand-navy pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex items-start gap-3 bg-brand-gold/10 border border-brand-gold/30 rounded-sm p-4 mb-8 max-w-2xl"
            >
              <CheckCircle size={18} className="text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-sans font-semibold text-white text-sm">Intake received.</p>
                <p className="font-sans text-white/70 text-sm mt-0.5">
                  Select a time below to complete your booking. You will receive a
                  confirmation email from Calendly immediately after.
                </p>
              </div>
            </motion.div>
          )}
          <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">
            Select a Time
          </p>
          <h1 className="font-serif text-white text-display-lg leading-tight text-balance">
            Schedule Your Consultation
          </h1>
          <p className="font-sans text-white/70 mt-3 max-w-lg text-sm leading-relaxed">
            Choose between a 30-minute Strategic Assessment or a 60-minute Deep Case Review.
            Sessions are available by Google Meet, phone, or in person in the DC metro area.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream section-padding">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          {calendlyReady && mounted ? (
            <>
              {/* Calendly inline embed — replace CALENDLY_CONSULTATION_URL
                  in /lib/constants.ts after Ericka completes setup. */}
              <div
                className="calendly-inline-widget bg-white border border-brand-border rounded-sm overflow-hidden"
                data-url={CALENDLY_CONSULTATION_URL}
                style={{ minWidth: "320px", height: "720px" }}
                aria-label="Calendly scheduling embed"
              />
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
              />
            </>
          ) : (
            <div className="bg-white border border-brand-border rounded-sm overflow-hidden">
              <div className="p-10 md:p-14 max-w-2xl mx-auto text-center">
                <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">
                  Scheduling is coming online
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 text-balance">
                  Booking by direct contact, just for now.
                </h2>
                <p className="font-sans text-sm text-brand-muted leading-relaxed mb-8 max-w-lg mx-auto">
                  We are finalizing the integrated calendar booking. In the
                  meantime, please reach out directly and we will schedule your
                  consultation by reply.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`mailto:${FIRM.email}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-navy text-white text-sm font-sans font-medium rounded-sm hover:bg-brand-navy/90 transition-colors"
                  >
                    <Mail size={15} aria-hidden="true" />
                    {FIRM.email}
                  </a>
                  <a
                    href={`tel:${FIRM.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-brand-border text-brand-ink text-sm font-sans font-medium rounded-sm hover:bg-brand-cream transition-colors"
                  >
                    <Phone size={15} aria-hidden="true" />
                    {FIRM.phone}
                  </a>
                </div>
                <p className="font-sans text-xs text-brand-muted mt-8 max-w-md mx-auto leading-relaxed">
                  See <code className="text-brand-ink">SETUP.md → Calendly</code>{" "}
                  for the two-minute setup that brings the inline scheduler
                  online once Ericka&apos;s Calendly account is configured.
                </p>
              </div>
            </div>
          )}

          <p className="mt-6 text-xs text-brand-muted font-sans leading-relaxed text-center">
            Consultations are for strategic guidance and case assessment. Booking does not create
            an attorney-client relationship or guarantee representation.
          </p>
        </div>
      </section>
    </>
  );
}
