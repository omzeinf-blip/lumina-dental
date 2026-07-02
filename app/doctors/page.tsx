import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/layout/page-hero";
import { DoctorsGrid } from "@/components/sections/doctors-grid";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Meet Our Doctors",
  description:
    "Meet the specialists behind Lumina Dental — cosmetic dentists, prosthodontists, and digital smile designers with decades of combined experience.",
  openGraph: {
    title: "Meet Our Doctors | Lumina Dental",
    description: "The specialists behind Lumina Dental's cosmetic and restorative work.",
  },
};

export default function DoctorsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="The Practitioners"
        breadcrumb="Meet Our Doctors"
        title="The specialists behind every smile."
        description="Four specialists, one shared standard — each bringing a distinct discipline to your care, from digital design to full restorative surgery."
      />
      <DoctorsGrid />
      <FinalCta />
    </SiteShell>
  );
}
