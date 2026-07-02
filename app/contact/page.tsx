import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/layout/page-hero";
import { ContactDetails } from "@/components/sections/contact-details";
import { ContactForm } from "@/components/sections/contact-form";
import { ContactMap } from "@/components/sections/contact-map";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Lumina Dental — send a message, find our studio hours, or reach our emergency line for urgent care.",
  openGraph: {
    title: "Contact Lumina Dental",
    description: "Send a message, find our studio hours, or reach our emergency line.",
  },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Get In Touch"
        breadcrumb="Contact"
        title="We'd love to hear from you."
        description="Whether you're ready to book a consultation or simply have a question, our concierge team responds within one business day."
      />
      <section className="section-padding bg-porcelain dark:bg-ink">
        <div className="container grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <ContactDetails />
          <ContactForm />
        </div>
      </section>
      <ContactMap />
    </SiteShell>
  );
}
