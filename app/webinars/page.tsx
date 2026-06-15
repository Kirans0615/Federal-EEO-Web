import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, PlayCircle } from "lucide-react";
import {
  upcomingWebinars,
  pastWebinars,
  type Webinar,
} from "@/content/webinars";

export const metadata: Metadata = {
  title: "Webinars — Federal EEO, LLC",
  description:
    "Live webinars and recorded sessions for federal employees navigating EEO complaints. Free registration. Hosted by Ericka G. Dorsey, Esq.",
};

function formatDateLong(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatTimeRange(startISO: string, endISO: string) {
  const opts: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  };
  return `${new Date(startISO).toLocaleTimeString("en-US", opts)} – ${new Date(
    endISO
  ).toLocaleTimeString("en-US", opts)}`;
}

function FeaturedCard({ webinar }: { webinar: Webinar }) {
  return (
    <Link
      href={`/webinars/${webinar.slug}/`}
      className="group block bg-white border border-brand-border rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      <div className="grid lg:grid-cols-[1.2fr_1fr]">
        <div className="p-10 md:p-14 flex flex-col justify-center">
          <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">
            Upcoming — Next session
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-navy leading-[1.1] text-balance mb-5">
            {webinar.title}
          </h2>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6 text-sm text-brand-muted font-sans">
            <span className="inline-flex items-center gap-2">
              <Calendar size={14} aria-hidden="true" />
              {formatDateLong(webinar.startISO)}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={14} aria-hidden="true" />
              {formatTimeRange(webinar.startISO, webinar.endISO)}
            </span>
          </div>
          <p className="font-serif text-brand-ink text-lg leading-relaxed mb-8 max-w-prose">
            {webinar.description}
          </p>
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-white text-sm font-sans font-medium rounded-sm group-hover:bg-brand-gold/90 transition-colors w-fit">
            Register Free
            <ArrowRight size={15} aria-hidden="true" />
          </span>
        </div>
        <div className="hidden lg:block bg-brand-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy/70" />
          <div className="absolute inset-0 flex items-center justify-center p-10">
            <div className="text-center">
              <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">
                {webinar.audience}
              </p>
              <p className="font-serif italic text-white/85 text-lg leading-relaxed">
                Live with Q&amp;A. Free for federal employees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function CompactCard({ webinar }: { webinar: Webinar }) {
  const recorded = webinar.status === "recorded";
  return (
    <Link
      href={`/webinars/${webinar.slug}/`}
      className="group block bg-white border border-brand-border rounded-sm p-7 hover:border-brand-gold/40 hover:shadow-sm transition-all"
    >
      <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-3">
        {recorded ? "Recorded" : "Upcoming"}
      </p>
      <h3 className="font-serif text-xl text-brand-navy leading-snug mb-3 group-hover:text-brand-gold transition-colors">
        {webinar.title}
      </h3>
      <p className="font-sans text-sm text-brand-muted leading-relaxed mb-4 line-clamp-3">
        {webinar.description}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-brand-border/50">
        <span className="font-sans text-xs text-brand-muted">
          {formatDateLong(webinar.startISO)}
        </span>
        <span className="inline-flex items-center gap-1 font-sans text-sm font-medium text-brand-gold">
          {recorded ? (
            <>
              <PlayCircle size={14} aria-hidden="true" />
              Watch
            </>
          ) : (
            <>
              Register
              <ArrowRight size={14} aria-hidden="true" />
            </>
          )}
        </span>
      </div>
    </Link>
  );
}

export default function WebinarsIndex() {
  const upcoming = upcomingWebinars();
  const featured = upcoming[0];
  const more = upcoming.slice(1);
  const past = pastWebinars();

  return (
    <div className="bg-brand-cream pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">
          Webinars
        </p>
        <h1 className="font-serif text-display-lg text-brand-navy text-balance max-w-3xl leading-[1.05]">
          Live sessions and recorded work for federal employees.
        </h1>
        <p className="font-sans text-brand-muted mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
          A working library of free webinars led by Ericka G. Dorsey, Esq. —
          covering the deadlines, the strategy, and the federal EEO mechanics
          most employees only learn the hard way. Live sessions include Q&amp;A.
          Cannot attend? Register and we&apos;ll send the recording.
        </p>
      </section>

      {featured && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
          <FeaturedCard webinar={featured} />
        </section>
      )}

      {more.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          <h2 className="font-serif text-2xl text-brand-navy mb-7">
            More upcoming sessions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {more.map((w) => (
              <CompactCard key={w.slug} webinar={w} />
            ))}
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-serif text-2xl text-brand-navy mb-7">
          Past webinars
        </h2>
        {past.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {past.map((w) => (
              <CompactCard key={w.slug} webinar={w} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-brand-border rounded-sm p-10 text-center">
            <p className="font-serif italic text-brand-muted text-lg">
              The first recorded session arrives after the live event.
            </p>
            <p className="font-sans text-sm text-brand-muted mt-2">
              Register above to receive the recording in your inbox.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
