"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SmileArc } from "@/components/ui/smile-arc";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-40 sm:pb-24 sm:pt-48">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(15,118,110,0.32),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(212,175,55,0.1),_transparent_50%)]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-noise" aria-hidden />

      <div className="container relative z-10">
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-white/45"
        >
          <Link href="/" className="hover:text-accent">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white/70">{breadcrumb}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow mt-8 inline-flex text-accent">
            <span className="h-px w-8 bg-accent/60" /> {eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-3xl text-display-lg text-porcelain text-balance"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <SmileArc className="mt-6" width={90} />
        </motion.div>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-porcelain/70"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
