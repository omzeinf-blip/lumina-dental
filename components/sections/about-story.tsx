"use client";

import { motion } from "framer-motion";

export function AboutStory() {
  return (
    <section className="section-padding bg-porcelain dark:bg-ink">
      <div className="container grid gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 via-porcelain to-accent-100 dark:from-primary-900 dark:via-ink dark:to-ink"
        />
        <div className="flex flex-col justify-center">
          <p className="eyebrow">Since 2008</p>
          <h2 className="mt-4 text-display-md text-balance">
            Eighteen years of obsessive attention to detail.
          </h2>
          <p className="mt-6 leading-relaxed text-ink-muted dark:text-white/60">
            Lumina Dental began as a single chair on Fifth Avenue and a
            conviction that cosmetic dentistry deserved the rigor of an
            atelier. Today, our team of specialists treats every case as a
            singular commission — mapped in 3D, designed by hand, and
            finished with the same patience a jeweler gives a setting.
          </p>
          <p className="mt-4 leading-relaxed text-ink-muted dark:text-white/60">
            We've since grown to four specialists and an in-house ceramics
            lab, but the founding standard hasn't moved: nothing leaves our
            studio until it's right.
          </p>
        </div>
      </div>
    </section>
  );
}
