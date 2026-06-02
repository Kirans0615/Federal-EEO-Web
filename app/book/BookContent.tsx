"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { EASE } from "@/lib/motion";

// ⚠️ SETUP.md: Replace this with your Cal.com username after account setup.
// Event slugs: "strategic-assessment" (30 min), "deep-case-review" (60 min)

export function BookContent() {
  const params    = useSearchParams();
  const submitted = params.get("submitted") === "true";

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
                  Check your email for a confirmation. Select a time below to complete your booking.
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
            All meetings are available in-person (DC), Google Meet, or phone.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream section-padding">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          {/* Cal.com embed */}
          {/* ⚠️ SETUP.md: Install @calcom/embed-react or use the inline embed script */}
          <div className="bg-white border border-brand-border rounded-sm overflow-hidden min-h-[600px] flex items-center justify-center">
            <div className="text-center p-12">
              <p className="font-sans text-brand-muted text-sm mb-4">
                Cal.com scheduler will appear here after setup.
              </p>
              <p className="font-sans text-xs text-brand-muted max-w-sm mx-auto leading-relaxed">
                See SETUP.md for Cal.com account creation, Google Calendar OAuth configuration,
                and embed code installation instructions.
              </p>
              {/* Production embed — uncomment after Cal.com setup:
              <Cal
                calLink={`${CAL_USERNAME}/strategic-assessment`}
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: "month_view", theme: "light" }}
              />
              */}
            </div>
          </div>

          <p className="mt-6 text-xs text-brand-muted font-sans leading-relaxed text-center">
            Consultations are for strategic guidance and case assessment. Booking does not create
            an attorney-client relationship or guarantee representation.
          </p>
        </div>
      </section>
    </>
  );
}
