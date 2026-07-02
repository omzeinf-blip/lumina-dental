import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { JsonLd, medicalProcedureSchema, breadcrumbSchema } from "@/components/seo/json-ld";
import { PageHero } from "@/components/layout/page-hero";
import { TreatmentOverview, TreatmentProcess, TreatmentBenefits } from "@/components/sections/treatment-detail";
import { SmileGallery } from "@/components/sections/smile-gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Smile Makeover",
  description:
    "A complete, personalized redesign of your smile — combining veneers, whitening, and alignment into one cohesive digital plan.",
  openGraph: {
    title: "Smile Makeover | Lumina Dental",
    description: "A complete, personalized redesign of your smile, planned entirely in 3D before treatment begins.",
  },
};

const STEPS = [
  { title: "Full Smile Assessment", desc: "Facial analysis, 3D scans, and a conversation about your goals." },
  { title: "Digital Smile Design", desc: "A composite plan combining whitening, veneers, and alignment as needed." },
  { title: "Staged Treatment", desc: "Treatments sequenced for comfort, healing, and long-term stability." },
  { title: "Final Reveal", desc: "A finished result reviewed against your original digital preview." },
];

const BENEFITS = [
  "One cohesive plan instead of piecemeal treatments",
  "A full 3D preview of your finished smile before you commit",
  "Sequenced treatment timeline built around your schedule",
  "A single dedicated coordinator managing your entire journey",
  "Results designed to complement your facial proportions, not a generic template",
];

export default function SmileMakeoverPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalProcedureSchema({ name: "Smile Makeover", description: "A complete, personalized redesign of your smile — combining veneers, whitening, and alignment into one cohesive digital plan.", path: "/smile-makeover" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Smile Makeover", path: "/smile-makeover" },
          ]),
        ]}
      />
      <SiteShell>
        <PageHero
          eyebrow="The Complete Transformation"
          breadcrumb="Smile Makeover"
          title="A full smile redesign, planned as one vision."
          description="Veneers, whitening, and alignment — combined into a single, cohesive plan designed around your face, not a generic template."
        />
        <TreatmentOverview
          overview="A smile makeover isn't one procedure — it's a coordinated plan combining whatever combination of veneers, whitening, contouring, and alignment your smile calls for. We begin with a full facial and dental analysis, then build a single digital blueprint that sequences every treatment for comfort and long-term stability, so the final reveal matches exactly what you approved at the start."
          price="From $9,500"
          duration="4–8 weeks, fully sequenced"
        />
        <TreatmentProcess steps={STEPS} />
        <TreatmentBenefits benefits={BENEFITS} />
        <SmileGallery />
        <Testimonials />
        <FinalCta />
      </SiteShell>
    </>
  );
}
