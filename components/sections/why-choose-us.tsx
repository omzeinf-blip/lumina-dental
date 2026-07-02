"use client";

import { ShieldCheck, HeartHandshake, Microscope, Gem } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { motion } from "framer-motion";

const POINTS = [
  {
    icon: Microscope,
    title: "Diagnostic Precision",
    desc: "Every case begins with 3D imaging and digital smile mapping — nothing is approximated.",
  },
  {
    icon: Gem,
    title: "Artisan Craftsmanship",
    desc: "Our ceramists hand-finish every veneer in-house, matched to your exact shade and light behavior.",
  },
  {
    icon: HeartHandshake,
    title: "Concierge Care",
    desc: "A dedicated coordinator manages your journey end to end, from first consult to final polish.",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Assurance",
    desc: "Our restorative work is backed by an extended guarantee and biannual care reviews.",
  },
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-porcelain dark:bg-ink">
      <div className="container grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <Reveal><p className="eyebrow">Why Lumina</p></Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 text-display-md text-balance">
              A standard of care most clinics simply don't offer.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-ink-muted dark:text-white/60 leading-relaxed">
              From the first scan to the final polish, every step is
              deliberate. We treat cosmetic dentistry as a craft — not a
              procedure.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {POINTS.map((p) => (
            <motion.div key={p.title} variants={item}>
              <p.icon className="h-6 w-6 text-primary dark:text-accent" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-4 font-display text-lg text-ink dark:text-porcelain">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted dark:text-white/55">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
