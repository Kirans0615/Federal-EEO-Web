import type { Metadata } from "next";
import Link from "next/link";
import { DeadlineTimeline } from "@/components/ui/DeadlineTimeline";

export const metadata: Metadata = {
  title: "Resources",
  description: "Federal EEO resources — guides on deadlines, the ROI process, and reasonable accommodation for federal employees.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-brand-navy pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow mb-4">Resources</p>
          <h1 className="font-serif text-white text-balance" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}>
            Knowledge That Protects Federal Employees
          </h1>
        </div>
      </section>

      {/* Interactive deadline timeline */}
      <section className="bg-[#FAF8F3] section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="eyebrow mb-3">Know Your Deadlines</p>
          <h2 className="font-serif text-brand-navy mb-8 text-balance" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            The 5 Critical Federal EEO Deadlines
          </h2>
          <DeadlineTimeline />
        </div>
      </section>

      {/* Guides grid */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="eyebrow mb-3">Guides &amp; Downloads</p>
          <h2 className="font-serif text-brand-navy mb-8 text-balance" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
            EEO Process Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "The 45-Day Rule Explained",                      type: "Guide",  status: "Coming Soon" },
              { title: "Understanding Your Report of Investigation",      type: "Guide",  status: "Coming Soon" },
              { title: "Requesting Reasonable Accommodation",             type: "Guide",  status: "Coming Soon" },
              { title: "From Informal Counseling to Formal Complaint",   type: "Guide",  status: "Coming Soon" },
              { title: "Protecting Yourself From Retaliation",           type: "Guide",  status: "Coming Soon" },
              { title: "EEO Hearing Basics",                             type: "Guide",  status: "Coming Soon" },
            ].map((r) => (
              <div key={r.title} className="border border-brand-border rounded-sm p-6 bg-[#FAF8F3] flex flex-col gap-3">
                <span className="eyebrow">{r.type}</span>
                <h3 className="font-serif text-brand-navy text-lg leading-snug">{r.title}</h3>
                <span className="font-sans text-xs text-brand-muted italic mt-auto">{r.status}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-brand-border pt-10 text-center">
            <p className="font-sans text-brand-muted text-sm mb-6 max-w-md mx-auto">
              The fastest path to the right answer is a direct conversation about your situation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-white font-sans text-sm font-medium hover:bg-brand-navy/90 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 rounded-sm"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
