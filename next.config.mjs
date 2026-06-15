const isGitHubPages = process.env.GITHUB_PAGES === "1";

/**
 * The site has no server-side features (no API routes, no middleware, no ISR),
 * so we always build as a static export. That way the same build works on
 * Netlify, GitHub Pages, or any plain static host — no @netlify/plugin-nextjs
 * runtime, no Vercel-isms, no compatibility surprises.
 *
 * GITHUB_PAGES=1 toggles the basePath and assetPrefix for the GitHub Pages
 * mirror at https://kirans0615.github.io/Federal-EEO-Web. Without it, the
 * export targets a root-served host (Netlify default).
 *
 * Images use `unoptimized: true` because Next/Image's optimizer cannot run
 * inside a static export. The repo's images are already pre-sized.
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  ...(isGitHubPages && {
    basePath: "/Federal-EEO-Web",
    assetPrefix: "/Federal-EEO-Web/",
  }),

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    ...(isGitHubPages && {
      loader: "custom",
      loaderFile: "./lib/imageLoader.ts",
    }),
  },

  env: {
    NEXT_PUBLIC_IS_STATIC_EXPORT: isGitHubPages ? "true" : "false",
  },
};

export default nextConfig;
