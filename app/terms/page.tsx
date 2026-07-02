import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/layout/page-hero";
import { LegalContent, type LegalSection } from "@/components/sections/legal-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions governing your use of Lumina Dental's website and services.",
  robots: { index: true, follow: true },
};

const SECTIONS: LegalSection[] = [
  {
    heading: "1. Acceptance of Terms",
    body: [
      "By accessing or using this website, or by booking an appointment with Lumina Dental, you agree to be bound by these Terms of Service and our Privacy Policy.",
    ],
  },
  {
    heading: "2. Use of This Website",
    body: [
      "This website is provided for informational purposes and to facilitate appointment requests. Content on this site does not constitute clinical advice and is not a substitute for an in-person consultation.",
      "You agree not to misuse this website, including attempting to access it by means other than the interface we provide.",
    ],
  },
  {
    heading: "3. Appointments & Cancellations",
    body: [
      "Appointment requests submitted through this website are confirmed by our care team and are not guaranteed until confirmed.",
      "We request at least 48 hours' notice for cancellations or rescheduling. Late cancellations or missed appointments may be subject to a fee, communicated at the time of booking.",
    ],
  },
  {
    heading: "4. Fees & Payment",
    body: [
      "Treatment fees are provided during consultation and may vary based on individual diagnosis. Published pricing on this website is indicative and subject to change.",
      "Payment terms, including any financing arrangements, will be documented separately prior to treatment.",
    ],
  },
  {
    heading: "5. Intellectual Property",
    body: [
      "All content on this website, including text, imagery, and design, is the property of Lumina Dental and may not be reproduced without written consent.",
    ],
  },
  {
    heading: "6. Limitation of Liability",
    body: [
      "While we strive for accuracy, Lumina Dental makes no warranties regarding the completeness of information on this website and is not liable for decisions made solely on that basis.",
    ],
  },
  {
    heading: "7. Governing Law",
    body: [
      "These terms are governed by the laws of the State of New York, without regard to conflict-of-law principles.",
    ],
  },
  {
    heading: "8. Contact",
    body: [
      "Questions about these terms can be directed to hello@luminadental.com or by mail to 764 Fifth Avenue, Suite 1200, New York, NY 10019.",
    ],
  },
];

export default function TermsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Legal"
        breadcrumb="Terms of Service"
        title="Terms of Service"
        description="The terms and conditions that govern your use of our website and care."
      />
      <LegalContent updated="June 1, 2026" sections={SECTIONS} />
    </SiteShell>
  );
}
