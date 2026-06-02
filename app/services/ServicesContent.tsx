"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { EASE, staggerContainer, fadeUp } from "@/lib/motion";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { ProcessReveal } from "@/components/sections/ProcessReveal";
import { PullQuote } from "@/components/ui/PullQuote";
import { Check } from "lucide-react";
import blurData from "@/lib/blur-data.json";

const CONSULTATION_TIERS = [
  {
    name:     "30-Minute Strategic Assessment",
    price:    "TBD",
    ideal:    "For federal employees who need immediate clarity on their situation and deadlines.",
    includes: [
      "Review of your timeline and EEO deadline status",
      "Initial assessment of claim viability",
      "Overview of your options at the current stage",
      "Recommended next steps",
    ],
  },
  {
    name:     "60-Minute Deep Case Review",
    price:    "TBD",
    ideal:    "For employees with existing complaints, an ROI, or a hearing request pending.",
    includes: [
      "Everything in the 30-minute assessment",
      "In-depth review of documents you provide",
      "Agency defense analysis",
      "Strategic positioning for your next procedural step",
      "Written summary of key action items",
    ],
    featured: true,
  },
  {
    name:     "Comprehensive Pre-Filing Strategy",
    price:    "TBD",
    ideal:    "For employees with complex matters who need a full strategic roadmap.",
    includes: [
      "Everything in the 60-minute review",
      "Complete case theory development",
      "Evidence and witness identification",
      "Formal complaint drafting guidance",
      "Priority scheduling",
    ],
  },
];

const TRAINING_PACKAGES = [
  {
    audience: "Individual Federal Employees",
    title:    "Know Your Rights: The Federal EEO Process",
    desc:     "A focused session covering the 45-day rule, informal vs. formal complaints, documentation strategy, and self-protection from retaliation.",
    price:    "TBD",
  },
  {
    audience: "Union Locals",
    title:    "EEO Representation Training for Union Officials",
    desc:     "Comprehensive training for stewards and local officers on representing members — deadlines, procedures, evidence, and the union's role at each stage.",
    price:    "TBD",
  },
  {
    audience: "Agency Management",
    title:    "EEO Compliance Training for Federal Supervisors",
    desc:     "Training on EEO obligations, the interactive accommodation process, anti-retaliation requirements, and how to avoid the most common legal exposure points.",
    price:    "TBD",
  },
];

const REPRESENTATION_OPTIONS = [
  {
    title: "Hourly Representation",
    desc:  "Flexible engagement for specific phases — ROI review, hearing preparation, brief writing, or negotiation support.",
    price: "TBD / hour",
  },
  {
    title: "Flat-Fee ROI Representation",
    desc:  "Complete ROI analysis, hearing strategy development, and pre-hearing preparation at a defined flat rate.",
    price: "TBD (flat fee)",
  },
];

