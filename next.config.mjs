const isGitHubPages = process.env.GITHUB_PAGES === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages; omitted for Vercel (full server mode)
  ...(isGitHubPages && {
    output: "export",
    trailingSlash: true,
    basePath: "/Federal-EEO-Web",
    assetPrefix: "/Federal-EEO-Web",
  }),

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 1080, 1920, 2560],
    imageSizes: [320, 480, 640, 768],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    // next/image optimization requires a server; must be disabled for static export
    ...(isGitHubPages && { unoptimized: true }),
  },

  // Bake the deployment context into client bundles at build time
  env: {
    NEXT_PUBLIC_IS_STATIC_EXPORT: isGitHubPages ? "true" : "false",
  },
};

export default nextConfig;
