import { Hero }                     from "@/components/sections/Hero";
import { CredentialsMarquee }        from "@/components/sections/CredentialsMarquee";
import { StatisticsStrip }           from "@/components/sections/StatisticsStrip";
import { ServicesOverview }          from "@/components/sections/ServicesOverview";
import { RevealImages }              from "@/components/ui/reveal-images";
import { InteractiveImageAccordion } from "@/components/ui/interactive-image-accordion";
import { MissionReveal }             from "@/components/sections/MissionReveal";
import { PullQuote }                 from "@/components/ui/PullQuote";
import { TestimonialsColumns }       from "@/components/ui/testimonials-columns-1";
import { FAQ }                       from "@/components/sections/FAQ";
import { FeaturedResources }         from "@/components/sections/FeaturedResources";
import { ConsultationCTA }           from "@/components/sections/ConsultationCTA";
import { SideIndex }                 from "@/components/ui/SideIndex";

const SECTIONS = [
  { id: "hero",           label: "Introduction" },
  { id: "services",       label: "Services" },
  { id: "mission",        label: "Our Mission" },
  { id: "testimonials",   label: "Testimonials" },
  { id: "resources",      label: "Resources" },
];

export default function HomePage() {
  return (
    <>
      <SideIndex sections={SECTIONS} />

      <div id="hero">
        <Hero />
      </div>

      <StatisticsStrip />

      <CredentialsMarquee />

      {/* What we do — editorial service rows */}
      <section
        id="services"
        className="bg-[#FAF8F3] scroll-mt-16"
        aria-label="Services overview"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-4">
          <p
            className="font-sans text-brand-gold/70 mb-3"
            style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
          >
            What we do
          </p>
          <h2
            className="font-serif text-brand-navy"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.02em", lineHeight: 1.15, maxWidth: "32ch" }}
          >
            Expert federal EEO guidance — at every stage of the process.
          </h2>
        </div>
        <RevealImages />
      </section>

      <ServicesOverview />
      <InteractiveImageAccordion />

      <div id="mission">
        <MissionReveal />
      </div>

      <div id="testimonials">
        <section className="bg-white px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-3xl mx-auto">
            <PullQuote
              quote="The window to protect your rights in the federal EEO process is narrow. Once a deadline passes, no amount of legal skill can recover it."
              name="Ericka Guthrie Dorsey, Esq."
              role="Founder, Federal EEO, LLC"
            />
          </div>
        </section>
        <TestimonialsColumns />
      </div>

      <FAQ />

      <div id="resources">
        <FeaturedResources />
      </div>

      <ConsultationCTA />
    </>
  );
}
