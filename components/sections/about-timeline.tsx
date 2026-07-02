"use client";

import { motion } from "framer-motion";

const MILESTONES = [
  { year: "2008", title: "Founded on Fifth Avenue", desc: "Dr. Eleanor Marsh opens a single-chair cosmetic studio." },
  { year: "2013", title: "In-House Ceramics Lab", desc: "Lumina brings veneer fabrication fully in-house for total quality control." },
  { year: "2018", title: "Digital Smile Design", desc: "Full adoption of 3D scanning and simulation for every case." },
  { year: "2023", title: "12,000+ Smiles", desc: "Lumina crosses twelve thousand completed cosmetic cases." },
  { year: "2026", title: "Today", desc: "A four-doctor team, one shared standard of craft." },
];

export function AboutTimeline() {
  return (
    <section className="section-padding bg-porcelain dark:bg-ink">
      <div className="container">
        <p className="eyebrow">Milestones</p>
        <h2 className="mt-4 max-w-xl text-display-md text-balance">Eighteen years, in brief.</h2>

        <div className="mt-16 divide-y divide-line dark:divide-white/10">
          {MILESTONES.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:gap-10"
            >
              <span className="w-24 shrink-0 font-mono text-sm text-primary dark:text-accent">{m.year}</span>
              <div>
                <h3 className="font-display text-lg text-ink dark:text-porcelain">{m.title}</h3>
                <p className="mt-1 text-sm text-ink-muted dark:text-white/55">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
