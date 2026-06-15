"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EASE } from "@/lib/motion";
import blurData from "@/lib/blur-data.json";

interface AccordionItem {
  id:          string;
  title:       string;
  subtitle:    string;
  description: string;
  imageUrl:    string;
  imageAlt:    string;
  blurKey:     keyof typeof blurData;
  href:        string;
}

const SERVICES: AccordionItem[] = [
  {
    id:          "consultation",
    title:       "Strategic Consultation",
    subtitle:    "Case Assessment & Guidance",
    description: "Before you file — or before you respond — you need to understand your legal position. I give you a frank, experienced analysis of your claim, the applicable law, your agency's likely defenses, and the strategic path forward.",
    imageUrl:    "/images/washington-overlook.jpg",
    imageAlt:    "Panoramic view of the Washington DC cityscape and National Mall at dusk",
    blurKey:     "washingtonOverlook",
    href:        "/services#consultation",
  },
  {
    id:          "training",
    title:       "EEO Process Training",
    subtitle:    "For Employees, Unions & Representatives",
    description: "Most EEO cases are lost because the complainant didn't know the rules. Our training programs equip federal employees, union locals, and EEO representatives with the procedural knowledge to protect rights from day one.",
    imageUrl:    "/images/lincoln-memorial.jpg",
    imageAlt:    "Lincoln Memorial colonnade and marble steps, Washington DC",
    blurKey:     "lincolnMemorial",
    href:        "/services#training",
  },
  {
    id:          "accommodation",
    title:       "Reasonable Accommodation",
    subtitle:    "Disability Rights Under the Rehabilitation Act",
    description: "Federal agencies frequently deny accommodation requests citing operational needs. We guide employees through the interactive process, document functional limitations, and advocate for accommodation when agencies stonewall.",
    imageUrl:    "/images/washington-bridge.jpg",
    imageAlt:    "Washington DC bridge spanning the Potomac River, reflecting federal architecture",
    blurKey:     "washingtonBridge",
    href:        "/services#representation",
  },
  {
    id:          "roi",
    title:       "ROI Analysis & Strategy",
    subtitle:    "Report of Investigation Review",
    description: "The Report of Investigation is the evidentiary record of your case. It can run hundreds of pages and determine your outcome at the hearing stage. We dissect the ROI, identify weaknesses in the agency's position, and build your hearing strategy.",
    imageUrl:    "/images/washington-monument.jpg",
    imageAlt:    "Washington Monument obelisk rising against the open sky, Washington DC",
    blurKey:     "washingtonMonument",
    href:        "/services#representation",
  },
  {
    id:          "hearing",
    title:       "EEOC Hearing Representation",
    subtitle:    "Administrative Advocacy",
    description: "From the request for hearing through the administrative judge proceeding, we advocate with the same rigor as courtroom representation — discovery, witness preparation, pre-hearing motions, and closing arguments.",
    imageUrl:    "/images/washington-overlook.jpg",
    imageAlt:    "Panoramic view of the National Mall at twilight, Washington DC",
    blurKey:     "washingtonOverlook",
    href:        "/services#representation",
  },
];

export function InteractiveImageAccordion() {
  const [active, setActive] = useState<string>(SERVICES[0].id);
  const current = SERVICES.find((s) => s.id === active) ?? SERVICES[0];

  return (
    <section className="bg-[#FAF8F3] section-padding" aria-label="Our services">
      <div className="section-divider mb-16" aria-hidden="true" />
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12"
        >
          <p className="eyebrow mb-3">Areas of Practice</p>
          <h2 className="font-serif text-brand-navy text-balance"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            How We Serve Federal Employees
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 border border-brand-border rounded-sm overflow-hidden shadow-sm">
          {/* Accordion list */}
          <div className="divide-y divide-brand-border">
            {SERVICES.map((svc, i) => {
              const isActive = svc.id === active;
              return (
                <motion.button
                  key={svc.id}
                  onClick={() => setActive(svc.id)}
                  className={`w-full text-left px-8 py-6 transition-colors duration-300 focus-visible:outline-brand-gold ${
                    isActive ? "bg-brand-navy" : "bg-white hover:bg-brand-cream"
                  }`}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.55, ease: EASE, delay: i * 0.07 }}
                  aria-expanded={isActive}
                  aria-controls={`panel-${svc.id}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={`font-sans text-[0.65rem] tracking-[0.16em] uppercase mb-1.5 transition-colors ${
                        isActive ? "text-brand-gold" : "text-brand-muted"
                      }`}>
                        {svc.subtitle}
                      </p>
                      <p className={`font-serif text-lg leading-snug transition-colors ${
                        isActive ? "text-white" : "text-brand-navy"
                      }`}>
                        {svc.title}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: isActive ? 90 : 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className={`mt-1 shrink-0 ${isActive ? "text-brand-gold" : "text-brand-muted"}`}
                    >
                      <ArrowRight size={17} />
                    </motion.div>
                  </div>

                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        id={`panel-${svc.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="font-sans text-sm text-white/75 leading-relaxed mt-3 pr-4">
                          {svc.description}
                        </p>
                        <Link
                          href={svc.href}
                          className="group inline-flex items-center gap-2 mt-4 text-brand-gold text-sm font-medium link-underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Learn more
                          <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>

          {/* Image panel with Ken Burns on hover */}
          <div className="relative min-h-[420px] lg:min-h-0 overflow-hidden hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: EASE }}
                className="absolute inset-0"
              >
                {/* Ken Burns zoom on mount */}
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 8, ease: "linear" }}
                >
                  <Image
                    src={current.imageUrl}
                    alt={current.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL={blurData[current.blurKey]}
                    quality={80}
                  />
                </motion.div>
                {/* Gradient intensifies on inactive — here it's always the active one */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-brand-navy/20 to-transparent" />
                {/* Service title watermark at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-sans text-[0.65rem] tracking-[0.16em] uppercase text-brand-gold/80 mb-1">
                    {current.subtitle}
                  </p>
                  <p className="font-serif text-white text-xl">{current.title}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="section-divider mt-16" aria-hidden="true" />
    </section>
  );
}
