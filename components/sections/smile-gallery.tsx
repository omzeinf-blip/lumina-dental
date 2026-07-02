"use client";

import { motion } from "framer-motion";

const CASES = [
  { title: "Full Veneer Restoration", tag: "12 Veneers" },
  { title: "Whitening + Contouring", tag: "Zoom + Reshape" },
  { title: "Digital Smile Design", tag: "Full Arch" },
  { title: "Single Tooth Restoration", tag: "Porcelain Crown" },
  { title: "Aligner Transformation", tag: "14-Month Case" },
  { title: "Complete Smile Makeover", tag: "Full Mouth" },
];

export function SmileGallery() {
  return (
    <section id="gallery" className="section-padding bg-mist dark:bg-white/[0.02]">
      <div className="container">
        <div className="max-w-xl">
          <p className="eyebrow">Transformations</p>
          <h2 className="mt-4 text-display-md text-balance">
            A gallery of results, not promises.
          </h2>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-line dark:border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-porcelain to-accent-100 transition-transform duration-700 ease-luxury group-hover:scale-105 dark:from-primary-900 dark:via-ink dark:to-ink" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                    {c.tag}
                  </p>
                  <h3 className="mt-1 font-display text-lg text-porcelain">{c.title}</h3>
                </div>
              </div>
              <div className="absolute left-4 top-4 rounded-pill bg-porcelain/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink dark:bg-ink/80 dark:text-porcelain">
                Before / After
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
