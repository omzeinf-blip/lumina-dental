"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "The level of precision was unlike anything I'd experienced. My veneers look like they simply grew there.",
    name: "Isabelle R.",
    detail: "Full Smile Design",
  },
  {
    quote:
      "From the digital preview to the final result, every detail matched exactly what was promised.",
    name: "Marcus T.",
    detail: "Porcelain Veneers",
  },
  {
    quote:
      "It felt more like a private atelier fitting than a dental visit. Genuinely luxury care.",
    name: "Sophia L.",
    detail: "Whitening & Contouring",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-porcelain dark:bg-ink">
      <div className="container">
        <p className="eyebrow text-center">Patient Voices</p>
        <h2 className="mt-4 text-center text-display-md text-balance">
          Trusted by discerning smiles.
        </h2>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between rounded-xl border border-line bg-card p-8 shadow-subtle dark:border-white/10"
            >
              <div>
                <Quote className="h-6 w-6 text-accent" strokeWidth={1.5} />
                <p className="mt-5 font-display text-lg italic leading-relaxed text-ink dark:text-porcelain">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-line pt-5 dark:border-white/10">
                <div>
                  <p className="text-sm font-medium text-ink dark:text-porcelain">{t.name}</p>
                  <p className="text-xs text-ink-muted dark:text-white/50">{t.detail}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
