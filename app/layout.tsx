import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CursorSpotlight } from "@/components/ui/CursorSpotlight";
import { LoadingBar } from "@/components/ui/LoadingBar";
import { Inter, Source_Serif_4 } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Federal EEO, LLC — Consultants & Advocates",
    template: "%s | Federal EEO, LLC",
  },
  description:
    "Federal EEO, LLC provides expert federal employment law consulting — discrimination, retaliation, sexual harassment, and reasonable accommodation. Don't miss your 45-day deadline.",
  metadataBase: new URL("https://kirans0615.github.io/Federal-EEO-Web"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kirans0615.github.io/Federal-EEO-Web",
    siteName: "Federal EEO, LLC",
    title: "Federal EEO, LLC — Consultants & Advocates",
    description:
      "Expert guidance for federal employees navigating the EEO complaint process. 20+ years of experience. Don't miss your 45-day deadline.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Federal EEO, LLC — Consultants & Advocates",
    description: "Expert federal EEO consulting. Don't miss your 45-day deadline.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.variable, sourceSerif.variable)}
    >
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-navy focus:text-white focus:rounded"
        >
          Skip to main content
        </a>
        <CursorSpotlight />
        <LoadingBar />
        <ScrollProgress />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
