/**
 * Structured data (JSON-LD) components.
 *
 * Each renders a <script type="application/ld+json"> with the appropriate
 * schema.org payload. Place these in the relevant Server Components — they
 * emit pure JSON in the output HTML and contribute to rich-result eligibility.
 */

import { FIRM, SITE_URL } from "@/lib/constants";

interface JsonLdProps {
  data: Record<string, unknown>;
}

function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // The payload is sanitized JSON. dangerouslySetInnerHTML is the
      // standard mechanism for server-rendered <script> contents in React.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "LegalService",
        name: FIRM.name,
        url: SITE_URL,
        email: FIRM.email,
        telephone: FIRM.phoneRaw,
        founder: {
          "@type": "Person",
          name: FIRM.attorney,
          jobTitle: "Founding Attorney",
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        knowsAbout: [
          "Federal EEO complaint process",
          "Title VII of the Civil Rights Act",
          "Rehabilitation Act",
          "Reasonable accommodation",
          "Age Discrimination in Employment Act",
          "Federal employment law",
          "Merit Systems Protection Board",
          "EEOC Office of Federal Operations",
        ],
        sameAs:
          FIRM.linkedinUrl.includes("REPLACE-WITH")
            ? []
            : [FIRM.linkedinUrl],
      }}
    />
  );
}

interface ArticleJsonLdProps {
  headline: string;
  description: string;
  published: string;
  lastReviewed: string;
  url: string;
  section: string;
}

export function ArticleJsonLd({
  headline,
  description,
  published,
  lastReviewed,
  url,
  section,
}: ArticleJsonLdProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline,
        description,
        datePublished: published,
        dateModified: lastReviewed,
        author: {
          "@type": "Person",
          name: FIRM.attorney,
        },
        publisher: {
          "@type": "Organization",
          name: FIRM.name,
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        articleSection: section,
      }}
    />
  );
}

interface EventJsonLdProps {
  name: string;
  description: string;
  startISO: string;
  endISO: string;
  url: string;
  registrationUrl: string;
}

export function EventJsonLd({
  name,
  description,
  startISO,
  endISO,
  url,
  registrationUrl,
}: EventJsonLdProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Event",
        name,
        description,
        startDate: startISO,
        endDate: endISO,
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "VirtualLocation",
          url: registrationUrl,
        },
        organizer: {
          "@type": "Organization",
          name: FIRM.name,
          url: SITE_URL,
        },
        performer: {
          "@type": "Person",
          name: FIRM.attorney,
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: registrationUrl,
          validFrom: new Date().toISOString(),
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
      }}
    />
  );
}
