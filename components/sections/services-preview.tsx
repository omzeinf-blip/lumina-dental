"use client";

import { ArrowUpRight, Gem, Sparkles, Smile, Wand2 } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: Gem,
    title: "Porcelain Veneers",
    desc: "Hand-layered ceramic veneers sculpted to your facial geometry, for a natural, luminous finish.",
    href: "/veneers",
  },
  {
    icon: Sparkles,
    title: "Precision Whitening",
    desc: "Medical-grade whitening calibrated to your enamel, delivering brightness without sensitivity.",
    href: "/teeth-whitening",
  },
  {
    icon: Smile,
    title: "Full Smile Design",
    desc: "A complete digital blueprint of your smile, previewed in 3D before a single tooth is touched.",
    href: "/smile-makeover",
  },
  {
    icon: Wand2,
    title: "Invisible Orthodontics",
    desc: "Discreet clear aligners engineered with the same precision as our restorative work.",
    href: "/invisalign",
  },
];

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function ServicesPreview() {
  return (
    <section id="services" className="section-padding bg-porcelain dark:bg-ink">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our Craft"
            title="Services designed around your smile's finest details."
            className="max-w-xl"
          />
        </div>

        <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line dark:border-white/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <motion.a
              key={s.title}
              href={s.href}
              variants={item}
              className="group relative flex flex-col justify-between gap-10 bg-card p-8 transition-colors duration-300 hover:bg-primary/5 focus-visible:bg-primary/5 dark:hover:bg-accent/5"
            >
              <div>
                <s.icon className="h-7 w-7 text-primary dark:text-accent" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-6 font-display text-xl text-ink dark:text-porcelain">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted dark:text-white/55">
                  {s.desc}
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-ink-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary dark:text-white/40 dark:group-hover:text-accent" aria-hidden />
              <span className="sr-only">Learn more about {s.title}</span>
            </motion.a>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
