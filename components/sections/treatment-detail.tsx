"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TreatmentOverview({
  overview,
  price,
  duration,
}: {
  overview: string;
  price: string;
  duration: string;
}) {
  return (
    <section className="section-padding bg-porcelain dark:bg-ink">
      <div className="container grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-lg leading-relaxed text-ink-muted dark:text-white/65"
        >
          {overview}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl border border-line bg-card p-7 shadow-subtle dark:border-white/10"
        >
          <p className="eyebrow">Investment</p>
          <p className="mt-3 font-display text-3xl text-ink dark:text-porcelain">{price}</p>
          <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm text-ink-muted dark:border-white/10 dark:text-white/55">
            <span>Typical timeline</span>
            <span className="font-medium text-ink dark:text-porcelain">{duration}</span>
          </div>
          <Button variant="gold" size="lg" className="mt-6 w-full" asChild>
            <Link href="/book-appointment">Book a Consultation</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export function TreatmentProcess({
  steps,
}: {
  steps: { title: string; desc: string }[];
}) {
  return (
    <section className="section-padding bg-mist dark:bg-white/[0.02]">
      <div className="container">
        <p className="eyebrow">The Process</p>
        <h2 className="mt-4 max-w-xl text-display-md text-balance">How it comes together.</h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="border-l border-primary/30 pl-6 dark:border-accent/30"
            >
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-primary dark:text-accent">
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg text-ink dark:text-porcelain">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted dark:text-white/55">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TreatmentBenefits({ benefits }: { benefits: string[] }) {
  return (
    <section className="section-padding bg-porcelain dark:bg-ink">
      <div className="container grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="eyebrow">Why This Treatment</p>
          <h2 className="mt-4 text-display-md text-balance">What you can expect.</h2>
        </div>
        <ul className="grid gap-4">
          {benefits.map((b, i) => (
            <motion.li
              key={b}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-3 text-sm text-ink-muted dark:text-white/60"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary dark:text-accent" />
              {b}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
