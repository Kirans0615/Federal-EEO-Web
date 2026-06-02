import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Federal EEO, LLC privacy policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <article className="bg-white pt-32 section-padding">
      <div className="container-narrow px-6">
        <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">Legal</p>
        <h1 className="font-serif text-display-md text-brand-navy mb-2">Privacy Policy</h1>
        <p className="font-sans text-brand-muted text-sm mb-10">Last updated: June 2025</p>

        <div className="prose prose-sm max-w-none font-sans text-brand-ink space-y-8">
          <section>
            <h2 className="font-serif text-xl text-brand-navy mb-3">Information We Collect</h2>
            <p className="leading-relaxed text-brand-muted">
              Federal EEO, LLC collects information you provide directly when you submit our intake
              form, including your name, federal agency, work email, personal email, phone number,
              and a description of your legal matter. We also collect technical data such as IP
              address, browser type, and pages visited through analytics tools.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-brand-navy mb-3">How We Use Your Information</h2>
            <p className="leading-relaxed text-brand-muted">
              Information you submit is used solely to respond to your inquiry, schedule
              consultations, and communicate about your matter. We do not sell, rent, or share
              your personal information with third parties for marketing purposes. Your case
              information is treated with strict confidentiality consistent with professional
              responsibility standards.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-brand-navy mb-3">Email Communications</h2>
            <p className="leading-relaxed text-brand-muted">
              By submitting our intake form, you consent to receive transactional emails including
              confirmation of your submission, scheduling information, and appointment reminders.
              These communications are necessary to fulfill the services you requested. You may
              opt out at any time by replying to any email with &ldquo;unsubscribe&rdquo; in the subject line.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-brand-navy mb-3">Data Security</h2>
            <p className="leading-relaxed text-brand-muted">
              We implement industry-standard security measures to protect your information,
              including encrypted data transmission (HTTPS) and secure database storage. However,
              no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-brand-navy mb-3">Third-Party Services</h2>
            <p className="leading-relaxed text-brand-muted">
              We use the following third-party services: Vercel (hosting and database), Resend
              (transactional email), and Cal.com (appointment scheduling). Each provider has its
              own privacy policy governing their use of your data.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-brand-navy mb-3">No Attorney-Client Relationship</h2>
            <p className="leading-relaxed text-brand-muted">
              Submission of information through this website does not create an attorney-client
              relationship. Confidential attorney-client communications are only established after
              a formal engagement agreement has been executed.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-brand-navy mb-3">Contact</h2>
            <p className="leading-relaxed text-brand-muted">
              Questions regarding this Privacy Policy may be directed to{" "}
              <a href="mailto:edorsey@federal-eeo.com" className="text-brand-gold hover:underline">
                edorsey@federal-eeo.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
