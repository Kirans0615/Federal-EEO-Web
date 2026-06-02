# Federal EEO, LLC — Setup Guide

Complete setup guide for Kiran. Follow in order.

---

## 1. Fix npm Cache Permissions (Local Only)

Run once in your terminal:
```bash
sudo chown -R $(whoami) ~/.npm
```

Then install all dependencies:
```bash
cd federal-eeo-web
npm install
npm install framer-motion lucide-react react-hook-form zod @hookform/resolvers resend @react-email/components date-fns @vercel/analytics @vercel/postgres
```

---

## 2. Resend — Email Domain Verification

Federal employees use government inboxes that aggressively filter unknown senders.
Real DNS configuration is **required** before launch.

### 2a. Create Resend Account
1. Go to https://resend.com and create a free account
2. Click **Domains** → **Add Domain** → enter `federal-eeo.com`
3. Resend will display 4 DNS records to add

### 2b. Add DNS Records (in your domain registrar)

| Type  | Name                          | Value                                  |
|-------|-------------------------------|----------------------------------------|
| TXT   | `@` or `federal-eeo.com`      | `v=spf1 include:_spf.resend.com ~all` |
| CNAME | `resend._domainkey`           | (value Resend provides)                |
| TXT   | `_dmarc`                      | `v=DMARC1; p=quarantine; rua=mailto:dmarc@federal-eeo.com; pct=100` |
| MX    | Per Resend instructions       | Per Resend instructions                |

> **SPF note:** If federal-eeo.com already has an SPF record, merge the include rather than adding a second TXT record.

### 2c. Get API Key
1. In Resend → **API Keys** → **Create API Key**
2. Name it `federal-eeo-prod`
3. Copy the key — you'll need it in step 5 (Vercel env vars)

### 2d. Email Warmup Plan
To avoid spam filters on government inboxes:
- **Week 1:** Send 10-20 emails/day
- **Week 2:** 50-100/day  
- **Week 3+:** Normal volume
- Never use subject line phrases: "free consultation," all-caps words, excessive "!"

---

## 3. Vercel Postgres — Lead Database

### 3a. Create Database
1. Go to https://vercel.com → your project → **Storage** tab
2. Click **Create Database** → **Postgres**
3. Name it `federal-eeo-leads`
4. Click **Create**

### 3b. Create the Leads Table
In the Vercel Postgres query editor, run:

```sql
CREATE TABLE IF NOT EXISTS leads (
  id              SERIAL PRIMARY KEY,
  name            TEXT NOT NULL,
  agency          TEXT NOT NULL,
  work_email      TEXT NOT NULL,
  personal_email  TEXT,
  phone           TEXT NOT NULL,
  case_stage      TEXT NOT NULL,
  case_description TEXT NOT NULL,
  contact_method  TEXT NOT NULL,
  time_sensitive  BOOLEAN DEFAULT FALSE,
  status          TEXT DEFAULT 'new',
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_time_sensitive ON leads(time_sensitive) WHERE time_sensitive = TRUE;
```

### 3c. Get Connection String
Vercel automatically injects `POSTGRES_URL` into your project when you link the database.
In Vercel → your project → **Settings** → **Environment Variables**, confirm `POSTGRES_URL` is present.

---

## 4. Cal.com — Scheduling

### 4a. Create Account
1. Go to https://cal.com and create a free account using `edorsey@federal-eeo.com`
2. Set your username to `federal-eeo` (URL will be `cal.com/federal-eeo`)

### 4b. Connect Google Calendar
1. **Settings** → **Calendars** → **Connect a new calendar** → Google
2. Follow OAuth flow to connect Ericka's Google Calendar
3. Set the connected calendar as both the availability source and event destination

### 4c. Create Event Types

**Event 1: Strategic Assessment (30 min)**
- Name: `Strategic Assessment`
- URL slug: `strategic-assessment`
- Duration: 30 minutes
- Locations: Google Meet (auto-generate link), Phone (Ericka calls), In-Person (DC office address)
- Buffer: 15 min before AND after
- Confirmation: Auto-send with Google Meet link embedded
- Reminders: 24 hours before, 1 hour before — embed meeting link in both

**Event 2: Deep Case Review (60 min)**
- Name: `Deep Case Review`
- URL slug: `deep-case-review`
- Duration: 60 minutes
- Same locations, buffer, and reminder settings as above

### 4d. Get Embed Code
1. Event type page → **Embed** tab
2. Copy the inline embed snippet
3. In `/app/book/BookContent.tsx`, replace the placeholder `<div>` with the Cal.com embed
4. Update `CAL_USERNAME` at the top of `BookContent.tsx` to `federal-eeo`

### 4e. Update Scheduling Link
In `/app/api/intake/route.ts`, set:
```
process.env.CAL_SCHEDULING_LINK = "https://cal.com/federal-eeo"
```

---

## 5. Vercel Environment Variables

