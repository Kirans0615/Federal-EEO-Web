"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, BookOpen, Scale } from "lucide-react";
import { EASE, staggerContainer, fadeUp } from "@/lib/motion";

const SERVICES = [
  {
    icon:  MessageSquare,
    title: "Consultation",
    desc:  "Strategic case assessment and guidance before you file — or before you respond to an agency action. Know where you stand before the clock runs out.",
    href:  "/services#consultation",
  },
  {
    icon:  BookOpen,
    title: "Training",
    desc:  "Customized EEO process training for federal employees, union locals, and agency representatives. Knowledge is the first line of defense.",
    href:  "/services#training",
  },
  {
    icon:  Scale,
    title: "Representation",
    desc:  "Full advocacy from informal counseling through ROI review, settlement negotiations, and EEOC administrative hearings.",
    href:  "/services#representation",
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-brand-cream section-padding" aria-label="Services overview">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center mb-14"
        >
          <p className="font-sans text-xs tracking-[0.18em] uppercase text-brand-gold mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-display-md text-brand-navy text-balance">
            Three Ways We Serve Federal Employees
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {SERVICES.map(({ icon: Icon, title, desc, href }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="bg-white border border-brand-border p-8 rounded-sm flex flex-col gap-5 hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 rounded-sm bg-brand-navy flex items-center justify-center shrink-0">
                <Icon size={22} className="text-brand-gold" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl text-brand-navy">{title}</h3>
              <p className="font-sans text-sm text-brand-muted leading-relaxed flex-1">{desc}</p>
              <Link
                href={href}
                className="font-sans text-sm text-brand-navy font-medium group-hover:text-brand-gold transition-colors duration-200 flex items-center gap-1"
              >
                Learn more →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
