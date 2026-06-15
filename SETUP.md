# Federal EEO, LLC — Setup Guide

End-to-end setup for the three integrations the site depends on after the
Netlify Forms / Calendly / Zoom infrastructure swap. Everything else
(deployment, image config, basePath for GitHub Pages) is already wired in
the codebase.

---

## 1. Netlify Forms

The site ships three forms — Consultation Intake, Webinar Registration, and
Resource Subscription. All three submit through Netlify Forms.

### How Netlify Forms work with this site

This is a Next.js static export. Netlify cannot detect React-rendered forms
that only exist client-side, so we ship **two copies of every form**:

1. The visible interactive form (in `/components/forms/*`).
2. A hidden static schema form (in `/components/forms/NetlifyFormSchemas.tsx`)
   mounted in `app/layout.tsx` and present on every page of the static export.

Netlify's build bot reads the schema forms and provisions the dashboards.

**Important:** Submissions only succeed when the site is *served* by Netlify
(or proxied through `https://<your-site>.netlify.app/`). When this site is
served from GitHub Pages, the form schema is still in the HTML, but POSTs to
`/` return 405 because GitHub Pages does not run a Netlify endpoint. The
interactive forms gracefully route the user to a confirmation screen anyway.

### Connecting Netlify

1. In Netlify, create a new site → "Import an existing project" → connect the
   `Federal-EEO-Web` GitHub repo.
2. Build command: `npm run build`. Publish directory: `out`.
3. Environment variables — none required for forms.
4. After the first deploy completes, Netlify automatically detects the three
   forms. Check the **Forms** tab in the Netlify dashboard.
5. Configure email notifications: Forms → `consultation-intake` → Form
   notifications → Add notification → Email → `edorsey@federal-eeo.com`.
   Repeat for `webinar-registration` and `resource-subscription`.
6. To migrate the subscription list to an email platform later, export
   `resource-subscription` submissions from Netlify and import into Mailchimp,
   ConvertKit, Buttondown, or whatever Ericka chooses.

---

## 2. Calendly

The `/book` page renders a Calendly inline embed when the URL is configured,
or a polished email-and-phone fallback when it is still the placeholder.

### Setup steps (~10 minutes)

1. Ericka creates a Calendly account at https://calendly.com.
2. Calendly → Integrations → connect her Google Calendar.
3. Create two event types:
   - **Strategic Assessment** — 30 minutes.
   - **Deep Case Review** — 60 minutes.
4. Copy the *public event link* for the primary entry point. It will look
   like `https://calendly.com/erickadorsey/strategic-assessment`.
5. Open `/lib/constants.ts` and replace the `CALENDLY_CONSULTATION_URL`
   placeholder string with the real link.
6. Commit and push. The next deploy renders the live inline scheduler in
   place of the fallback card.

Calendly handles time-zone detection, confirmation emails, reminder emails,
and rescheduling automatically.

---

## 3. Zoom Webinars

Each webinar in `/content/webinars.ts` registers attendees through Zoom's
hosted registration page. Zoom handles the unique join links, the
confirmation emails, and the 24-hour / 1-hour / 5-minute reminder cadence.

### Setup per webinar

1. In Zoom (Pro or Business with the webinar add-on), create a new webinar.
2. Under **Registration**, choose "Required."
3. Save. Zoom generates a Registration URL like
   `https://zoom.us/webinar/register/<long-token>`.
4. Open `/content/webinars.ts` and create an entry with:
   - `slug` — URL-safe slug for the `/webinars/<slug>` page.
   - `title`, `description`, `audience`, `learningObjectives` — content
     copied from the marketing copy.
   - `startISO` and `endISO` — ISO 8601 with timezone offset (e.g.,
     `"2026-09-10T18:00:00-04:00"` for Eastern Daylight Time).
   - `zoomRegistrationUrl` — paste the URL from step 3.
   - `status: "upcoming"`.
5. Commit and push. The new webinar appears at `/webinars` and at
   `/webinars/<slug>` after the next deploy.
6. The `prebuild` script regenerates social graphics under
   `/public/social/<slug>/` automatically.

### After the live event

Flip the entry's `status` to `"recorded"` and fill `recordingUrl` with the
Vimeo or unlisted YouTube link. The session moves from the Upcoming list to
the Past Webinars list on `/webinars` automatically.

---

## 4. Dual deployment — GitHub Pages and Netlify

The site builds in two modes:

- **Default** (`npm run build`) — server-mode build. Works on Vercel or
  Netlify with full SSR support. Use this when deploying to Netlify because
  it activates the form-submission endpoint.
- **Static export** (`npm run build:static`) — full HTML export with
  `basePath: /Federal-EEO-Web` for GitHub Pages. The custom image loader
  prepends the basePath to every `next/image` src. Output lands in `/out`.

The GitHub Actions workflow runs `build:static` and publishes `out/` to the
`gh-pages` branch.

---

## 5. Build-time social graphic generation

`scripts/generate-social.mjs` runs in the `prebuild` script. It reads
`/content/webinars.ts`, parses the entries, and emits four PNGs plus a
copy.md per webinar under `/public/social/<slug>/`. The script depends on
`satori` and `sharp` (both in `package.json`); it skips silently if either
is missing.

---

## 6. Local screenshots

`scripts/screenshots.mjs` uses Playwright (a devDependency) to capture
desktop 1920 × 1200 and mobile 390 × 844 PNGs of every key route. Output
lands in `/public/screenshots/` — gitignored.

```bash
npm run dev          # in one terminal
npm run screenshots  # in another
```

---

## Pre-launch checklist

See **CONTENT.md → Pre-Launch Checklist** for the full content-side review
list (articles, FAQ, glossary, process map, placeholder business content,
social graphics, integration setup).
