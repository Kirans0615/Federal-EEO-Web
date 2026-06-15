/**
 * Site-wide constants.
 *
 * Several values are intentionally placeholders. Ericka / Kiran must replace
 * them before launch. Every placeholder follows the pattern "REPLACE-WITH-…"
 * so a global grep surfaces them in one pass.
 *
 * See CONTENT.md → Pre-Launch Checklist for the exact replacement steps.
 */

/* ─── Firm identity ─────────────────────────────────────────────────── */
export const FIRM = {
  name: "Federal EEO, LLC",
  attorney: "Ericka G. Dorsey, Esq.",
  email: "edorsey@federal-eeo.com",
  phone: "(301) 531-4322",
  phoneRaw: "+13015314322",
  address: {
    line1: "Washington, DC metropolitan area",
    line2: "",
  },
  // Replace with the firm's verified LinkedIn page URL once created.
  linkedinUrl: "REPLACE-WITH-FIRM-LINKEDIN-URL",
} as const;

/* ─── Calendly ──────────────────────────────────────────────────────── */
/**
 * Replace with the real Calendly event-type link once:
 *   1. Ericka creates her Calendly account
 *   2. Connects her Google Calendar in Calendly → Integrations
 *   3. Creates two event types — "Strategic Assessment" (30 min) and
 *      "Deep Case Review" (60 min) — and grabs the public event link
 *
 * The link pattern is usually:
 *   https://calendly.com/<handle>/strategic-assessment
 *
 * Until this is replaced, /book will render a fallback card pointing
 * users to the firm email and phone (see app/book/BookContent.tsx).
 */
export const CALENDLY_CONSULTATION_URL =
  "https://calendly.com/REPLACE-WITH-ERICKA-CONSULTATION-LINK";

export const isCalendlyConfigured = () =>
  !CALENDLY_CONSULTATION_URL.includes("REPLACE-WITH");

/* ─── Netlify Forms ─────────────────────────────────────────────────── */
/**
 * Netlify Forms form names. These are referenced in three places:
 *   1. The visible interactive form (data-netlify="true", name="…")
 *   2. The hidden static schema form rendered in app/layout.tsx so
 *      Netlify's build bot can detect each form's field list during
 *      deploy (see components/forms/NetlifyFormSchemas.tsx)
 *   3. The success page or fetch action target ("/" by default)
 *
 * Form submissions only succeed when the site is hosted on Netlify
 * or proxied through their submission endpoint. The schema deploys
 * with the site to GitHub Pages, but submissions there will 404.
 * See SETUP.md → Netlify Forms.
 */
export const NETLIFY_FORM_NAMES = {
  intake: "consultation-intake",
  webinarRegistration: "webinar-registration",
  resourceSubscription: "resource-subscription",
} as const;

/* ─── Default Netlify success path ──────────────────────────────────── */
export const NETLIFY_INTAKE_SUCCESS = "/book/?submitted=true";
export const NETLIFY_SUBSCRIBE_SUCCESS = "/resources/?subscribed=true";

/* ─── Site URL ──────────────────────────────────────────────────────── */
export const SITE_URL =
  process.env.NEXT_PUBLIC_IS_STATIC_EXPORT === "true"
    ? "https://kirans0615.github.io/Federal-EEO-Web"
    : process.env.NEXT_PUBLIC_SITE_URL ??
      "https://kirans0615.github.io/Federal-EEO-Web";

export const BASE_PATH =
  process.env.NEXT_PUBLIC_IS_STATIC_EXPORT === "true"
    ? "/Federal-EEO-Web"
    : "";
