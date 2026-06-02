import Link from "next/link";

const DISCLAIMER =
  "Consultations are for strategic guidance and case assessment based on the information available at the time of the meeting. Booking a consultation with Federal EEO, LLC does not create an attorney-client relationship or guarantee representation.";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-serif text-white text-xl small-caps mb-1">Federal EEO, LLC</p>
            <p className="text-brand-gold text-xs tracking-[0.18em] uppercase font-sans mb-4">
              Consultants &amp; Advocates
            </p>
            <div className="flex gap-1 mb-4">
              {[1,2,3].map((i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C4922A" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p className="text-sm font-sans text-white/60 italic">
              &ldquo;Experience. Dedication. Results.&rdquo;
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-xs font-sans tracking-[0.16em] uppercase mb-4">Navigate</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["About",     "/about"],
                ["Services",  "/services"],
                ["Resources", "/resources"],
                ["Contact",   "/contact"],
                ["Brand",     "/brand"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-brand-gold transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xs font-sans tracking-[0.16em] uppercase mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:edorsey@federal-eeo.com" className="hover:text-brand-gold transition-colors duration-200">
                  edorsey@federal-eeo.com
                </a>
              </li>
              <li className="text-white/60">Washington, DC</li>
              <li className="mt-4">
                <Link
                  href="/contact"
                  className="inline-block px-4 py-2 border border-brand-gold text-brand-gold text-xs tracking-wide hover:bg-brand-gold hover:text-white transition-all duration-200"
                >
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-8 mb-6">
          <p className="text-xs text-white/50 font-sans leading-relaxed max-w-4xl">
            <strong className="text-white/70 font-medium">Disclaimer:</strong> {DISCLAIMER}
          </p>
        </div>

        {/* Legal footer */}
        <div className="flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Federal EEO, LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="hover:text-white/70 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
