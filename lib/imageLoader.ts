import type { ImageLoaderProps } from "next/image";

/**
 * Custom image loader for the GitHub Pages static export.
 * Configured via `images.loaderFile` in next.config.mjs when GITHUB_PAGES=1.
 *
 * GitHub Pages serves this site from the /Federal-EEO-Web subpath. Next.js
 * assetPrefix handles _next/ assets but does NOT prepend basePath to <Image>
 * src values when unoptimized. This loader ensures every image URL resolves
 * to https://kirans0615.github.io/Federal-EEO-Web/images/... instead of
 * the bare https://kirans0615.github.io/images/... (which 404s).
 */
export default function githubPagesImageLoader({ src }: ImageLoaderProps): string {
  return `/Federal-EEO-Web${src}`;
}
