import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { JsonLd, medicalProcedureSchema, breadcrumbSchema } from "@/components/seo/json-ld";
import { PageHero } from "@/components/layout/page-hero";
import { TreatmentOverview, TreatmentProcess, TreatmentBenefits } from "@/components/sections/treatment-detail";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Invisalign",
  description:
    "Discreet clear aligners engineered with the same precision as Lumina Dental's restorative work — for adults who want alignment without braces.",
  openGraph: {
    title: "Invisalign | Lumina Dental",
    description: "Discreet clear aligners, engineered with restorative-level precision.",
  },
};

const STEPS = [
  { title: "3D Bite Mapping", desc: "A full digital scan plots your entire treatment in advance." },
  { title: "Custom Aligner Set", desc: "A sequence of clear aligners manufactured to your plan." },
  { title: "Progress Reviews", desc: "Brief in-studio checks every 6–8 weeks to track movement." },
  { title: "Retention", desc: "Custom retainers to hold your result for the long term." },
];

const BENEFITS = [
  "Virtually invisible — most people won't notice you're in treatment",
  "Removable for eating, brushing, and special occasions",
  "Full digital preview of your projected result before you commit",
  "No metal brackets or wires; smoother on cheeks and gums",
  "Typically faster than traditional braces for cosmetic-only movement",
];

export default function InvisalignPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalProcedureSchema({ name: "Invisalign", description: "Discreet clear aligners engineered with the same precision as Lumina Dental's restorative work — for adults who want alignment without braces.", path: "/invisalign" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Invisalign", path: "/invisalign" },
          ]),
        ]}
      />
      <SiteShell>
        <PageHero
          eyebrow="Clear Alignment"
          breadcrumb="Invisalign"
          title="Invisalign, mapped with restorative precision."
          description="A discreet path to straighter teeth, planned in 3D from your very first visit and monitored by the same specialists behind our cosmetic work."
        />
        <TreatmentOverview
          overview="Invisalign uses a series of custom, removable clear aligners to gradually move your teeth into their ideal position. Because our team treats alignment as the foundation of every cosmetic case, your Invisalign plan is built using the same digital bite-mapping technology behind our veneer and implant work — so the result you preview is the result you get."
          price="From $4,200"
          duration="6–18 months"
        />
        <TreatmentProcess steps={STEPS} />
        <TreatmentBenefits benefits={BENEFITS} />
        <Testimonials />
        <FinalCta />
      </SiteShell>
    </>
  );
}
