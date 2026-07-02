"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormField } from "@/components/ui/form-field";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9()+\-.\s]{7,20}$/;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(values.email)) errors.email = "Please enter a valid email address.";
  if (values.phone && !PHONE_RE.test(values.phone)) errors.phone = "Please enter a valid phone number.";
  if (!values.message.trim()) errors.message = "Please tell us how we can help.";
  else if (values.message.trim().length < 10) errors.message = "Please add a bit more detail (10+ characters).";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function update<K extends keyof FormState>(key: K, val: string) {
    setValues((v) => ({ ...v, [key]: val }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        role="status"
        aria-live="polite"
        className="flex h-full flex-col items-center justify-center rounded-xl border border-line bg-card p-12 text-center shadow-subtle dark:border-white/10"
      >
        <CheckCircle2 className="h-10 w-10 text-primary dark:text-accent" />
        <h3 className="mt-5 font-display text-2xl text-ink dark:text-porcelain">Message sent.</h3>
        <p className="mt-2 max-w-sm text-sm text-ink-muted dark:text-white/60">
          Thank you for reaching out — our concierge team will respond within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-line bg-card p-8 shadow-subtle dark:border-white/10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Full Name" htmlFor="contact-name" required error={errors.name}>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name}
            placeholder="Jane Doe"
          />
        </FormField>

        <FormField label="Phone" htmlFor="contact-phone" error={errors.phone}>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            placeholder="+1 (212) 555-0148"
          />
        </FormField>
      </div>

      <FormField label="Email" htmlFor="contact-email" required error={errors.email} className="mt-6">
        <Input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          aria-invalid={!!errors.email}
          placeholder="jane@example.com"
        />
      </FormField>

      <FormField label="Message" htmlFor="contact-message" required error={errors.message} className="mt-6">
        <Textarea
          id="contact-message"
          name="message"
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={!!errors.message}
          placeholder="Tell us a little about what you're looking for..."
        />
      </FormField>

      <Button type="submit" variant="primary" size="lg" className="mt-8 w-full sm:w-auto" disabled={status === "submitting"} aria-busy={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </motion.form>
  );
}
