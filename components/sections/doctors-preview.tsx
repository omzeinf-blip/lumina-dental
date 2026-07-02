"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DOCTORS = [
  { name: "Dr. Eleanor Marsh", role: "Founder & Lead Cosmetic Dentist", years: "18 yrs experience" },
  { name: "Dr. Julian Cho", role: "Prosthodontics Director", years: "14 yrs experience" },
  { name: "Dr. Amara Osei", role: "Digital Smile Design Lead", years: "11 yrs experience" },
];

export function DoctorsPreview() {
  return (
    <section id="doctors" className="section-padding bg-mist dark:bg-white/[0.02]">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">The Practitioners</p>
            <h2 className="mt-4 max-w-xl text-display-md text-balance">
              Meet the specialists behind every smile.
            </h2>
          </div>
          <Button variant="outline" size="md" asChild>
            <a href="/doctors">
              View All Doctors <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group overflow-hidden rounded-xl border border-line bg-card shadow-subtle transition-shadow duration-300 hover:shadow-card dark:border-white/10"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-primary-100 to-primary-200 dark:from-primary-900 dark:to-ink">
                <div className="absolute inset-0 flex items-center justify-center font-display text-6xl italic text-primary-500/40 dark:text-accent/20">
                  {d.name.split(" ").map((n) => n[0]).join("")}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg text-ink dark:text-porcelain">{d.name}</h3>
                <p className="mt-1 text-sm text-primary dark:text-accent">{d.role}</p>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted dark:text-white/50">
                  {d.years}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
