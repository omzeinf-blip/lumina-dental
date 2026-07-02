import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/layout/page-hero";
import { BookingForm } from "@/components/sections/booking-form";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Reserve your private consultation at Lumina Dental. Choose your treatment, preferred date and time, and tell us how we can help.",
  openGraph: {
    title: "Book Your Consultation | Lumina Dental",
    description: "Reserve your private consultation — choose your treatment, date, and time.",
  },
};

export default function BookAppointmentPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Reserve Your Visit"
        breadcrumb="Book Appointment"
        title="Book your private consultation."
        description="Tell us a little about what you're looking for and preferred timing — our concierge team will confirm your appointment within one business day."
      />
      <BookingForm />
    </SiteShell>
  );
}
