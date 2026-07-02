import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/layout/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { FaqPreview } from "@/components/sections/faq-preview";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Lumina Dental's full range of cosmetic and restorative treatments — veneers, Invisalign, whitening, implants, and full smile makeovers.",
  openGraph: {
    title: "Cosmetic Dentistry Services | Lumina Dental",
    description:
      "Veneers, Invisalign, whitening, implants, and full smile makeovers — explore Lumina Dental's complete range of treatments.",
  },
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Craft"
        breadcrumb="Services"
        title="Every treatment, precisely considered."
        description="From a single restoration to a complete smile redesign, each treatment follows the same standard of digital planning and hand-finished ceramics."
      />
      <ServicesGrid />
      <FaqPreview />
      <FinalCta />
    </SiteShell>
  );
}
