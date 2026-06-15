/**
 * Webinar registry.
 *
 * To add a webinar:
 *   1. Create the webinar in Ericka's Zoom account with "Require registration" enabled
 *   2. Copy the registration URL from Zoom (the link attendees use to sign up)
 *   3. Add an entry to UPCOMING below with the placeholder fields filled in
 *   4. Commit and push — GitHub Actions rebuilds and the new webinar appears
 *      at /webinars and at /webinars/<slug>
 *
 * Set status to "recorded" once the live event ends, fill recordingUrl, and
 * the entry will move from "Upcoming" to "Past Webinars" automatically.
 *
 * See CONTENT.md → Webinars for screenshots-and-paste instructions.
 */

export type WebinarStatus = "upcoming" | "live" | "recorded";

export interface Webinar {
  slug: string;
  title: string;
  description: string;
  /** ISO 8601, e.g. "2026-08-14T18:00:00-04:00" (with TZ offset). */
  startISO: string;
  /** ISO 8601 end time. */
  endISO: string;
  /** Display label such as "Eastern Time" — copy into og:event TZ. */
  timezoneLabel: string;
  audience: string;
  learningObjectives: string[];
  /** Zoom registration URL — attendees sign up here. */
  zoomRegistrationUrl: string;
  status: WebinarStatus;
  /** Set when status flips to "recorded". Vimeo or unlisted YouTube. */
  recordingUrl?: string;
  /** Hero image — file under /public/webinars/ */
  heroImage?: string;
}

export const WEBINARS: Webinar[] = [
  {
    slug: "the-45-day-clock-live",
    title: "The 45-Day Clock: What Federal Employees Must Do First",
    description:
      "A live walkthrough of the federal EEO complaint process from the moment a discriminatory event occurs to the close of informal counseling. We cover what triggers the 45-day window, how to document before you call the EEO office, and the choice between traditional counseling and ADR mediation — with time for live questions.",
    startISO: "2026-09-10T18:00:00-04:00",
    endISO: "2026-09-10T19:00:00-04:00",
    timezoneLabel: "Eastern Time",
    audience: "Federal employees in pre-complaint stage",
    learningObjectives: [
      "Identify what does — and does not — start the 45-day clock",
      "Build a documentation file before your first EEO counselor contact",
      "Decide between traditional counseling and ADR mediation",
      "Know when to seek counsel before the formal filing window",
    ],
    zoomRegistrationUrl:
      "https://zoom.us/webinar/register/REPLACE-WITH-ZOOM-REGISTRATION-URL",
    status: "upcoming",
  },
  {
    slug: "reading-your-roi-live",
    title: "Reading Your ROI: A Working Session",
    description:
      "A structured working session for federal employees who have received a Report of Investigation. We map the typical ROI sections, show how to read witness statements against the agency's narrative, and frame the strategic decision that follows — accept the FAD, request a hearing, or settle.",
    startISO: "2026-10-15T18:00:00-04:00",
    endISO: "2026-10-15T19:30:00-04:00",
    timezoneLabel: "Eastern Time",
    audience: "Federal employees with an ROI in hand",
    learningObjectives: [
      "Understand the standard ROI structure and where the weak points usually sit",
      "Read witness statements against agency responses for inconsistencies",
      "Frame the three downstream choices: hearing, FAD, or settlement",
      "Prepare a one-page case theory before electing your next step",
    ],
    zoomRegistrationUrl:
      "https://zoom.us/webinar/register/REPLACE-WITH-ZOOM-REGISTRATION-URL",
    status: "upcoming",
  },
];

export const upcomingWebinars = () =>
  WEBINARS.filter((w) => w.status !== "recorded").sort(
    (a, b) => new Date(a.startISO).getTime() - new Date(b.startISO).getTime()
  );

export const pastWebinars = () =>
  WEBINARS.filter((w) => w.status === "recorded").sort(
    (a, b) => new Date(b.startISO).getTime() - new Date(a.startISO).getTime()
  );

export const getWebinarBySlug = (slug: string) =>
  WEBINARS.find((w) => w.slug === slug);
