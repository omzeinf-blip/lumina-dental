import dynamic from "next/dynamic";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Statistics } from "@/components/sections/statistics";
import { ServicesPreview } from "@/components/sections/services-preview";
import { DoctorsPreview } from "@/components/sections/doctors-preview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Footer } from "@/components/sections/footer";
import { JsonLd, faqSchema } from "@/components/seo/json-ld";
import { FAQS } from "@/lib/data";
import { SectionSkeleton } from "@/components/ui/section-skeleton";

// Below-the-fold sections are code-split out of the initial bundle.
// Each still renders server-side (no `ssr: false`) so content and SEO
// are unaffected — only the client JS is deferred until it's needed.
const Technology = dynamic(() =>
  import("@/components/sections/technology").then((m) => m.Technology)
);
const SmileGallery = dynamic(() =>
  import("@/components/sections/smile-gallery").then((m) => m.SmileGallery), {
  loading: () => <SectionSkeleton />,
});
const Testimonials = dynamic(() =>
  import("@/components/sections/testimonials").then((m) => m.Testimonials), {
  loading: () => <SectionSkeleton />,
});
const FaqPreview = dynamic(() =>
  import("@/components/sections/faq-preview").then((m) => m.FaqPreview)
);
const FinalCta = dynamic(() =>
  import("@/components/sections/final-cta").then((m) => m.FinalCta)
);

export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(FAQS.slice(0, 4))} />
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <Statistics />
        <ServicesPreview />
        <DoctorsPreview />
        <WhyChooseUs />
        <Technology />
        <SmileGallery />
        <Testimonials />
        <FaqPreview />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
