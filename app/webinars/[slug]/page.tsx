import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, Users, CheckCircle2, ArrowLeft, PlayCircle } from "lucide-react";
import {
  WEBINARS,
  getWebinarBySlug,
  type Webinar,
} from "@/content/webinars";
import { WebinarRegistrationForm } from "@/components/forms/WebinarRegistrationForm";
import { AddToCalendar } from "@/components/webinars/AddToCalendar";
import { EventJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return WEBINARS.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const w = getWebinarBySlug(params.slug);
  if (!w) return {};
  const url = `${SITE_URL}/webinars/${w.slug}/`;
  const ogImage = `${SITE_URL}/social/${w.slug}/og.png`;
  return {
    title: w.title,
    description: w.description.slice(0, 160),
    openGraph: {
      title: w.title,
      description: w.description.slice(0, 160),
      type: "article",
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: w.title }],
      publishedTime: new Date().toISOString(),
      authors: ["Ericka G. Dorsey, Esq."],
      section: "Federal Employment Law",
    },
    twitter: {
      card: "summary_large_image",
      title: w.title,
      description: w.description.slice(0, 160),
      images: [ogImage],
    },
    other: {
      "og:event:start_time": w.startISO,
      "og:event:end_time": w.endISO,
      "article:author": "Ericka G. Dorsey, Esq.",
      "article:section": "Federal Employment Law",
    },
  };
}

function formatDateLong(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
}

export default function WebinarDetail({
  params,
}: {
  params: { slug: string };
}) {
  const w: Webinar | undefined = getWebinarBySlug(params.slug);
  if (!w) return notFound();
  const recorded = w.status === "recorded";
  const url = `${SITE_URL}/webinars/${w.slug}/`;

  return (
    <>
      <EventJsonLd
        name={w.title}
        description={w.description}
        startISO={w.startISO}
        endISO={w.endISO}
        url={url}
        registrationUrl={w.zoomRegistrationUrl}
      />

      <section className="bg-brand-navy pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/webinars/"
            className="inline-flex items-center gap-2 font-sans text-sm text-brand-gold hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            All webinars
          </Link>
          <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">
            {recorded ? "Recorded session" : "Live webinar — free registration"}
          </p>
          <h1 className="font-serif text-white text-display-lg leading-[1.05] text-balance">
            {w.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/85 font-sans">
            <span className="inline-flex items-center gap-2">
              <Calendar size={15} aria-hidden="true" />
              <span className="font-serif text-lg">{formatDateLong(w.startISO)}</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={15} aria-hidden="true" />
              <span className="font-serif text-lg">
                {formatTime(w.startISO)} — {formatTime(w.endISO)}
              </span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Users size={15} aria-hidden="true" />
              {w.audience}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1.3fr_1fr] gap-12">
          <div>
            <p className="font-serif text-lg leading-relaxed text-brand-ink mb-12">
              {w.description}
            </p>

            <div className="mb-12">
              <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">
                Learning Objectives
              </p>
              <ul className="space-y-4">
                {w.learningObjectives.map((obj) => (
                  <li key={obj} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-brand-gold shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="font-serif text-brand-ink text-base leading-relaxed">
                      {obj}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-brand-border rounded-sm p-6">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-brand-gold mb-2">
                Who this is for
              </p>
              <p className="font-serif text-brand-ink text-lg leading-relaxed">
                {w.audience}.
              </p>
            </div>
          </div>

          <div>
            {recorded ? (
              <div className="bg-white border border-brand-border rounded-sm p-8 text-center">
                <PlayCircle size={36} className="text-brand-gold mx-auto mb-4" aria-hidden="true" />
                <h3 className="font-serif text-xl text-brand-navy mb-3">
                  Watch the recording
                </h3>
                <p className="font-sans text-sm text-brand-muted leading-relaxed mb-6">
                  The full session, available on demand.
                </p>
                {w.recordingUrl ? (
                  <a
                    href={w.recordingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-gold text-white text-sm font-sans font-medium rounded-sm hover:bg-brand-gold/90 transition-colors"
                  >
                    Watch Recording
                    <PlayCircle size={14} aria-hidden="true" />
                  </a>
                ) : (
                  <p className="font-sans text-xs text-brand-muted">
                    Recording link coming soon.
                  </p>
                )}
              </div>
            ) : (
              <>
                <WebinarRegistrationForm
                  slug={w.slug}
                  title={w.title}
                  zoomRegistrationUrl={w.zoomRegistrationUrl}
                  startISO={w.startISO}
                />

                <div className="mt-6 flex justify-center">
                  <AddToCalendar
                    event={{
                      title: w.title,
                      description: w.description,
                      startISO: w.startISO,
                      endISO: w.endISO,
                      url,
                    }}
                  />
                </div>

                <p className="font-sans text-xs text-brand-muted leading-relaxed text-center mt-6">
                  Cannot attend live? Register anyway and we&apos;ll send you the
                  recording afterward.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
