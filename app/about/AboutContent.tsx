"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Scale, FileSearch, ShieldCheck, BarChart3 } from "lucide-react";
import { EASE, staggerContainer, fadeUp } from "@/lib/motion";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { RecentWins } from "@/components/sections/RecentWins";
import { getImagePath } from "@/lib/images";
import blurData from "@/lib/blur-data.json";

const CREDENTIALS_TIMELINE = [
  { year: "1998",  label: "UPenn BA",          desc: "Bachelor of Arts, University of Pennsylvania" },
  { year: "2001",  label: "GW Law JD",          desc: "Juris Doctor, The George Washington University Law School" },
  { year: "2003",  label: "EEO Advocacy",       desc: "Began federal EEO practice — representation and counseling" },
  { year: "2010",  label: "Certified Mediator", desc: "Earned federal mediation certification" },
  { year: "2018",  label: "ABA Commissioner",   desc: "Appointed to the ABA Commission on Disability Rights" },
];

const PRACTICE_AREAS = [
  { icon: Scale,       title: "Informal & Formal EEO Complaints",      desc: "End-to-end guidance from the 45-day counselor contact through final agency decisions and appeals to the EEOC." },
  { icon: FileSearch,  title: "ROI Strategic Analysis",                 desc: "Deep-dive review of the Report of Investigation — evidentiary strengths, agency defenses, and hearing strategy." },
  { icon: ShieldCheck, title: "Title VII & Rehabilitation Act",         desc: "Expert application of federal anti-discrimination law across race, sex, disability, age, religion, and reprisal." },
  { icon: BarChart3,   title: "Strategic Evidence Positioning",         desc: "Identifying and presenting the evidence that matters most to an administrative judge — before and during the hearing." },
];

function HeadshotReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  const opacity    = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.6], [40, 0]);

  return (
    <motion.div
      ref={ref}
      style={prefersReduced ? {} : { opacity, y: translateY }}
      className="lg:col-span-4"
    >
      <div className="relative">
        <div
          className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-brand-gold/50"
          style={{ boxShadow: "0 24px 48px rgba(27,42,74,0.15)" }}
          aria-hidden="true"
        />
        <div className="relative rounded-2xl overflow-hidden border-2 border-brand-gold/40">
          {/* <picture> provides AVIF → JPEG fallback for GitHub Pages CDN compatibility */}
          <picture>
            <source srcSet={getImagePath("/images/ericka-dorsey.avif")} type="image/avif" />
            <img
              src={getImagePath("/images/ericka-dorsey.jpg")}
              alt="Ericka Guthrie Dorsey, Esq., Founder and Principal Consultant of Federal EEO, LLC"
              width={634}
              height={792}
              className="object-cover object-top w-full"
              style={{ backgroundColor: "#D4C9B8", display: "block" }}
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
      </div>

      <div className="mt-8 bg-white border border-brand-border rounded-sm p-5">
        <p className="eyebrow mb-4">Credentials</p>
        <ul className="space-y-2.5">
          {[
            "B.A., University of Pennsylvania",
            "J.D., The George Washington University Law School",
            "Licensed Attorney",
            "Certified Mediator",
            "Commissioner, ABA Commission on Disability Rights",
          ].map((c) => (
            <li key={c} className="flex items-start gap-2.5">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" aria-hidden="true" />
              <span className="font-sans text-sm text-brand-ink leading-snug">{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function AboutContent() {
  return (
    <>
      {/* Lincoln Memorial hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden" aria-label="About page hero">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lincoln-memorial.jpg"
            alt="Lincoln Memorial colonnade and marble steps, Washington DC"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            placeholder="blur"
            blurDataURL={blurData.lincolnMemorial}
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-brand-navy/20" aria-hidden="true" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          >
            <p className="eyebrow mb-3">About Federal EEO, LLC</p>
            <h1 className="font-serif text-white text-balance" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.02em", lineHeight: 1.08 }}>
              Two decades at the federal EEO frontline.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Biography */}
      <section className="bg-[#FAF8F3] section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Headshot — scroll-linked reveal */}
            <HeadshotReveal />

            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
              className="lg:col-span-8 space-y-5"
              style={{ fontSize: "1.125rem", lineHeight: "1.75" }}
            >
              <h2 className="font-serif text-brand-navy gold-rule" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                Ericka Guthrie Dorsey, Esq.
              </h2>

              <p className="font-sans text-brand-ink">
                Ericka Guthrie Dorsey is a licensed attorney and certified mediator with more than twenty years
                of dedicated experience in federal employment law. She founded Federal EEO, LLC to give federal
                employees access to the sophisticated, specialized advocacy the complexity of the EEO process
                demands — and that too few employees find before a critical deadline passes.
              </p>

              <p className="font-sans text-brand-ink">
                Ericka earned her Bachelor of Arts from the{" "}
                <em className="text-brand-gold not-italic font-medium">University of Pennsylvania</em>{" "}
                and her Juris Doctor from{" "}
                <em className="text-brand-gold not-italic font-medium">The George Washington University Law School</em>.
                Her legal career has focused exclusively on federal employment law, giving her a depth of
                procedural and substantive knowledge that generalist practitioners cannot replicate.
              </p>

              <p className="font-sans text-brand-ink">
                She serves as a Commissioner on the{" "}
                <em className="text-brand-gold not-italic font-medium">American Bar Association Commission on Disability Rights</em>
                {" "}— a reflection of her long-standing commitment to the{" "}
                <em className="text-brand-gold not-italic font-medium">Rehabilitation Act</em>{" "}
                and the rights of federal employees with disabilities to receive meaningful{" "}
                <em className="text-brand-gold not-italic font-medium">reasonable accommodations</em>{" "}
                without retaliation.
              </p>

              <p className="font-sans text-brand-ink">
                Ericka&rsquo;s clients range from GS-5 administrative employees facing hostile work environments
                to senior executives contesting adverse actions. What they share is a need for someone who
                understands not just the law, but the procedural landscape of the federal EEO system — the
                deadlines, the agency dynamics, the{" "}
                <em className="text-brand-gold not-italic font-medium">Report of Investigation</em>,{" "}
                and the hearing stage where outcomes are ultimately determined.
              </p>

              {/* ⚠️ CONTENT.md: Expand with specific career highlights and notable positions */}
              <p className="text-brand-muted text-sm italic border-l-2 border-brand-gold/30 pl-4 mt-6" style={{ fontSize: "0.875rem" }}>
                Additional career highlights and notable case outcomes to be added before launch. See CONTENT.md.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-brand-navy text-white font-sans text-sm font-medium hover:bg-brand-navy/90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 rounded-sm"
                >
                  Schedule a Consultation
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials timeline */}
      <section className="bg-brand-cream section-padding" aria-label="Career timeline">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-14 text-center"
          >
            <p className="eyebrow mb-3">Career Milestones</p>
            <h2 className="font-serif text-brand-navy" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              Building a Career in Federal EEO Law
            </h2>
          </motion.div>

          {/* Timeline SVG rail */}
          <div className="relative">
            {/* Horizontal rail */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-brand-navy/20" aria-hidden="true" />
            {/* Gold rail fill — animated */}
            <motion.div
              className="hidden md:block absolute top-6 left-0 h-0.5 bg-brand-gold"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {CREDENTIALS_TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.3 + i * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Node */}
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.2 }}
                    className="w-3 h-3 rounded-full bg-brand-gold border-2 border-white shadow-sm mb-4 relative z-10 cursor-default"
                    aria-label={`${item.year}: ${item.label}`}
                  />
                  <span className="font-sans text-[0.65rem] tracking-[0.14em] uppercase text-brand-gold mb-1">{item.year}</span>
                  <span className="font-serif text-brand-navy text-sm font-semibold mb-2">{item.label}</span>
                  <p className="font-sans text-xs text-brand-muted leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practice areas */}
      <section className="bg-white section-padding" aria-label="Core areas of practice">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-12"
          >
            <p className="eyebrow mb-3">Expertise</p>
            <h2 className="font-serif text-brand-navy" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              Core Areas of Practice
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {PRACTICE_AREAS.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group flex gap-5 p-7 bg-[#FAF8F3] border border-brand-border rounded-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="shrink-0 w-11 h-11 rounded-sm bg-brand-navy flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-300">
                  <Icon size={20} className="text-brand-gold group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-brand-navy text-lg mb-2">{title}</h3>
                  <p className="font-sans text-sm text-brand-muted leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <RecentWins />
      <ConsultationCTA />
    </>
  );
}
