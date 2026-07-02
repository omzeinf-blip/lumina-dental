"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { DOCTORS } from "@/lib/data";

export function DoctorsGrid() {
  return (
    <section className="section-padding bg-porcelain dark:bg-ink">
      <div className="container grid gap-10 sm:grid-cols-2">
        {DOCTORS.map((d, i) => (
          <motion.div
            key={d.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-xl border border-line bg-card shadow-subtle dark:border-white/10"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-ink">
              <div className="absolute inset-0 flex items-center justify-center font-display text-6xl italic text-primary-500/40 dark:text-accent/20">
                {d.name.split(" ").map((n) => n[0]).join("")}
              </div>
            </div>
            <div className="p-7">
              <h3 className="font-display text-xl text-ink dark:text-porcelain">{d.name}</h3>
              <p className="mt-1 text-sm text-primary dark:text-accent">{d.role}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-ink-muted dark:text-white/50">
                <GraduationCap className="h-4 w-4" /> {d.education}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted dark:text-white/60">{d.bio}</p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted dark:text-white/40">
                {d.years}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
