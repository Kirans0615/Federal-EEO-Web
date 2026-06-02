import type { Metadata } from "next";
import { IntakeForm } from "@/components/forms/IntakeForm";
import { ContactSidebar } from "./ContactSidebar";

export const metadata: Metadata = {
  title: "Contact & Book",
  description: "Schedule a consultation with Federal EEO, LLC. Complete our intake form to book a session with Ericka Guthrie Dorsey, Esq.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row pt-16">
      {/* Right column — Washington Monument vertical hero (desktop only) */}
      <ContactSidebar />

      {/* Left column — form */}
      <div className="flex-1 lg:w-[60%] bg-[#FAF8F3] px-6 md:px-12 lg:px-16 py-16 lg:py-24 overflow-y-auto">
        <p className="eyebrow mb-3">Book a Consultation</p>
        <h1 className="font-serif text-brand-navy mb-2 text-balance"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", letterSpacing: "-0.02em" }}>
          Get Expert Guidance on Your Federal EEO Matter
        </h1>
        <p className="font-sans text-brand-muted text-sm leading-relaxed mb-8 max-w-md">
          Complete the form below. You&rsquo;ll receive a confirmation email immediately and a link
          to schedule your session.
        </p>

        {/* Disclaimer — gold-bordered, impossible to miss, visually elegant */}
        <div className="border border-brand-gold/50 bg-white rounded-sm p-5 mb-8 flex gap-3">
          <div className="w-0.5 bg-brand-gold shrink-0 rounded-full" aria-hidden="true" />
          <p className="font-sans text-xs text-brand-ink leading-relaxed">
            <strong className="font-semibold text-brand-navy block mb-1">Consultation Disclaimer</strong>
            Consultations are for strategic guidance and case assessment based on the information
            available at the time of the meeting. Booking a consultation with Federal EEO, LLC
            does not create an attorney-client relationship or guarantee representation.
          </p>
        </div>

        <IntakeForm />
      </div>
    </div>
  );
}
