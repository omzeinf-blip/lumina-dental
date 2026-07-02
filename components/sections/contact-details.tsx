"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, AlertCircle } from "lucide-react";

const HOURS = [
  { day: "Monday – Thursday", time: "9:00 AM – 6:00 PM" },
  { day: "Friday", time: "9:00 AM – 4:00 PM" },
  { day: "Saturday", time: "10:00 AM – 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export function ContactDetails() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-10"
    >
      <div>
        <p className="eyebrow">Studio Details</p>
        <div className="mt-5 space-y-4 text-sm text-ink-muted dark:text-white/60">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary dark:text-accent" />
            764 Fifth Avenue, Suite 1200, New York, NY 10019
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 shrink-0 text-primary dark:text-accent" />
            <a href="tel:+12125550148" className="hover:text-primary dark:hover:text-accent">+1 (212) 555-0148</a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 shrink-0 text-primary dark:text-accent" />
            <a href="mailto:hello@luminadental.com" className="hover:text-primary dark:hover:text-accent">hello@luminadental.com</a>
          </div>
        </div>
      </div>

      <div>
        <p className="eyebrow">Studio Hours</p>
        <div className="mt-5 divide-y divide-line text-sm dark:divide-white/10">
          {HOURS.map((h) => (
            <div key={h.day} className="flex items-center justify-between py-3">
              <span className="flex items-center gap-2 text-ink-muted dark:text-white/55">
                <Clock className="h-3.5 w-3.5" /> {h.day}
              </span>
              <span className="text-ink dark:text-porcelain">{h.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-destructive/25 bg-destructive/5 p-6">
        <div className="flex items-center gap-2 text-destructive">
          <AlertCircle className="h-4 w-4" />
          <p className="font-mono text-xs uppercase tracking-[0.14em]">Dental Emergency</p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted dark:text-white/60">
          For urgent dental issues outside studio hours, call our emergency
          line directly. We aim to respond within 30 minutes.
        </p>
        <a
          href="tel:+12125559111"
          className="mt-3 inline-block font-display text-lg text-destructive"
        >
          +1 (212) 555-9111
        </a>
      </div>
    </motion.div>
  );
}
