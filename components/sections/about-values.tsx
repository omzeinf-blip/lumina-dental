"use client";

import { motion } from "framer-motion";
import { Gem, Eye, HeartHandshake, ShieldCheck } from "lucide-react";

const VALUES = [
  { icon: Eye, title: "Precision First", desc: "Every measurement, shade, and contour is verified digitally before it's finalized in ceramic." },
  { icon: Gem, title: "Artisan Standard", desc: "We hold our in-house ceramics to the standard of fine jewelry, not mass production." },
  { icon: HeartHandshake, title: "Radical Transparency", desc: "You see your projected result, timeline, and cost before committing to treatment." },
  { icon: ShieldCheck, title: "Long-Term Accountability", desc: "Our relationship continues well past your final appointment, with ongoing care reviews." },
];

export function AboutValues() {
  return (
    <section className="section-padding bg-mist dark:bg-white/[0.02]">
      <div className="container">
        <p className="eyebrow text-center">What We Stand For</p>
        <h2 className="mt-4 text-center text-display-md text-balance">Our values, in practice.</h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl border border-line bg-card p-7 shadow-subtle dark:border-white/10"
            >
              <v.icon className="h-6 w-6 text-primary dark:text-accent" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-lg text-ink dark:text-porcelain">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted dark:text-white/55">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
