"use client";

import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { upcomingWebinars } from "@/content/webinars";
import { SubscribeForm } from "@/components/forms/SubscribeForm";

function formatDateLong(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

/**
 * A thin tinted-cream strip rendered ABOVE the main site footer on every
 * page. Left: resource subscription. Right: next upcoming webinar callout
 * or fallback link to the archive.
 */
export function PersistentResourceFooter() {
  const next = upcomingWebinars()[0];
  return (
    <section
      aria-label="Stay updated"
      className="bg-[#F2EBD9] border-y border-brand-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
        <div>
          <h3 className="font-serif text-brand-navy mb-1" style={{ fontSize: "1.3rem", lineHeight: 1.2 }}>
            Stay current on federal EEO.
          </h3>
          <p className="font-sans text-brand-muted mb-4 max-w-md" style={{ fontSize: "0.9rem", lineHeight: 1.55 }}>
            Resources and webinar invitations — sent only when there&apos;s
            something worth your time. No marketing.
          </p>
          <SubscribeForm source="persistent-footer" />
        </div>

        <div className="md:border-l md:border-brand-border md:pl-8">
          {next ? (
            <div>
              <p className="font-sans text-brand-gold-ink mb-2" style={{ fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}>
                Next Free Webinar
              </p>
              <Link
                href={`/webinars/${next.slug}/`}
                className="group block"
              >
                <h4 className="font-serif text-brand-navy mb-2 group-hover:text-brand-gold transition-colors" style={{ fontSize: "1.05rem", lineHeight: 1.3, fontWeight: 600 }}>
                  {next.title}
                </h4>
                <div className="inline-flex items-center gap-2 text-brand-muted font-sans" style={{ fontSize: "0.78rem" }}>
                  <Calendar size={12} aria-hidden="true" />
                  {formatDateLong(next.startISO)}
                </div>
                <div className="mt-3 inline-flex items-center gap-1 font-sans text-sm font-medium text-brand-gold">
                  Register free
                  <ArrowRight size={13} aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </div>
          ) : (
            <div>
              <p className="font-sans text-brand-gold-ink mb-2" style={{ fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}>
                Webinars
              </p>
              <Link href="/webinars/" className="group block">
                <h4 className="font-serif text-brand-navy mb-2 group-hover:text-brand-gold transition-colors" style={{ fontSize: "1.05rem", lineHeight: 1.3, fontWeight: 600 }}>
                  Browse the webinar archive
                </h4>
                <div className="inline-flex items-center gap-1 font-sans text-sm font-medium text-brand-gold mt-2">
                  View all sessions
                  <ArrowRight size={13} aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
