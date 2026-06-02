import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Federal EEO, LLC terms of service.",
};

export default function TermsPage() {
  return (
    <article className="bg-white pt-32 section-padding">
      <div className="container-narrow px-6">
        <p className="font-sans text-brand-gold text-xs tracking-[0.2em] uppercase mb-4">Legal</p>
        <h1 className="font-serif text-display-md text-brand-navy mb-2">Terms of Service</h1>
        <p className="font-sans text-brand-muted text-sm mb-10">Last updated: June 2025</p>

        <div className="font-sans text-brand-ink space-y-8">
          {[
            {
              title: "Use of This Website",
              body:  "This website is provided by Federal EEO, LLC for informational purposes only. By accessing this site, you agree to use it only for lawful purposes and in accordance with these Terms. You may not use this site to transmit unlawful, harmful, or offensive content.",
            },
            {
              title: "No Attorney-Client Relationship",
              body:  "Nothing on this website constitutes legal advice, and no attorney-client relationship is created by use of this site, submission of an intake form, or booking a consultation. An attorney-client relationship is only established upon execution of a written engagement agreement.",
            },
            {
              title: "Consultation Disclaimer",
              body:  "Consultations are for strategic guidance and case assessment based on the information available at the time of the meeting. Booking a consultation with Federal EEO, LLC does not create an attorney-client relationship or guarantee representation.",
            },
            {
              title: "No Guarantee of Outcomes",
              body:  "Federal EEO, LLC makes no representations or warranties regarding the outcome of any legal matter. Past outcomes described on this site are illustrative only and do not guarantee similar results in any other matter.",
            },
            {
              title: "Intellectual Property",
              body:  "All content on this website, including text, graphics, logos, and design, is the property of Federal EEO, LLC and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without written permission.",
            },
            {
              title: "Limitation of Liability",
              body:  "Federal EEO, LLC shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on any information contained herein.",
            },
            {
              title: "Governing Law",
              body:  "These Terms are governed by the laws of the District of Columbia. Any dispute arising from these Terms shall be resolved in the courts of the District of Columbia.",
            },
            {
              title: "Changes to These Terms",
              body:  "Federal EEO, LLC reserves the right to modify these Terms at any time. Continued use of the site after changes constitutes acceptance of the revised Terms.",
            },
          ].map(({ title, body }) => (
            <section key={title}>
              <h2 className="font-serif text-xl text-brand-navy mb-3">{title}</h2>
              <p className="leading-relaxed text-brand-muted text-sm">{body}</p>
            </section>
          ))}

          <section>
            <h2 className="font-serif text-xl text-brand-navy mb-3">Contact</h2>
            <p className="leading-relaxed text-brand-muted text-sm">
              Questions regarding these Terms may be directed to{" "}
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
