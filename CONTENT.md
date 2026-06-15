# Federal EEO, LLC — Content & Pre-Launch Checklist

Single source of truth for everything Ericka needs to review, replace, or
approve before the site goes public.

---

## Pre-Launch Review Checklist

### 1. Articles requiring legal review and approval

All three flagship articles are drafted and live at the routes below. Each
displays a "Draft pending review" banner until the `status` field in the
article file is flipped from `"draft"` to `"published"`.

| Article | Route | File |
|---|---|---|
| The 45-Day Clock: A Federal Employee's First Move | `/resources/the-45-day-clock` | `content/articles/the-45-day-clock.ts` |
| Reasonable Accommodation: What Federal Agencies Actually Owe You | `/resources/reasonable-accommodation` | `content/articles/reasonable-accommodation.ts` |
| Reading Your ROI: A Strategic Framework | `/resources/reading-your-roi` | `content/articles/reading-your-roi.ts` |

To approve an article: edit the file, change `status: "draft"` to
`status: "published"`, commit, push. The banner disappears.

### 2. FAQ answers requiring legal review

`content/faq.ts` — 15 question/answer pairs. Each entry has a `draftPending`
flag. Flip to `false` per entry as reviewed.

The 15 questions: filing deadline · need lawyer · EEO vs MSPB · retaliation
protected · what is ROI · process timeline · what can I recover · settle or
hearing · rude supervisor · request accommodation · mixed case · federal
contractor · missed 45-day · info protection · cost to hire.

### 3. Glossary definitions requiring legal review

`content/glossary.ts` — 36 federal EEO terms. Same `draftPending` flag per
term.

### 4. Process Map content requiring legal review

`content/process.ts` — 9 stages from Discriminatory Event through OFO Appeal.
Each has content for: what happens, what you should do, typical timeline,
common mistakes, and how Federal EEO helps. Same `draftPending` flag per
stage.

### 5. Placeholder business content awaiting real data

| Item | Where it lives | What is needed |
|---|---|---|
| Recent Wins | `components/sections/RecentWins.tsx` | 3–5 anonymized real outcomes (signed release or genuine anonymization). **Highest priority** — single biggest credibility delta. |
| Press & Speaking entries | `app/about/press/page.tsx` | Real speaking engagements, professional service appointments, and media quotes. |
| Calendly URL | `lib/constants.ts` → `CALENDLY_CONSULTATION_URL` | Real Calendly event-type link. See SETUP.md → Calendly. |
| Zoom webinar registration URLs | `content/webinars.ts` → `zoomRegistrationUrl` per entry | Real Zoom registration URL per webinar. See SETUP.md → Zoom. |
| Firm LinkedIn URL | `lib/constants.ts` → `FIRM.linkedinUrl` | Once a firm LinkedIn page exists, replace placeholder. Surfaces in Organization JSON-LD. |
| Service pricing | `app/services/*` | Pricing for consultation tiers, if Ericka wants prices public. |

### 6. Social media graphics templates

Auto-generated at build time by `scripts/generate-social.mjs` from
`content/webinars.ts`. Per webinar:

```
/public/social/<slug>/og.png         1200 × 630
/public/social/<slug>/linkedin.png   1200 × 627
/public/social/<slug>/instagram.png  1080 × 1080
/public/social/<slug>/story.png      1080 × 1920
/public/social/<slug>/copy.md        drafted post copy
```

Ericka can save the PNGs from the deployed site and lightly edit the drafted
LinkedIn / Instagram / story copy before posting.

### 7. Email integration setup

- **Netlify Forms dashboard** — verify Ericka has access once the Netlify
  project is connected. See SETUP.md → Netlify Forms.
- **Future email platform** — when one is chosen (Mailchimp, ConvertKit,
  Buttondown), export the `resource-subscription` list from Netlify and
  import.

### 8. Calendly setup steps

1. Create Calendly account.
2. Connect Google Calendar.
3. Create event types: "Strategic Assessment" (30 min), "Deep Case Review"
   (60 min).
4. Copy the primary event-type public link.
5. Paste into `lib/constants.ts` → `CALENDLY_CONSULTATION_URL`.
6. Commit and push.

Full walkthrough in SETUP.md → Calendly.

### 9. Zoom setup steps per webinar

1. Create webinar in Zoom with "Require registration" enabled.
2. Copy the registration URL.
3. Add an entry to `content/webinars.ts` with all fields filled.
4. Commit and push.

Full walkthrough in SETUP.md → Zoom.

---

## Content tone reference

The drafts follow Ericka's established voice: direct, authoritative, no
hedging, plain English over legalisms. Where a legal citation is helpful
(29 CFR § 1614.105(a)(1), the Rehabilitation Act, Title VII), it is cited
inline. Where a federal employee should call counsel, that is stated
directly.

If a passage feels tonally off, keep the substance and rewrite in Ericka's
natural cadence.

---

## After the first real win

Replace the placeholder Recent Wins with the real outcome. The shift from
"placeholder" to "Federal employee at the VA — full reinstatement, restored
seniority, settlement on terms our client wanted, 8 months" is the single
biggest credibility delta the site will ever see. Do this first when you
have your first releasable outcome.
