import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/layout/page-hero";
import { AboutStory } from "@/components/sections/about-story";
import { AboutValues } from "@/components/sections/about-values";
import { AboutTimeline } from "@/components/sections/about-timeline";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story, values, and craftsmanship behind Lumina Dental — a concierge cosmetic dentistry studio built around precision and care.",
  openGraph: {
    title: "About Lumina Dental",
    description:
      "The story, values, and craftsmanship behind Lumina Dental's concierge cosmetic dentistry studio.",
  },
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Story"
        breadcrumb="About"
        title="Cosmetic dentistry, treated as a craft."
        description="Founded in 2008, Lumina Dental was built on a simple conviction: a smile deserves the same precision as fine jewelry or bespoke tailoring."
      />
      <AboutStory />
      <AboutValues />
      <AboutTimeline />
      <FinalCta />
    </SiteShell>
  );
}
