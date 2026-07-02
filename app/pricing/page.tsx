import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/layout/page-hero";
import { PricingTable } from "@/components/sections/pricing-table";
import { PricingFinancing } from "@/components/sections/pricing-financing";
import { FaqPreview } from "@/components/sections/faq-preview";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for Lumina Dental's cosmetic and restorative treatments, plus flexible financing options.",
  openGraph: {
    title: "Pricing | Lumina Dental",
    description: "Transparent treatment pricing and flexible financing at Lumina Dental.",
  },
};

export default function PricingPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Investment"
        breadcrumb="Pricing"
        title="Transparent pricing, no surprises."
        description="Every quote is confirmed in writing after your consultation, with financing available for larger treatment plans."
      />
      <PricingTable />
      <PricingFinancing />
      <FaqPreview />
      <FinalCta />
    </SiteShell>
  );
}
