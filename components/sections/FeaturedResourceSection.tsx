"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";
import { EASE } from "@/lib/motion";
import { upcomingWebinars } from "@/content/webinars";
import { SubscribeForm } from "@/components/forms/SubscribeForm";
import { getImagePath } from "@/lib/images";

function formatDateLong(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}
function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZoneName: "short" });
}

export function FeaturedResourceSection() {
  const upcoming = upcomingWebinars();
  const next = upcoming[0];

  return (
    <section className="bg-[#FAF8F3] py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="font-sans text-brand-gold-ink mb-3" style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}>
            Free for federal employees
          </p>
          <h2 className="font-serif text-brand-navy" style={{ fontSize: "clamp(1.85rem, 3.4vw, 2.5rem)", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Start learning, even before you&apos;re ready to talk.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {/* Webinar card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.55, ease: EASE }}
            className="relative overflow-hidden rounded-sm border border-brand-border min-h-[400px] flex items-end"
          >
            <Image
              src={getImagePath("/images/washington-monument.jpg")}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(27,42,74,0.55) 0%, rgba(27,42,74,0.92) 75%)" }}
              aria-hidden="true"
            />
            <div className="relative p-9 md:p-10 text-white">
              {next ? (
                <>
                  <p className="font-sans text-brand-gold mb-3" style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}>
                    Upcoming Webinar
                  </p>
                  <h3 className="font-serif text-white mb-4 max-w-md" style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.75rem)", lineHeight: 1.2, fontWeight: 500 }}>
                    {next.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-5 gap-y-1 mb-5 font-sans text-brand-gold" style={{ fontSize: "0.74rem", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600 }}>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={12} aria-hidden="true" />
                      {formatDateLong(next.startISO)}
                    </span>
                    <span>{formatTime(next.startISO)}</span>
                  </div>
                  <p className="font-sans text-white/80 mb-7 max-w-lg" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {next.description.slice(0, 180)}…
                  </p>
                  <Link
                    href={`/webinars/${next.slug}/`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-white text-sm font-sans font-medium rounded-sm hover:bg-brand-gold/90 hover:-translate-y-0.5 transition-all"
                  >
                    Register Free
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </>
              ) : (
                <>
                  <p className="font-sans text-brand-gold mb-3" style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}>
                    Webinars
                  </p>
                  <h3 className="font-serif text-white mb-4 max-w-md" style={{ fontSize: "1.6rem", lineHeight: 1.2, fontWeight: 500 }}>
                    New webinars announced regularly — subscribe to be the first to know.
                  </h3>
                  <div className="mt-5">
                    <SubscribeForm source="home-webinar-fallback" />
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Library card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
            className="bg-[#F4EFE2] border border-brand-gold/30 rounded-sm p-9 md:p-10 flex flex-col"
          >
            <BookOpen size={28} className="text-brand-gold mb-5" aria-hidden="true" />
            <p className="font-sans text-brand-gold-ink mb-3" style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}>
              Free Resources
            </p>
            <h3 className="font-serif text-brand-navy mb-4" style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.75rem)", lineHeight: 1.2, fontWeight: 500 }}>
              A working library for federal employees.
            </h3>
            <p className="font-sans text-brand-ink mb-7 max-w-xl flex-1" style={{ fontSize: "1rem", lineHeight: 1.65 }}>
              Plain-English guides to the 45-day clock, reasonable accommodation,
              reading your ROI, and more. Bookmark this — the firm that earns
              trust during your research is the firm that earns the case when
              you&apos;re ready.
            </p>
            <Link
              href="/resources/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-white text-sm font-sans font-medium rounded-sm hover:bg-brand-gold/90 hover:-translate-y-0.5 transition-all w-fit"
            >
              Browse the Library
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        {/* Inline subscription strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="bg-brand-navy text-white rounded-sm p-7 md:p-9 grid md:grid-cols-[1.4fr_1fr] gap-6 items-center"
        >
          <div>
            <h4 className="font-serif text-white mb-1" style={{ fontSize: "1.3rem", lineHeight: 1.3 }}>
              Get new resources and webinar invitations as they&apos;re published.
            </h4>
            <p className="font-sans text-white/65" style={{ fontSize: "0.875rem", lineHeight: 1.5 }}>
              No marketing. Unsubscribe any time.
            </p>
          </div>
          <SubscribeForm source="home-featured-resource" buttonLabel="Subscribe" />
        </motion.div>
      </div>
    </section>
  );
}
