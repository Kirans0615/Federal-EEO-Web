import type { Metadata } from "next";
import Link from "next/link";
import { Mic, GraduationCap, Newspaper, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Press & Speaking",
  description:
    "Speaking engagements, professional service, and media for Ericka G. Dorsey, Esq. and Federal EEO, LLC.",
};

/* All entries are placeholder structures — Ericka to populate. See CONTENT.md. */
const SPEAKING = [
  {
    when: "Recent",
    title: "Federal EEO training for union local presidents",
    venue: "Regional union convention",
    blurb:
      "Half-day workshop on the 45-day window, ROI review fundamentals, and grievance versus EEO triage.",
    draft: true,
  },
  {
    when: "Recent",
    title: "Reasonable accommodation in the federal workplace",
    venue: "Continuing legal education panel",
    blurb:
      "CLE session for employment-side practitioners on the interactive process and the documentation discipline that wins accommodation denial cases.",
    draft: true,
  },
];

const SERVICE = [
  {
    title: "ABA Commission on Disability Rights — Commissioner",
    body: "Service on the American Bar Association commission focused on advancing the rights of lawyers and clients with disabilities.",
    draft: true,
  },
  {
    title: "Federal Mediation Roster",
    body: "Trained federal-sector mediator listed on agency rosters for EEO dispute resolution.",
    draft: true,
  },
];

const PRESS = [
  {
    outlet: "Forthcoming",
    title: "Quoted on federal-sector reasonable accommodation trends",
    blurb:
      "Press coverage placeholder — Ericka to populate as media quotes and publications come in.",
    draft: true,
  },
];

function Entry({
  pre,
  title,
  meta,
  body,
}: {
  pre?: string;
  title: string;
  meta?: string;
  body: string;
}) {
  return (
    <article className="bg-white border border-brand-border rounded-sm p-7 md:p-8">
      {pre && (
        <p className="font-sans text-xs tracking-[0.18em] uppercase text-brand-gold mb-2">
          {pre}
        </p>
      )}
      <h3 className="font-serif text-xl text-brand-navy mb-2 text-balance">
        {title}
      </h3>
      {meta && (
        <p className="font-sans text-sm text-brand-muted mb-3 italic">{meta}</p>
      )}
      <p className="font-serif text-brand-ink leading-relaxed">{body}</p>
    </article>
  );
}

export default function PressPage() {
  return (
    <>
      <section className="bg-brand-navy pt-28 pb-14 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/about/"
            className="inline-flex items-center gap-2 font-sans text-sm text-brand-gold hover:text-white transition-colors mb-7"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            About
          </Link>
          <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">
            Press & Speaking
          </p>
          <h1 className="font-serif text-white text-display-lg leading-[1.05] text-balance max-w-3xl">
            Where the work shows up in the field.
          </h1>
          <p className="font-serif text-white/85 text-lg leading-relaxed mt-5 max-w-2xl">
            Recent speaking engagements, professional service, and media —
            for federal employees, advocates, and continuing-education
            audiences.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Mic size={16} className="text-brand-gold" aria-hidden="true" />
            <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-brand-navy font-semibold">
              Recent Speaking Engagements
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {SPEAKING.map((s, i) => (
              <Entry
                key={i}
                pre={s.when}
                title={s.title}
                meta={s.venue}
                body={s.blurb}
              />
            ))}
          </div>

          <div className="flex items-center gap-3 mb-8">
            <GraduationCap size={16} className="text-brand-gold" aria-hidden="true" />
            <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-brand-navy font-semibold">
              Professional Service
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {SERVICE.map((s, i) => (
              <Entry key={i} title={s.title} body={s.body} />
            ))}
          </div>

          <div className="flex items-center gap-3 mb-8">
            <Newspaper size={16} className="text-brand-gold" aria-hidden="true" />
            <h2 className="font-sans text-xs tracking-[0.2em] uppercase text-brand-navy font-semibold">
              In the Field
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {PRESS.map((p, i) => (
              <Entry
                key={i}
                pre={p.outlet}
                title={p.title}
                body={p.blurb}
              />
            ))}
          </div>

          <p className="mt-14 font-sans text-xs italic text-amber-900 bg-amber-50 border border-amber-200 rounded-sm px-4 py-3">
            <strong className="font-semibold">All entries are placeholders.</strong>{" "}
            Ericka to populate with actual engagements, dates, and links — see
            CONTENT.md.
          </p>
        </div>
      </section>
    </>
  );
}
