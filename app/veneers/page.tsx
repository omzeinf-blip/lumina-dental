import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { JsonLd, medicalProcedureSchema, breadcrumbSchema } from "@/components/seo/json-ld";
import { PageHero } from "@/components/layout/page-hero";
import { TreatmentOverview, TreatmentProcess, TreatmentBenefits } from "@/components/sections/treatment-detail";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Porcelain Veneers",
  description:
    "Hand-layered porcelain veneers, sculpted to your facial geometry and shade-matched for a natural, luminous finish.",
  openGraph: {
    title: "Porcelain Veneers | Lumina Dental",
    description: "Hand-layered porcelain veneers, sculpted to your facial geometry for a natural, luminous finish.",
  },
};

const STEPS = [
  { title: "Digital Consultation", desc: "3D scan and shade mapping to design your ideal smile." },
  { title: "Smile Preview", desc: "See a simulation of your finished result before any prep." },
  { title: "Precision Fitting", desc: "Minimal-prep veneers fitted with sub-millimeter accuracy." },
  { title: "Final Polish", desc: "Bonded, finished, and reviewed for bite and light behavior." },
];

const BENEFITS = [
  "Natural, tooth-like translucency that reflects light like enamel",
  "Custom shade-matched to surrounding teeth or a brighter target shade",
  "Minimal enamel preparation with our conservative-prep technique",
  "Stain-resistant porcelain designed to hold color for over a decade",
  "Hand-finished in our in-house ceramics lab, not outsourced",
];

export default function VeneersPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalProcedureSchema({ name: "Porcelain Veneers", description: "Hand-layered porcelain veneers, sculpted to your facial geometry and shade-matched for a natural, luminous finish.", path: "/veneers" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Porcelain Veneers", path: "/veneers" },
          ]),
        ]}
      />
      <SiteShell>
        <PageHero
          eyebrow="Signature Treatment"
          breadcrumb="Veneers"
          title="Porcelain veneers, hand-layered to your smile."
          description="Every veneer is designed digitally, then finished by hand in our in-house ceramics lab for a result indistinguishable from natural enamel."
        />
        <TreatmentOverview
          overview="Porcelain veneers are wafer-thin shells bonded to the front surface of your teeth, engineered to correct shape, shade, and alignment in a single, minimally invasive treatment. At Lumina, each veneer begins as a full digital simulation of your finished smile, refined with you before a single tooth is touched, then hand-layered by our ceramists for depth and translucency no milling machine can replicate."
          price="From $1,450 per tooth"
          duration="2–3 visits over 3 weeks"
        />
        <TreatmentProcess steps={STEPS} />
        <TreatmentBenefits benefits={BENEFITS} />
        <Testimonials />
        <FinalCta />
      </SiteShell>
    </>
  );
}
