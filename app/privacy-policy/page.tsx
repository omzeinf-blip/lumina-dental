import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/layout/page-hero";
import { LegalContent, type LegalSection } from "@/components/sections/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Lumina Dental collects, uses, and protects your personal and health information.",
  robots: { index: true, follow: true },
};

const SECTIONS: LegalSection[] = [
  {
    heading: "1. Information We Collect",
    body: [
      "We collect information you provide directly, including your name, contact details, appointment preferences, and health history relevant to your care.",
      "We also collect limited technical information — such as browser type and pages visited — to help us improve this website.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    body: [
      "Your information is used to schedule and confirm appointments, communicate about your treatment, process payments, and respond to inquiries.",
      "We do not sell your personal or health information to third parties.",
    ],
  },
  {
    heading: "3. Protected Health Information",
    body: [
      "As a dental care provider, we maintain safeguards consistent with applicable health privacy regulations for any protected health information collected as part of your care.",
    ],
  },
  {
    heading: "4. Sharing of Information",
    body: [
      "We may share information with trusted service providers who support scheduling, billing, or clinical operations, under agreements that require them to protect your data.",
      "We may disclose information where required by law or to protect the safety of patients or staff.",
    ],
  },
  {
    heading: "5. Your Choices",
    body: [
      "You may request access to, correction of, or deletion of your personal information, subject to our recordkeeping obligations as a healthcare provider.",
      "You may opt out of non-essential marketing communications at any time.",
    ],
  },
  {
    heading: "6. Data Security",
    body: [
      "We maintain administrative, technical, and physical safeguards designed to protect your information from unauthorized access, disclosure, or misuse.",
    ],
  },
  {
    heading: "7. Contact Us",
    body: [
      "Questions about this policy can be directed to privacy@luminadental.com or by mail to 764 Fifth Avenue, Suite 1200, New York, NY 10019.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Legal"
        breadcrumb="Privacy Policy"
        title="Privacy Policy"
        description="We take the privacy of your personal and health information seriously. Here's how we collect, use, and protect it."
      />
      <LegalContent updated="June 1, 2026" sections={SECTIONS} />
    </SiteShell>
  );
}
