"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import blurData from "@/lib/blur-data.json";

const EASE = [0.16, 1, 0.3, 1] as const;

interface ServiceRow {
  title: string;
  subtitle: string;
  href: string;
  images: [string, string];
  blurKeys: [keyof typeof blurData, keyof typeof blurData];
  alts: [string, string];
}

const SERVICES: ServiceRow[] = [
  {
    title: "Consultation",
    subtitle: "Case assessment & strategic guidance",
    href: "/services#consultation",
    images: ["/images/consult2.jpg", "/images/pexels-karola-g-7681192.jpg"],
    blurKeys: ["washingtonOverlook", "lincolnMemorial"],
    alts: [
      "Federal EEO consultation, foreground",
      "Federal EEO consultation, background",
    ],
  },
  {
    title: "Training",
    subtitle: "For employees, unions & agency management",
    href: "/services#training",
    images: ["/images/pexels-pavel-danilyuk-8761535.jpg", "/images/pexels-mikhail-nilov-9301245.jpg"],
    blurKeys: ["lincolnMemorial", "washingtonBridge"],
    alts: [
      "Federal EEO training session, foreground",
      "Federal EEO training session, background",
    ],
  },
  {
    title: "Representation",
    subtitle: "ROI analysis through EEOC hearing advocacy",
    href: "/services#representation",
    images: ["/images/pexels-august-de-richelieu-4427431.jpg", "/images/pexels-diva-plavalaguna-6146704.jpg"],
    blurKeys: ["washingtonBridge", "washingtonMonument"],
    alts: [
      "Federal EEO representation, foreground",
      "Federal EEO representation, background",
    ],
  },
];

export function RevealImages() {
  const [hovered, setHovered] = useState<string | null>(null);
  const prefersReduced = useReducedMotion();

  return (
    <section aria-label="Core service areas" className="relative bg-[#FAF8F3] overflow-hidden">
      {/* Fixed image reveal panel — right half, desktop only */}
      <div
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-[42%] pointer-events-none"
        aria-hidden="true"
      >
        <AnimatePresence>
          {hovered && (() => {
            const svc = SERVICES.find((s) => s.title === hovered);
            if (!svc) return null;
            return (
              <motion.div
                key={hovered}
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="absolute inset-0"
              >
                {/* Back image — slightly offset, lower z */}
                <motion.div
                  initial={prefersReduced ? {} : { x: 40, rotate: 3, scale: 0.96 }}
                  animate={prefersReduced ? {} : { x: 0, rotate: 2, scale: 1 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="absolute top-[10%] left-[8%] w-[55%] aspect-[4/3] rounded-sm overflow-hidden shadow-2xl"
                  style={{ zIndex: 1 }}
                >
                  <Image
                    src={svc.images[1]}
                    alt={svc.alts[1]}
                    fill
                    className="object-cover"
                    sizes="25vw"
                    placeholder="blur"
                    blurDataURL={blurData[svc.blurKeys[1]]}
                    quality={75}
                  />
                </motion.div>
                {/* Front image — overlapping, higher z */}
                <motion.div
                  initial={prefersReduced ? {} : { x: -40, rotate: -2, scale: 0.96 }}
                  animate={prefersReduced ? {} : { x: 0, rotate: -1.5, scale: 1 }}
                  transition={{ duration: 0.45, ease: EASE, delay: 0.06 }}
                  className="absolute top-[28%] left-[30%] w-[58%] aspect-[4/3] rounded-sm overflow-hidden shadow-2xl"
                  style={{ zIndex: 2 }}
                >
                  <Image
                    src={svc.images[0]}
                    alt={svc.alts[0]}
                    fill
                    className="object-cover"
                    sizes="25vw"
                    placeholder="blur"
                    blurDataURL={blurData[svc.blurKeys[0]]}
                    quality={80}
                  />
                  {/* Thin gold border overlay on front image */}
                  <div className="absolute inset-0 border border-brand-gold/30 rounded-sm pointer-events-none" />
                </motion.div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>

      {/* Service rows */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="lg:w-[55%]">
          {SERVICES.map((svc, i) => (
            <Link
              key={svc.title}
              href={svc.href}
              onMouseEnter={() => setHovered(svc.title)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(svc.title)}
              onBlur={() => setHovered(null)}
              className="block group border-t border-brand-navy/10 last:border-b last:border-brand-navy/10"
            >
              <div className="py-10 md:py-12 flex items-center justify-between gap-6">
                <div className="flex items-start gap-6">
                  {/* Index number */}
                  <span
                    className="hidden md:block font-serif italic text-brand-gold shrink-0 mt-1 transition-opacity duration-300"
                    style={{ fontSize: "1.25rem", opacity: hovered === svc.title ? 1 : 0.4 }}
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h3
                      className="font-serif text-brand-navy transition-colors duration-200 group-hover:text-brand-gold"
                      style={{
                        fontSize: "clamp(2.25rem, 5vw, 4rem)",
                        letterSpacing: "-0.03em",
                        fontWeight: 600,
                        lineHeight: 1.05,
                      }}
                    >
                      {svc.title}
                    </h3>
                    <p
                      className="font-sans text-brand-muted mt-2 transition-opacity duration-300"
                      style={{ fontSize: "0.875rem", opacity: hovered === svc.title ? 1 : 0.6 }}
                    >
                      {svc.subtitle}
                    </p>
                  </div>
                </div>
                {/* ChevronRight — fades in and rotates on hover */}
                <motion.div
                  animate={
                    prefersReduced
                      ? { opacity: 1 }
                      : {
                          opacity: hovered === svc.title ? 1 : 0.2,
                          rotate: hovered === svc.title ? 12 : 0,
                        }
                  }
                  transition={{ duration: 0.25, ease: EASE }}
                  className="shrink-0 text-brand-gold"
                  aria-hidden="true"
                >
                  <ChevronRight size={28} strokeWidth={1.5} />
                </motion.div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
