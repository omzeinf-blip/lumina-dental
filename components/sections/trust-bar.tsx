"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const PRESS = ["VOGUE", "Forbes", "The New York Times", "Harper's Bazaar", "Architectural Digest", "WSJ"];

export function TrustBar() {
  return (
    <section className="relative border-b border-line bg-porcelain pt-24 dark:border-white/10 dark:bg-ink sm:pt-28">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          {/* Press marquee */}
          <div>
            <p className="eyebrow">As Featured In</p>
            <div className="relative mt-6 overflow-hidden">
              <div className="flex w-max animate-marquee gap-16">
                {[...PRESS, ...PRESS].map((name, i) => (
                  <span
                    key={i}
                    className="whitespace-nowrap font-display text-2xl italic text-ink/30 dark:text-white/25"
                  >
                    {name}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-porcelain to-transparent dark:from-ink" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-porcelain to-transparent dark:from-ink" />
            </div>
          </div>

          {/* Google Rating */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-5 rounded-xl border border-line bg-card px-6 py-5 shadow-subtle dark:border-white/10"
          >
            <svg viewBox="0 0 48 48" className="h-9 w-9 shrink-0" aria-hidden>
              <path fill="#FFC107" d="M43.6 20.5H42V20.4H24v7.2h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.1-5.1C34.6 6.1 29.6 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.2-.1-2.4-.4-3.5z" />
              <path fill="#FF3D00" d="M6.3 14.7l5.9 4.3C13.9 15.6 18.6 12.4 24 12.4c3.1 0 5.8 1.1 8 3l5.1-5.1C34.6 6.1 29.6 4 24 4c-7.4 0-13.8 4-17.7 9.7z" />
              <path fill="#4CAF50" d="M24 44c5.5 0 10.4-1.9 14.2-5.1l-6.6-5.4C29.7 35.1 27 36 24 36c-5.3 0-9.7-3.4-11.3-8.1l-6.5 5C10.2 39.9 16.6 44 24 44z" />
              <path fill="#1976D2" d="M43.6 20.5H42V20.4H24v7.2h11.3c-.8 2.3-2.2 4.3-4.1 5.7l6.6 5.4C41.4 36.4 44 30.7 44 24c0-1.2-.1-2.4-.4-3.5z" />
            </svg>
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-1 text-sm text-ink-muted dark:text-white/60">
                <span className="font-semibold text-ink dark:text-porcelain">4.9 / 5</span>{" "}
                from 1,240+ Google reviews
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
