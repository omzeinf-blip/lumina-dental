import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { JsonLd, medicalProcedureSchema, breadcrumbSchema } from "@/components/seo/json-ld";
import { PageHero } from "@/components/layout/page-hero";
import { TreatmentOverview, TreatmentProcess, TreatmentBenefits } from "@/components/sections/treatment-detail";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Teeth Whitening",
  description:
    "Medical-grade professional teeth whitening calibrated to your enamel — brighter results without the sensitivity of over-the-counter kits.",
  openGraph: {
    title: "Teeth Whitening | Lumina Dental",
    description: "Medical-grade whitening calibrated to your enamel for brightness without sensitivity.",
  },
};

const STEPS = [
  { title: "Shade Assessment", desc: "We map your baseline shade and enamel sensitivity." },
  { title: "Custom Concentration", desc: "Whitening gel calibrated to your enamel's tolerance." },
  { title: "In-Studio Session", desc: "A single 60–90 minute in-chair whitening session." },
  { title: "Take-Home Maintenance", desc: "Custom trays to maintain results between visits." },
];

const BENEFITS = [
  "Up to 8 shades brighter in a single session",
  "Calibrated concentration to minimize sensitivity",
  "Custom-fitted trays for safe, even take-home maintenance",
  "Results typically last 12–24 months with proper care",
  "Safe for patients with existing veneers or crowns when planned in advance",
];

export default function WhiteningPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalProcedureSchema({ name: "Teeth Whitening", description: "Medical-grade professional teeth whitening calibrated to your enamel — brighter results without the sensitivity of over-the-counter kits.", path: "/teeth-whitening" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Teeth Whitening", path: "/teeth-whitening" },
          ]),
        ]}
      />
      <SiteShell>
        <PageHero
          eyebrow="Instant Brightness"
          breadcrumb="Teeth Whitening"
          title="Precision whitening, calibrated to your enamel."
          description="Our medical-grade whitening protocol is calibrated per patient — brighter results without the sensitivity that comes with generic, one-size-fits-all kits."
        />
        <TreatmentOverview
          overview="Unlike over-the-counter kits, our whitening protocol starts with a full assessment of your enamel's natural translucency and sensitivity threshold. The whitening concentration is calibrated specifically for you, applied in a single in-studio session, and supported by custom take-home trays so your result holds well beyond your visit."
          price="From $650"
          duration="Single 90-minute visit"
        />
        <TreatmentProcess steps={STEPS} />
        <TreatmentBenefits benefits={BENEFITS} />
        <Testimonials />
        <FinalCta />
      </SiteShell>
    </>
  );
}
