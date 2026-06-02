"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { EASE } from "@/lib/motion";

// ⚠️ CONTENT.md — Ericka should review and expand FAQ answers before launch.
const FAQS = [
  {
    q: "What is the 45-day deadline and why does it matter?",
    a: "Federal employees must contact an EEO Counselor within 45 calendar days of the alleged discriminatory act — or within 45 days of becoming aware of it. Missing this deadline almost always results in dismissal of the complaint, with very limited exceptions. It is the most common and most preventable way federal EEO claims are lost.",
  },
  {
    q: "Does booking a consultation create an attorney-client relationship?",
    a: "No. Consultations are for strategic guidance and case assessment based on the information available at the time of the meeting. Booking a consultation with Federal EEO, LLC does not create an attorney-client relationship or guarantee representation.",
  },
  {
    q: "What is the difference between the informal and formal complaint process?",
    a: "The informal process begins when you contact an EEO Counselor within the 45-day window. The counselor attempts resolution through counseling or alternative dispute resolution. If unresolved, you receive a Notice of Right to File and may then file a formal complaint with your agency's EEO office. The formal complaint triggers an investigation, the Report of Investigation, and ultimately the right to an EEOC hearing or final agency decision.",
  },
  {
    q: "What is the Report of Investigation (ROI)?",
    a: "The ROI is the evidentiary record compiled by the agency's investigator — typically hundreds of pages including witness affidavits, agency documents, emails, personnel records, and the investigative report. It forms the basis of your hearing and is often the decisive document in your case. Reviewing the ROI strategically is one of the most important things you can do before your hearing.",
  },
  {
    q: "Can you help me even if I've already missed a deadline?",
    a: "It depends on the specific facts. In some cases, doctrines such as the continuing violation theory, equitable tolling, or discovery rules may preserve your ability to proceed. We can assess whether any exceptions apply and what options remain. Do not assume your case is over without getting an expert opinion.",
  },
  {
    q: "Do you handle cases outside of Washington, DC?",
    a: "Yes. Federal employees are located across the country and abroad. We provide consultations via Google Meet or phone and can represent clients in federal agency EEO processes and EEOC proceedings regardless of location.",
  },
  {
    q: "What types of discrimination do you handle?",
    a: "We handle discrimination based on race, color, national origin, sex (including sexual harassment and gender-based discrimination), religion, age (40+), disability, and reprisal for prior EEO activity — all protected under Title VII of the Civil Rights Act, the Age Discrimination in Employment Act, and the Rehabilitation Act as applied to federal employees.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white section-padding" aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12"
        >
          <p className="font-sans text-xs tracking-[0.18em] uppercase text-brand-gold mb-3">
            Common Questions
          </p>
          <h2 className="font-serif text-display-md text-brand-navy text-balance">
            What Federal Employees Ask Us
          </h2>
        </motion.div>

        <dl className="divide-y divide-brand-border">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.04 }}
            >
              <dt>
                <button
                  aria-expanded={open === i}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left focus-visible:outline-brand-gold"
                >
                  <span className="font-serif text-brand-navy text-[1.05rem] leading-snug">
                    {faq.q}
                  </span>
                  <span className="shrink-0 mt-0.5 text-brand-muted">
                    {open === i ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
              </dt>
              <AnimatePresence mode="wait">
                {open === i && (
                  <motion.dd
                    id={`faq-${i}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-sm text-brand-muted leading-relaxed pb-5 pr-8">
                      {faq.a}
                    </p>
                  </motion.dd>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
