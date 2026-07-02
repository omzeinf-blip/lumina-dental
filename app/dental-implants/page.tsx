import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { JsonLd, medicalProcedureSchema, breadcrumbSchema } from "@/components/seo/json-ld";
import { PageHero } from "@/components/layout/page-hero";
import { TreatmentOverview, TreatmentProcess, TreatmentBenefits } from "@/components/sections/treatment-detail";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Dental Implants",
  description:
    "Titanium-ceramic dental implants restored to look, feel, and function like natural teeth, planned with full 3D imaging.",
  openGraph: {
    title: "Dental Implants | Lumina Dental",
    description: "Titanium-ceramic implants restored to look and feel entirely natural.",
  },
};

const STEPS = [
  { title: "3D Imaging & Planning", desc: "CBCT scan to map bone density and precise implant position." },
  { title: "Implant Placement", desc: "Titanium post placed with guided precision under local anesthesia." },
  { title: "Osseointegration", desc: "A healing period allowing the implant to fuse with bone." },
  { title: "Custom Crown", desc: "A hand-finished ceramic crown restores natural form and function." },
];

const BENEFITS = [
  "Functions and feels like a natural tooth, with full biting strength",
  "Prevents the bone loss that follows missing teeth",
  "Ceramic crowns shade-matched to surrounding teeth",
  "Guided placement for exceptional long-term stability",
  "Backed by our extended restorative assurance program",
];

export default function ImplantsPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalProcedureSchema({ name: "Dental Implants", description: "Titanium-ceramic dental implants restored to look, feel, and function like natural teeth, planned with full 3D imaging.", path: "/dental-implants" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Dental Implants", path: "/dental-implants" },
          ]),
        ]}
      />
      <SiteShell>
        <PageHero
          eyebrow="Restorative Precision"
          breadcrumb="Dental Implants"
          title="Implants restored to feel entirely your own."
          description="From 3D-guided placement to a hand-finished ceramic crown, every implant is planned to restore full function and a completely natural appearance."
        />
        <TreatmentOverview
          overview="A dental implant replaces both the root and crown of a missing tooth. Using CBCT imaging, we map your bone density and plan the exact implant position before any procedure begins, then restore it with a hand-finished ceramic crown matched precisely to your surrounding teeth — for a result that looks, and functions, like it was never missing."
          price="From $3,800 per implant"
          duration="3–6 months, including healing"
        />
        <TreatmentProcess steps={STEPS} />
        <TreatmentBenefits benefits={BENEFITS} />
        <Testimonials />
        <FinalCta />
      </SiteShell>
    </>
  );
}
