# Federal EEO, LLC — Content Review Checklist

Everything in this file needs Ericka Guthrie Dorsey's review before launch.
Mark each item ✅ when complete.

---

## PRIORITY 1 — Legal & Identity (Blockers)

- [ ] **Phone number** — Add to `/app/contact/page.tsx` (marked `[Phone — see CONTENT.md]`) and Footer
- [ ] **Physical address** — Add full DC office address to Footer and contact page sidebar
- [ ] **Professional headshot** — Replace placeholder in `/app/about/AboutContent.tsx` with actual photo
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

### Images Needing Ericka's Approval
- [ ] **Ericka Headshot** (`/public/images/ericka-headshot.avif`) — confirm this is the preferred professional photo
- [ ] **Washington Overlook** (`/public/images/washingtonoverlook.jpg`) — homepage hero, confirm usage rights
- [ ] **Lincoln Memorial** (`/public/images/lincolnmonument.jpg`) — About page hero and About accordion panel
- [ ] **Washington Bridge** (`/public/images/washingtonbridge.jpg`) — Services hero and mission section background
- [ ] **Washington Pencil** (`/public/images/washingtonpencil.jpg`) — Contact page vertical hero (showing cherry blossoms + monument at dusk)

### Photography Usage Rights
All 5 images were provided by the client via the GitHub repo. Confirm with Ericka that:
- [ ] She owns or has licensed all photos
- [ ] Usage rights permit commercial use on the firm's website

### Copy That Must Change Before Launch
See PRIORITY sections above. Critical blockers:
1. All service prices (TBD throughout)
2. Phone number (placeholder in contact page)
3. Physical DC office address (in Footer and Contact sidebar)
4. Real testimonials with signed releases
5. Ericka's headshot approval (already live — but she should confirm this specific photo)

### Cal.com Appearance Settings
After setup, configure Cal.com appearance to match brand:
- Primary color: `#1B2A4A` (brand navy)
- Accent color: `#C4922A` (brand gold)
- Background: `#FAF8F3` (brand cream)
- Font: Inter (if available)
