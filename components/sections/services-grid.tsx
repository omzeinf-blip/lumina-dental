"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TREATMENTS } from "@/lib/data";

export function ServicesGrid() {
  return (
    <section className="section-padding bg-porcelain dark:bg-ink">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={t.slug === "restorative-care" ? "/services" : `/${t.slug}`}
                className="group flex h-full flex-col justify-between rounded-xl border border-line bg-card p-8 shadow-subtle transition-all duration-300 hover:-translate-y-1 hover:shadow-card dark:border-white/10"
              >
                <div>
                  <t.icon className="h-7 w-7 text-primary dark:text-accent" strokeWidth={1.5} />
                  <h3 className="mt-6 font-display text-xl text-ink dark:text-porcelain">{t.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted dark:text-white/55">{t.short}</p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-line pt-5 dark:border-white/10">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary dark:text-accent">{t.price}</p>
                    <p className="mt-1 text-xs text-ink-muted dark:text-white/45">{t.duration}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-ink-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary dark:text-white/40 dark:group-hover:text-accent" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
