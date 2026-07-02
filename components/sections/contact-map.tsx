"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function ContactMap() {
  return (
    <section className="relative h-[420px] w-full overflow-hidden bg-mist dark:bg-white/[0.03]">
      {/* Google Maps embed placeholder — replace src with a real Maps embed URL */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,20,20,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(11,20,20,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 rounded-xl border border-line bg-card px-8 py-6 text-center shadow-elevated dark:border-white/10"
        role="img"
        aria-label="Map showing Lumina Dental's location at 764 Fifth Avenue, New York"
      >
        <MapPin className="h-7 w-7 text-primary dark:text-accent" />
        <p className="font-display text-lg text-ink dark:text-porcelain">Lumina Dental</p>
        <p className="text-sm text-ink-muted dark:text-white/55">764 Fifth Avenue, Suite 1200, New York, NY</p>
        <a
          href="https://maps.google.com/?q=764+Fifth+Avenue+New+York"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 text-xs font-medium text-primary underline-offset-4 hover:underline dark:text-accent"
        >
          Open in Google Maps
        </a>
      </motion.div>
    </section>
  );
}
