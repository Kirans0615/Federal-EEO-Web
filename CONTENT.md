# Federal EEO, LLC — Content Review Checklist

**All visual assets in place as of 2026-06-02. No outstanding image blockers.**

Everything in this file needs Ericka Guthrie Dorsey's review before launch.
Mark each item ✅ when complete.

---

## PRIORITY 1 — Legal & Identity (Blockers)

- [ ] **Phone number** — Add to `/app/contact/page.tsx` (marked `[Phone — see CONTENT.md]`) and Footer
- [ ] **Physical address** — Add full DC office address to Footer and contact page sidebar
- ✅ **Professional headshot** — Real AVIF headshot in place at `/public/images/ericka-dorsey.avif` with JPEG fallback at `/public/images/ericka-dorsey.jpg`. Confirm Ericka approves this specific photo for commercial use.
- [ ] **Attorney disclaimer language** — Confirm the verbatim disclaimer is correct and approved
- [ ] **DC Bar number / license info** — Add to Footer or About page if desired for credibility

---

## PRIORITY 2 — Pricing (Revenue Blocker)

All service prices are currently marked `TBD` in `/app/services/ServicesContent.tsx`.

- [ ] 30-Minute Strategic Assessment — set price
- [ ] 60-Minute Deep Case Review — set price
- [ ] Comprehensive Pre-Filing Strategy Session — set price
- [ ] Individual Employee Training — set price
- [ ] Union Local Training — set price
- [ ] Agency Management Training — set price
- [ ] Hourly Representation — set hourly rate
- [ ] Flat-Fee ROI Representation — set flat fee

---

## PRIORITY 3 — Testimonials (Legal Releases Required)

Current testimonials in `/components/ui/testimonials-columns-1.tsx` are **realistic placeholders only**.

Before launch, Ericka must:
1. Obtain signed written releases from each client whose quote will appear
2. Verify that no quote reveals confidential case details
3. Replace each placeholder with the exact approved text, name, agency, and outcome

The 6 placeholder testimonials cover:
1. Timely complaint filed within 45-day window
2. Won at administrative judge level after ROI review
3. Reasonable accommodation granted after third request
4. Settlement: position restoration + back pay (retaliation)
5. Union local training outcome
6. Complaint survived dismissal via continuing violation doctrine

---

## PRIORITY 4 — Biography

In `/app/about/AboutContent.tsx`:
- [ ] Review and expand the biography paragraphs — current copy is professional but generalized
- [ ] Add specific career highlights, prior employers, or notable positions if desired
- [ ] Add any speaking engagements, publications, or awards
- [ ] Confirm ABA Commission on Disability Rights role and correct title

---

## PRIORITY 5 — FAQ Answers

In `/components/sections/FAQ.tsx`:
- [ ] Review all 7 FAQ answers for accuracy
- [ ] Add any FAQs Ericka commonly answers in consultations
- [ ] Consider adding: "Do you handle cases for SES employees?" and "What if my agency EEO office is unresponsive?"

---

## PRIORITY 6 — Email Subject Lines

In `/app/api/intake/route.ts`, the confirmation email subject is:
> "Your Federal EEO Consultation Request — Next Steps"

- [ ] Approve or revise this subject line
- [ ] Approve the confirmation email body copy
- [ ] Confirm `noreply@federal-eeo.com` is the correct From address

---

## PRIORITY 7 — Resources Page

All 6 guide cards in `/app/resources/page.tsx` are placeholders marked "Coming Soon."

For launch, Ericka should provide:
- [ ] At minimum one completed guide (recommend: "The 45-Day Rule Explained" — highest traffic intent)
- [ ] PDF download files to place in `/public/guides/`

### Featured Resources Section (Homepage)

Three editorial article cards appear on the homepage via `/components/sections/FeaturedResources.tsx`.
**All three titles and excerpts are placeholder copy pending Ericka's review:**

| # | Placeholder Title | Placeholder Excerpt |
|---|---|---|
| 1 | "The 45-Day Clock: What Federal Employees Must Know" | About the critical deadline, when it starts, and what counts as "contact" with an EEO counselor. |
| 2 | "Reasonable Accommodation: Your Rights Under the Rehabilitation Act" | About what agencies are required to do, what employees can request, and how to document denials. |
| 3 | "Reading Your Report of Investigation: A Strategic Guide" | About what the ROI contains, what a weak agency case looks like, and how to use it in a hearing. |

Before launch:
- [ ] Ericka reviews and approves or revises all three titles
- [ ] Ericka reviews and approves or revises all three excerpt paragraphs
- [ ] Confirm these articles will be published on the Resources page (or update links accordingly)

---

## PRIORITY 8 — Cal.com Event Details

- [ ] Confirm Cal.com username (`federal-eeo` is the placeholder)
- [ ] Set DC office address for in-person meeting location
- [ ] Approve confirmation and reminder email copy sent by Cal.com
- [ ] Confirm 15-minute buffer before/after is sufficient

---

## Optional Enhancements (Post-Launch)

- Blog/articles section (Resources page is ready to receive content)
- Client portal for document sharing
- Spanish-language intake form
- Intake form field for "How did you hear about us?"

---

## Visual QA — Review Before Launch

Screenshots saved to `/public/screenshots/`. Review all at desktop and mobile.

### Images — Status

All five photographs fetched from the GitHub repository and live in `/public/images/` with normalized filenames:

| File | Role | Status |
|---|---|---|
| `ericka-dorsey.avif` + `ericka-dorsey.jpg` | Attorney headshot — About page | ✅ In place |
| `washington-overlook.jpg` | Homepage hero full-bleed | ✅ In place |
| `lincoln-memorial.jpg` | About page hero + accordion | ✅ In place |
| `washington-bridge.jpg` | Services hero + Mission background | ✅ In place |
| `washington-monument.jpg` | Contact page sidebar vertical pan | ✅ In place |

### Photography Usage Rights (still required)
All 5 images were provided by Ericka via the GitHub repo. Before launch, confirm:
- [ ] Ericka owns or has a valid commercial license for each of the four DC scenic photographs
- [ ] The headshot may be used commercially on the firm's website
- [ ] Usage rights permit reproduction in screenshots, OG images, and social media previews

See `/public/images/CREDITS.md` for the full record.

### Copy That Must Change Before Launch
See PRIORITY sections above. Critical blockers:
1. All service prices (TBD throughout)
2. Phone number (placeholder in contact page)
3. Physical DC office address (in Footer and Contact sidebar)
4. Real testimonials with signed releases
5. Confirm photography usage rights (checklist above)

### Cal.com Appearance Settings
After setup, configure Cal.com appearance to match brand:
- Primary color: `#1B2A4A` (brand navy)
- Accent color: `#C4922A` (brand gold)
- Background: `#FAF8F3` (brand cream)
- Font: Inter (if available)
