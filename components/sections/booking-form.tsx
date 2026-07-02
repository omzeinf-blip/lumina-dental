"use client";

import { useMemo, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, CalendarCheck, Clock, Stethoscope, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { FormField } from "@/components/ui/form-field";
import { TREATMENTS } from "@/lib/data";

type FormState = {
  name: string;
  email: string;
  phone: string;
  treatment: string;
  date: string;
  time: string;
  notes: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9()+\-.\s]{7,20}$/;

const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM",
];

function todayISO() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your full name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(values.email)) errors.email = "Please enter a valid email address.";
  if (!values.phone.trim()) errors.phone = "Please enter a phone number.";
  else if (!PHONE_RE.test(values.phone)) errors.phone = "Please enter a valid phone number.";
  if (!values.treatment) errors.treatment = "Please select a treatment.";
  if (!values.date) errors.date = "Please choose a preferred date.";
  else if (values.date < todayISO()) errors.date = "Please choose a date starting tomorrow.";
  if (!values.time) errors.time = "Please choose a preferred time.";
  return errors;
}

export function BookingForm() {
  const [values, setValues] = useState<FormState>({
    name: "", email: "", phone: "", treatment: "", date: "", time: "", notes: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const minDate = useMemo(() => todayISO(), []);

  function update<K extends keyof FormState>(key: K, val: string) {
    setValues((v) => ({ ...v, [key]: val }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0];
      document.getElementById(`booking-${firstKey}`)?.focus();
      return;
    }
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  }

  const selectedTreatment = TREATMENTS.find((t) => t.slug === values.treatment);

  if (status === "success") {
    return (
      <section className="section-padding bg-porcelain dark:bg-ink">
        <div className="container flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            role="status"
            aria-live="polite"
            className="w-full max-w-lg rounded-2xl border border-line bg-card p-12 text-center shadow-elevated dark:border-white/10"
          >
            <CheckCircle2 className="mx-auto h-12 w-12 text-primary dark:text-accent" />
            <h2 className="mt-6 font-display text-3xl text-ink dark:text-porcelain">
              Consultation requested.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted dark:text-white/60">
              We've received your request for{" "}
              <span className="text-ink dark:text-porcelain">{selectedTreatment?.name}</span> on{" "}
              <span className="text-ink dark:text-porcelain">{values.date}</span> at{" "}
              <span className="text-ink dark:text-porcelain">{values.time}</span>. Our concierge
              team will confirm by email within one business day.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-porcelain dark:bg-ink">
      <div className="container grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        {/* Summary sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="h-fit space-y-8 rounded-xl border border-line bg-card p-8 shadow-subtle dark:border-white/10 lg:sticky lg:top-28"
        >
          <div>
            <p className="eyebrow">Your Request</p>
            <h3 className="mt-3 font-display text-2xl text-ink dark:text-porcelain">
              {selectedTreatment ? selectedTreatment.name : "Select a treatment"}
            </h3>
          </div>
          <div className="space-y-4 border-t border-line pt-6 text-sm text-ink-muted dark:border-white/10 dark:text-white/60">
            <div className="flex items-center gap-3">
              <Stethoscope className="h-4 w-4 text-primary dark:text-accent" />
              {selectedTreatment ? selectedTreatment.price : "Pricing shown after selection"}
            </div>
            <div className="flex items-center gap-3">
              <CalendarCheck className="h-4 w-4 text-primary dark:text-accent" />
              {values.date || "Preferred date"}
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-primary dark:text-accent" />
              {values.time || "Preferred time"}
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-primary/5 p-4 text-xs leading-relaxed text-ink-muted dark:bg-accent/5 dark:text-white/55">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary dark:text-accent" />
            All requests are confirmed by our concierge team before scheduling — no charge until your appointment is confirmed.
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleSubmit}
          noValidate
          className="rounded-xl border border-line bg-card p-8 shadow-subtle dark:border-white/10 sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <FormField label="Full Name" htmlFor="booking-name" required error={errors.name}>
              <Input
                id="booking-name"
                autoComplete="name"
                value={values.name}
                onChange={(e) => update("name", e.target.value)}
                aria-invalid={!!errors.name}
                placeholder="Jane Doe"
              />
            </FormField>

            <FormField label="Phone" htmlFor="booking-phone" required error={errors.phone}>
              <Input
                id="booking-phone"
                type="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={(e) => update("phone", e.target.value)}
                aria-invalid={!!errors.phone}
                placeholder="+1 (212) 555-0148"
              />
            </FormField>
          </div>

          <FormField label="Email" htmlFor="booking-email" required error={errors.email} className="mt-6">
            <Input
              id="booking-email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={!!errors.email}
              placeholder="jane@example.com"
            />
          </FormField>

          <FormField label="Treatment" htmlFor="booking-treatment" required error={errors.treatment} className="mt-6">
            <Select
              id="booking-treatment"
              value={values.treatment}
              onChange={(e) => update("treatment", e.target.value)}
              aria-invalid={!!errors.treatment}
            >
              <option value="">Select a treatment</option>
              {TREATMENTS.map((t) => (
                <option key={t.slug} value={t.slug}>{t.name}</option>
              ))}
            </Select>
          </FormField>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <FormField label="Preferred Date" htmlFor="booking-date" required error={errors.date}>
              <Input
                id="booking-date"
                type="date"
                min={minDate}
                value={values.date}
                onChange={(e) => update("date", e.target.value)}
                aria-invalid={!!errors.date}
              />
            </FormField>

            <FormField label="Preferred Time" htmlFor="booking-time" required error={errors.time}>
              <Select
                id="booking-time"
                value={values.time}
                onChange={(e) => update("time", e.target.value)}
                aria-invalid={!!errors.time}
              >
                <option value="">Select a time</option>
                {TIME_SLOTS.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </Select>
            </FormField>
          </div>

          <FormField label="Notes" htmlFor="booking-notes" className="mt-6">
            <Textarea
              id="booking-notes"
              value={values.notes}
              onChange={(e) => update("notes", e.target.value)}
              placeholder="Anything you'd like us to know before your visit — concerns, past treatments, or scheduling constraints."
            />
          </FormField>

          <Button type="submit" variant="gold" size="lg" className="mt-8 w-full" disabled={status === "submitting"} aria-busy={status === "submitting"}>
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Requesting...
              </>
            ) : (
              "Request Consultation"
            )}
          </Button>
          <p className="mt-4 text-center text-xs text-ink-muted dark:text-white/40">
            By submitting, you agree to be contacted regarding your appointment request.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
