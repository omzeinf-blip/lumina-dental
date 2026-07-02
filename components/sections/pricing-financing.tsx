"use client";

import { motion } from "framer-motion";
import { CreditCard, ShieldCheck, CalendarClock } from "lucide-react";

const OPTIONS = [
  { icon: CreditCard, title: "Monthly Financing", desc: "Flexible plans starting at 0% APR for qualifying patients, arranged through our financing partners." },
  { icon: ShieldCheck, title: "Insurance Support", desc: "We accept most PPO plans for restorative and implant work and will verify your benefits in advance." },
  { icon: CalendarClock, title: "Staged Treatment", desc: "Larger smile makeovers can be sequenced across billing cycles to ease the investment." },
];

export function PricingFinancing() {
  return (
    <section className="section-padding bg-mist dark:bg-white/[0.02]">
      <div className="container">
        <p className="eyebrow">Making It Work</p>
        <h2 className="mt-4 max-w-xl text-display-md text-balance">Flexible ways to invest in your smile.</h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {OPTIONS.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <o.icon className="h-6 w-6 text-primary dark:text-accent" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-lg text-ink dark:text-porcelain">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted dark:text-white/55">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
