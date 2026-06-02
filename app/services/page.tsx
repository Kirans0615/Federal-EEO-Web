import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Federal EEO, LLC offers consultation, training, and representation for federal employees — strategic guidance, EEO process training, and full hearing advocacy.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
