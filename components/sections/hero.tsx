"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmileArc } from "@/components/ui/smile-arc";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink pb-28 pt-40 sm:pb-36 lg:pb-44">
      {/* Ambient background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(15,118,110,0.35),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(212,175,55,0.12),_transparent_50%)]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-noise" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250,250,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,248,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />

      <div className="container relative z-10">
        <div className="max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="eyebrow text-accent">
              <span className="h-px w-8 bg-accent/60" /> Est. Concierge Cosmetic Dentistry
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-8 text-display-xl text-porcelain text-balance"
          >
            Luxury cosmetic
            <br />
            dentistry for your
            <br />
            <span className="italic text-accent">perfect smile.</span>
          </motion.h1>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={2}>
            <SmileArc className="mt-8" width={110} />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 max-w-xl text-lg leading-relaxed text-porcelain/70"
          >
            Bespoke veneers, precision whitening, and full smile design —
            crafted chairside by a team obsessed with the finest detail of
            every curve, contour, and shade.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-11 flex flex-wrap items-center gap-4"
          >
            <Button variant="gold" size="lg" asChild>
              <a href="/book-appointment">
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white/25 text-porcelain hover:border-accent hover:text-accent" asChild>
              <a href="/#gallery">View Smile Gallery</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating Appointment Card */}
      <motion.div
        id="appointment"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-16 right-6 z-20 hidden w-[22rem] rounded-2xl border border-white/10 bg-porcelain/95 p-7 shadow-elevated backdrop-blur-xl dark:bg-ink/90 sm:right-10 md:block lg:right-16"
      >
        <p className="eyebrow">Reserve Your Visit</p>
        <h3 className="mt-3 font-display text-2xl text-ink dark:text-porcelain">
          Private Consultation
        </h3>
        <div className="mt-5 space-y-3.5 border-t border-line pt-5 text-sm text-ink-muted dark:border-white/10 dark:text-white/60">
          <div className="flex items-center gap-3">
            <Calendar className="h-4 w-4 text-primary dark:text-accent" />
            Next available: Thursday, 10:30 AM
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 text-primary dark:text-accent" />
            60-minute smile assessment
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-primary dark:text-accent" />
            Fifth Avenue, New York
          </div>
        </div>
        <Button variant="primary" className="mt-6 w-full" size="lg" asChild>
          <a href="/book-appointment">Check Availability</a>
        </Button>
      </motion.div>
    </section>
  );
}
