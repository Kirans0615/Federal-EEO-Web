import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ericka Guthrie Dorsey, Esq. — 20+ years in federal EEO law. BA from University of Pennsylvania, JD from GW Law School. Expert in discrimination, retaliation, and reasonable accommodation.",
};

export default function AboutPage() {
  return <AboutContent />;
}