export function ServicesContent() {
  return (
    <>
      {/* Hero — Washington bridge */}
      <section className="relative h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/washington-bridge.jpg"
            alt="Washington DC bridge spanning the Potomac River, reflecting federal architecture"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            placeholder="blur"
            blurDataURL={blurData.washingtonBridge}
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-brand-navy/25" aria-hidden="true" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          >
            <p className="eyebrow mb-3">Services</p>
            <h1 className="font-serif text-white text-balance" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.02em", lineHeight: 1.08 }}>
              Expert Guidance at Every Stage
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Opening pull quote */}
      <section className="bg-white px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <PullQuote
            quote="Successfully navigating the federal EEO process requires precision, strategy, and experience."
            name="Ericka Guthrie Dorsey, Esq."
            role="Founder, Federal EEO, LLC"
          />
        </div>
      </section>

      {/* Process stepper */}
      <ProcessReveal />

      {/* Consultation */}
      <section id="consultation" className="bg-[#FAF8F3] section-padding scroll-mt-16">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-12"
          >
            <p className="eyebrow mb-2">01</p>
            <h2 className="font-serif text-brand-navy" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>Consultation</h2>
            <p className="font-sans text-brand-muted mt-3 max-w-lg text-sm">
              Strategic case guidance before you file — or before you respond.
              All prices marked TBD pending final review.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {CONSULTATION_TIERS.map((tier) => (
              <motion.div
                key={tier.name}
                variants={fadeUp}
                className={`border rounded-sm p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  tier.featured
                    ? "border-brand-gold bg-brand-navy text-white shadow-md"
                    : "border-brand-border bg-white"
                }`}
              >
                {tier.featured && (
                  <span className="self-start bg-brand-gold text-white text-[0.65rem] font-sans tracking-wide px-3 py-1 rounded-sm uppercase">
                    Most Popular
                  </span>
                )}
                <h3 className={`font-serif text-xl leading-snug ${tier.featured ? "text-white" : "text-brand-navy"}`}>
                  {tier.name}
                </h3>
                <p className={`font-serif text-3xl font-semibold ${tier.featured ? "text-brand-gold" : "text-brand-navy"}`}>
                  {tier.price}
                </p>
                <p className={`font-sans text-sm leading-relaxed ${tier.featured ? "text-white/70" : "text-brand-muted"}`}>
                  {tier.ideal}
                </p>
                <ul className="space-y-2 flex-1">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={13} className="mt-0.5 shrink-0 text-brand-gold" />
                      <span className={`font-sans text-sm ${tier.featured ? "text-white/80" : "text-brand-ink"}`}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-2 w-full text-center py-3 text-sm font-sans font-medium rounded-sm transition-all duration-200 ${
                    tier.featured
                      ? "bg-brand-gold text-white hover:bg-brand-gold/90"
                      : "border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                  }`}
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      {/* Training */}
      <section id="training" className="bg-white section-padding scroll-mt-16">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-12"
          >
            <p className="eyebrow mb-2">02</p>
            <h2 className="font-serif text-brand-navy" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>Training</h2>
            <p className="font-sans text-brand-muted mt-3 max-w-lg text-sm">
              Customized training programs for employees, unions, and management. All pricing TBD.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {TRAINING_PACKAGES.map((pkg) => (
              <motion.div
                key={pkg.title}
                variants={fadeUp}
                className="bg-[#FAF8F3] border border-brand-border rounded-sm p-8 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <span className="eyebrow">{pkg.audience}</span>
                <h3 className="font-serif text-lg text-brand-navy leading-snug">{pkg.title}</h3>
                <p className="font-sans text-sm text-brand-muted leading-relaxed flex-1">{pkg.desc}</p>
                <p className="font-sans font-semibold text-brand-navy">{pkg.price}</p>
                <Link href="/contact" className="w-full text-center py-3 text-sm font-sans font-medium border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-colors duration-200 rounded-sm">
                  Inquire
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      {/* Representation */}
      <section id="representation" className="bg-brand-cream section-padding scroll-mt-16">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-12"
          >
            <p className="eyebrow mb-2">03</p>
            <h2 className="font-serif text-brand-navy" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>Representation</h2>
            <p className="font-sans text-brand-muted mt-3 max-w-lg text-sm">
              Full EEO advocacy from informal counseling through EEOC hearings. All pricing TBD.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl"
          >
            {REPRESENTATION_OPTIONS.map((opt) => (
              <motion.div
                key={opt.title}
                variants={fadeUp}
                className="bg-white border border-brand-border rounded-sm p-8 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-serif text-lg text-brand-navy">{opt.title}</h3>
                <p className="font-sans text-sm text-brand-muted leading-relaxed flex-1">{opt.desc}</p>
                <p className="font-sans font-semibold text-brand-navy">{opt.price}</p>
                <Link href="/contact" className="w-full text-center py-3 text-sm font-sans font-medium bg-brand-navy text-white hover:bg-brand-navy/90 transition-colors duration-200 rounded-sm">
                  Contact for Details
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
