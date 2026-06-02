import { Hero }                    from "@/components/sections/Hero";
import { CredentialsMarquee }       from "@/components/sections/CredentialsMarquee";
import { ServicesOverview }         from "@/components/sections/ServicesOverview";
import { InteractiveImageAccordion }from "@/components/ui/interactive-image-accordion";
import { MissionReveal }            from "@/components/sections/MissionReveal";
import { TestimonialsColumns }      from "@/components/ui/testimonials-columns-1";
import { FAQ }                      from "@/components/sections/FAQ";
import { ConsultationCTA }          from "@/components/sections/ConsultationCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredentialsMarquee />
      <ServicesOverview />
      <InteractiveImageAccordion />
      <MissionReveal />
      <TestimonialsColumns />
      <FAQ />
      <ConsultationCTA />
    </>
  );
}
