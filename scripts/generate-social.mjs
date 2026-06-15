/**
 * Build-time social graphic generator.
 *
 * Reads /content/webinars.ts (via tsx-free import workaround using a JSON
 * snapshot we generate inline) and produces, per webinar:
 *
 *   /public/social/<slug>/og.png         1200 × 630  (Open Graph + LinkedIn)
 *   /public/social/<slug>/linkedin.png   1200 × 627
 *   /public/social/<slug>/instagram.png  1080 × 1080
 *   /public/social/<slug>/story.png      1080 × 1920
 *   /public/social/<slug>/copy.md        drafted social posts
 *
 * Run as part of `npm run prebuild`. Skips silently if satori or sharp
 * cannot be loaded (e.g. on a fresh checkout before npm install).
 */

import { readFileSync, mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

let satori, sharp;
try {
  satori = (await import("satori")).default;
  sharp = (await import("sharp")).default;
} catch {
  console.log(
    "[generate-social] satori or sharp not installed yet — skipping. Run `npm install` and re-run the build."
  );
  process.exit(0);
}

/* Parse webinars from the TS source file — no compiler needed. */
const tsSource = readFileSync(
  join(root, "content/webinars.ts"),
  "utf8"
);
const blocks = [];
const re = /\{[^{}]*?slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?description:\s*"([^"]+)"[\s\S]*?startISO:\s*"([^"]+)"[\s\S]*?endISO:\s*"([^"]+)"[\s\S]*?status:\s*"([^"]+)"[\s\S]*?\}/g;
let m;
while ((m = re.exec(tsSource)) !== null) {
  blocks.push({
    slug: m[1],
    title: m[2],
    description: m[3],
    startISO: m[4],
    endISO: m[5],
    status: m[6],
  });
}

if (blocks.length === 0) {
  console.log("[generate-social] no webinars found in content/webinars.ts");
  process.exit(0);
}

/* Load Inter Regular and Source Serif Bold from Google Fonts CDN once. */
async function fontBuffer(family, weight) {
  const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`;
  const css = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
  }).then((r) => r.text());
  const woff2 = css.match(/url\((https:\/\/[^)]+\.ttf)\)/);
  if (!woff2) throw new Error("font url not found in google css");
  const ttf = await fetch(woff2[1]).then((r) => r.arrayBuffer());
  return Buffer.from(ttf);
}

const [inter, serif] = await Promise.all([
  fontBuffer("Inter", "500"),
  fontBuffer("Source+Serif+4", "700"),
]);

const NAVY = "#102542";
const GOLD = "#C5A572";
const CREAM = "#FAF8F3";

function dateLabel(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
function timeLabel(start, end) {
  const opts = { hour: "numeric", minute: "2-digit" };
  return `${new Date(start).toLocaleTimeString("en-US", opts)} – ${new Date(end).toLocaleTimeString("en-US", opts)} ET`;
}

function tplCard({ w, h, paddingTop, label, titleSize }) {
  return ({ webinar }) => ({
    type: "div",
    props: {
      style: {
        width: w,
        height: h,
        display: "flex",
        flexDirection: "column",
        background: CREAM,
        padding: paddingTop,
        fontFamily: "Inter",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              gap: 14,
              alignItems: "center",
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    width: 14,
                    height: 14,
                    background: GOLD,
                  },
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    color: GOLD,
                    fontSize: 18,
                    letterSpacing: 4,
                    textTransform: "uppercase",
                  },
                  children: label,
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: {
              marginTop: 24,
              color: NAVY,
              fontFamily: "Source Serif 4",
              fontSize: titleSize,
              lineHeight: 1.05,
              maxWidth: w - paddingTop * 2,
            },
            children: webinar.title,
          },
        },
        {
          type: "div",
          props: {
            style: {
              marginTop: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              color: NAVY,
              fontSize: 22,
            },
            children: [
              {
                type: "div",
                props: {
                  children: dateLabel(webinar.startISO),
                  style: { fontFamily: "Source Serif 4", fontSize: 30 },
                },
              },
              {
                type: "div",
                props: {
                  children: timeLabel(webinar.startISO, webinar.endISO),
                  style: { color: "rgba(16,37,66,0.7)" },
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    marginTop: 26,
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          padding: "14px 26px",
                          background: GOLD,
                          color: "#FFFFFF",
                          fontSize: 22,
                          fontWeight: 600,
                          letterSpacing: 1,
                          textTransform: "uppercase",
                        },
                        children: "Register Free",
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          color: NAVY,
                          fontSize: 20,
                          fontWeight: 600,
                        },
                        children: "federal-eeo.com",
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  });
}

const SIZES = [
  { name: "og", w: 1200, h: 630, padding: 80, label: "Federal EEO Webinar", titleSize: 60 },
  { name: "linkedin", w: 1200, h: 627, padding: 80, label: "LinkedIn", titleSize: 58 },
  { name: "instagram", w: 1080, h: 1080, padding: 90, label: "Instagram Feed", titleSize: 78 },
  { name: "story", w: 1080, h: 1920, padding: 100, label: "Reels / Stories", titleSize: 96 },
];

const fontConfig = [
  { name: "Inter", data: inter, style: "normal", weight: 500 },
  { name: "Source Serif 4", data: serif, style: "normal", weight: 700 },
];

for (const w of blocks) {
  const outDir = join(root, "public/social", w.slug);
  mkdirSync(outDir, { recursive: true });
  for (const size of SIZES) {
    const tpl = tplCard({
      w: size.w,
      h: size.h,
      paddingTop: size.padding,
      label: size.label,
      titleSize: size.titleSize,
    })({ webinar: w });
    const svg = await satori(tpl, {
      width: size.w,
      height: size.h,
      fonts: fontConfig,
    });
    const png = await sharp(Buffer.from(svg)).png().toBuffer();
    writeFileSync(join(outDir, `${size.name}.png`), png);
  }

  /* Drafted post copy. Ericka can edit any line and re-paste. */
  const copy = `# Social copy for: ${w.title}

> Drafts. Tone-match Ericka's voice. Edit then paste.

## LinkedIn long-form

I'm running a free webinar for federal employees on ${dateLabel(w.startISO)}.

**${w.title}**

${w.description}

If you are ${w.audience.toLowerCase()}, this is for you. Free registration, recording sent afterward to everyone who signs up.

Register: federal-eeo.com/webinars/${w.slug}

#FederalEmployees #EEO #FederalEmployment

## Instagram caption

${w.title}

${w.description.slice(0, 220)}…

Live ${dateLabel(w.startISO)} · Free · Link in bio.

## Story / Reels overlay

🗓 ${dateLabel(w.startISO)}
${w.title}
Tap to register — free.
`;
  writeFileSync(join(outDir, "copy.md"), copy);
}

console.log(
  `[generate-social] generated graphics for ${blocks.length} webinar(s).`
);