In Vercel → project → **Settings** → **Environment Variables**, add:

| Key                    | Value                            | Environment        |
|------------------------|----------------------------------|--------------------|
| `RESEND_API_KEY`       | re_xxxxxxxxxxxx (from step 2c)   | Production, Preview |
| `CAL_SCHEDULING_LINK`  | https://cal.com/federal-eeo      | Production, Preview |
| `POSTGRES_URL`         | Auto-injected by Vercel Postgres | All                |

---

## 6. Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# From project directory
cd federal-eeo-web
vercel --prod
```

Or connect the GitHub repo to Vercel for automatic deployments on push.

**Custom domain:**
1. Vercel → project → **Domains** → Add `federal-eeo.com` and `www.federal-eeo.com`
2. Update DNS A/CNAME records at your registrar to point to Vercel

---

## 7. Post-Launch Checklist

- [ ] Submit `federal-eeo.com` to Google Search Console
- [ ] Verify DMARC reports are arriving at `dmarc@federal-eeo.com`
- [ ] Send a test form submission and confirm all 4 actions fire (DB write, lead confirmation, Ericka notification, Cal.com redirect)
- [ ] Test scheduling on mobile
- [ ] Check email deliverability to a `.gov` address using mail-tester.com

---

## 8. New Environment Variables (Visual Upgrade)

No new environment variables introduced by the visual upgrade. All image assets are self-hosted in `/public/images/`.

## 9. Reading Mode

Reading mode is a client-side toggle in the navbar (eye icon). It sets `data-reading-mode="true"` on the `<html>` element, which activates CSS overrides in `globals.css`:
- Near-black background (`#1A1814`)
- Cream text (`#F4EFE6`)
- Larger base type (18px), relaxed line height (1.85)
No env vars needed. No server configuration required.

## 10. Image Optimization Notes

- All 5 DC images are stored in `/public/images/` and served via Next.js Image with AVIF+WebP auto-conversion
- Blur placeholders pre-generated in `lib/blur-data.json` using plaiceholder + sharp
- `next.config.mjs` configured for srcsets at 640, 1080, 1920, 2560 widths
- Ericka's headshot is AVIF (already optimized at 36KB); all others are high-res JPEGs

---

## 11. Dual Deployment — Vercel + GitHub Pages

### 11a. Environment Variables Reference

#### Vercel Dashboard (set under Settings → Environment Variables)

| Key | Environment | Purpose |
|-----|-------------|---------|
| `RESEND_API_KEY` | Production, Preview | Resend transactional email — from §2c |
| `CAL_SCHEDULING_LINK` | Production, Preview | Cal.com booking URL (already set in vercel.json env block) |
| `POSTGRES_URL` | All | Auto-injected when you link the Vercel Postgres database — from §3c |

**Never put these values in `vercel.json` or commit them to the repository.**

#### GitHub Repository Secrets

**None required.** The GitHub Actions workflows only need `GITHUB_TOKEN`, which GitHub provides automatically with the minimum required permissions (`contents: read`, `pages: write`, `id-token: write`).

If you add Vercel preview deployments via GitHub integration in the future, those env vars are set in the Vercel dashboard per-environment — not in GitHub Secrets.

### 11b. Enable GitHub Pages (manual step — cannot be automated)

1. Go to your repository on GitHub
2. Click **Settings** → **Code and automation** → **Pages**
3. Under **Build and deployment**, set Source to: **GitHub Actions**
4. Click Save
5. Push a commit to `main` — the workflow will run and deploy automatically

After the first successful run, the site will be live at:
`https://kirans0615.github.io/Federal-EEO-Web/`

### 11c. GitHub Pages Environment Protection

GitHub automatically creates a `github-pages` environment when the first deployment runs. To add a deployment protection rule:
1. Repository **Settings** → **Environments** → **github-pages**
2. Under **Deployment protection rules**, enable **Required reviewers** or at minimum confirm that **Deployment branches** is set to `main` only

### 11d. Static Build Behavior

When `GITHUB_PAGES=1` is set (automatically by the workflow):
- `output: 'export'` is enabled → produces static HTML in `./out/`
- `trailingSlash: true` → GitHub Pages path compatibility
- `basePath: /Federal-EEO-Web` → correct asset URLs under the repo path
- `images.unoptimized: true` → bypasses Next.js Image CDN (no server available)
- `NEXT_PUBLIC_IS_STATIC_EXPORT=true` → baked into client bundles at build time
  - The intake form renders but shows a "live site only" notice instead of submitting
  - The submit button is disabled

API routes (`/api/intake`) are excluded from the static export. Only the GET handler is included as a static JSON file.

### 11e. Vercel Deployment (Production)

None of the static export options apply on Vercel (`GITHUB_PAGES` is not set). The site runs as a full Next.js server:
- All API routes active
- `next/image` optimization (AVIF + WebP, CDN-served)
- Resend + Postgres + Cal.com all fully operational
