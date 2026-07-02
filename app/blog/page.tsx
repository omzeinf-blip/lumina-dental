import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/layout/page-hero";
import { BlogGrid } from "@/components/sections/blog-grid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on cosmetic dentistry, veneers, whitening, and smile care from the specialists at Lumina Dental.",
  openGraph: {
    title: "Blog | Lumina Dental",
    description: "Insights on cosmetic dentistry, veneers, whitening, and smile care.",
  },
};

export default function BlogPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Journal"
        breadcrumb="Blog"
        title="Notes on the craft of a great smile."
        description="Perspectives from our specialists on cosmetic dentistry, treatment planning, and long-term smile care."
      />
      <BlogGrid />
    </SiteShell>
  );
}
