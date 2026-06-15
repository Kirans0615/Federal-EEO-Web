/**
 * Local screenshot harness.
 *
 * Run AFTER `npm run dev` is up (in a separate terminal). Captures desktop
 * 1920×1200 and mobile 390×844 PNGs of every key route. Output lands in
 * /public/screenshots/ which is gitignored — they are review aids, not
 * production assets.
 *
 *   npm run dev          # in one terminal
 *   npm run screenshots  # in another
 *
 * Requires Playwright (already a devDependency).
 */

import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../public/screenshots");
mkdirSync(outDir, { recursive: true });

const BASE = process.env.SHOTS_BASE || "http://localhost:3000";

const ROUTES = [
  "/",
  "/about",
  "/about/press",
  "/services",
  "/resources",
  "/resources/the-45-day-clock",
  "/resources/reasonable-accommodation",
  "/resources/reading-your-roi",
  "/resources/glossary",
  "/resources/faq",
  "/resources/process",
  "/webinars",
  "/webinars/the-45-day-clock-live",
  "/contact",
  "/book",
];

const VIEWPORTS = [
  { name: "desktop", width: 1920, height: 1200 },
  { name: "mobile", width: 390, height: 844 },
];

const browser = await chromium.launch();
for (const v of VIEWPORTS) {
  const ctx = await browser.newContext({
    viewport: { width: v.width, height: v.height },
    deviceScaleFactor: 1,
  });
  for (const route of ROUTES) {
    const page = await ctx.newPage();
    try {
      await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });
      const slug = route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "-");
      const file = join(outDir, `${slug}-${v.name}.png`);
      await page.screenshot({ path: file, fullPage: true });
      console.log(`✓ ${v.name} · ${route}`);
    } catch (e) {
      console.log(`✗ ${v.name} · ${route} — ${e.message}`);
    } finally {
      await page.close();
    }
  }
  await ctx.close();
}
await browser.close();
console.log(`\nDone. Output: ${outDir}`);
