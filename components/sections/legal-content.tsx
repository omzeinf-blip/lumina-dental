"use client";

import { motion } from "framer-motion";

export type LegalSection = { heading: string; body: string[] };

export function LegalContent({
  updated,
  sections,
}: {
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <section className="section-padding bg-porcelain dark:bg-ink">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted dark:text-white/40">
            Last updated: {updated}
          </p>

          <div className="mt-10 space-y-12">
            {sections.map((s, i) => (
              <motion.div
                key={s.heading}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.3), ease: [0.16, 1, 0.3, 1] }}
                className="hairline pt-8 first:border-t-0 first:pt-0"
              >
                <h2 className="font-display text-xl text-ink dark:text-porcelain">{s.heading}</h2>
                <div className="mt-4 space-y-4">
                  {s.body.map((p, j) => (
                    <p key={j} className="text-sm leading-relaxed text-ink-muted dark:text-white/60">
                      {p}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
