/**
 * Federal EEO, LLC — Centralized Image Registry
 *
 * All five photographs are owned by or licensed to Federal EEO, LLC
 * and were provided by Kiran Sen via the project repository at
 * github.com/Kirans0615/Federal-EEO-Web.
 *
 * Role assignments (confirmed by inspecting native dimensions and composition):
 *
 *   washington-overlook.jpg   6027×4018  Landscape panorama of the National Mall at dusk.
 *                                        → Homepage hero full-bleed (strongest wide-angle shot).
 *
 *   lincoln-memorial.jpg      6000×4000  Wide colonnade framing Lincoln Memorial steps and columns.
 *                                        → About page hero (architectural gravity matches firm tone).
 *
 *   washington-bridge.jpg     3000×2001  Washington DC bridge, moderate wide shot.
 *                                        → Services page hero + Mission section background (grayscale).
 *
 *   washington-monument.jpg   8035×5359  Ultra-high-res landscape capturing the Washington Monument.
 *                                        → Contact page sidebar vertical-pan hero (crops well in portrait frame).
 *
 *   ericka-dorsey.avif         634×792   Portrait headshot, ~4:5 aspect ratio.
 *                                        → Attorney headshot on About page and throughout.
 *                                        AVIF primary; JPEG fallback at ericka-dorsey.jpg (quality 90).
 *
 * Gradient overlay treatment used on all scenic photos (adjust per-image opacity if needed):
 *   linear-gradient(to bottom, rgba(27,42,74,0.78) 0%, rgba(27,42,74,0.42) 45%, rgba(27,42,74,0.92) 100%)
 */

/**
 * Prepend the GitHub Pages basePath to a public asset path.
 * When NEXT_PUBLIC_IS_STATIC_EXPORT="true" (baked in at build time),
 * returns "/Federal-EEO-Web/images/..."; otherwise returns the path unchanged.
 *
 * Use this for <picture> elements, CSS url(), og:image strings, or any
 * context where next/image's custom loader is NOT applied automatically.
 */
export function getImagePath(src: string): string {
  const base =
    process.env.NEXT_PUBLIC_IS_STATIC_EXPORT === "true"
      ? "/Federal-EEO-Web"
      : "";
  return `${base}${src}`;
}

export const images = {
  heroBackground: {
    src:     "/images/washington-overlook.jpg",
    alt:     "Panoramic view of the Washington DC cityscape and National Mall at dusk, seen from an elevated overlook",
    blurKey: "washingtonOverlook" as const,
  },
  aboutHero: {
    src:     "/images/lincoln-memorial.jpg",
    alt:     "Lincoln Memorial colonnade and marble steps, Washington DC",
    blurKey: "lincolnMemorial" as const,
  },
  servicesBackground: {
    src:     "/images/washington-bridge.jpg",
    alt:     "Washington DC bridge spanning the Potomac River, reflecting federal architecture",
    blurKey: "washingtonBridge" as const,
  },
  missionBackground: {
    src:     "/images/washington-bridge.jpg",
    alt:     "",
    blurKey: "washingtonBridge" as const,
  },
  contactSidebar: {
    src:     "/images/washington-monument.jpg",
    alt:     "Washington Monument obelisk rising against the open sky, Washington DC",
    blurKey: "washingtonMonument" as const,
  },
  erickaHeadshot: {
    src:      "/images/ericka-dorsey.avif",
    fallback: "/images/ericka-dorsey.jpg",
    alt:      "Ericka Guthrie Dorsey, Esq., Founder and Principal Consultant of Federal EEO, LLC",
    width:    634,
    height:   792,
    blurKey:  "erickaHeadshot" as const,
  },
} as const;
