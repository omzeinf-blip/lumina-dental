"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TREATMENTS } from "@/lib/data";

export function PricingTable() {
  return (
    <section className="section-padding bg-porcelain dark:bg-ink">
      <div className="container">
        <div className="overflow-hidden rounded-xl border border-line dark:border-white/10">
          <div className="hidden grid-cols-[2fr_1fr_1fr_auto] gap-4 bg-mist px-8 py-4 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted dark:bg-white/5 dark:text-white/50 sm:grid">
            <span>Treatment</span>
            <span>Starting At</span>
            <span>Timeline</span>
            <span />
          </div>
          <div className="divide-y divide-line dark:divide-white/10">
            {TREATMENTS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="grid grid-cols-1 gap-3 bg-card px-8 py-6 sm:grid-cols-[2fr_1fr_1fr_auto] sm:items-center sm:gap-4"
              >
                <div className="flex items-center gap-3">
                  <t.icon className="h-5 w-5 text-primary dark:text-accent" strokeWidth={1.5} />
                  <span className="font-display text-lg text-ink dark:text-porcelain">{t.name}</span>
                </div>
                <span className="text-sm text-ink-muted dark:text-white/60">{t.price}</span>
                <span className="text-sm text-ink-muted dark:text-white/60">{t.duration}</span>
                <Button variant="outline" size="sm" asChild>
                  <Link href={t.slug === "restorative-care" ? "/services" : `/${t.slug}`}>
                    Learn More
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
        <p className="mt-6 text-xs text-ink-muted dark:text-white/40">
          Pricing reflects typical starting cost per treatment and may vary
          based on your individual assessment. Final quotes are confirmed in
          writing after consultation.
        </p>
      </div>
    </section>
  );
}
