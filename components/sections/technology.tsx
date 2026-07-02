"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const TECH = [
  { name: "iTero 3D Scanning", detail: "Impression-free digital mapping, accurate to 20 microns." },
  { name: "CEREC Same-Day Ceramics", detail: "In-house milling for same-visit restorations." },
  { name: "DSD Smile Simulation", detail: "See your finished smile before treatment begins." },
  { name: "Diode Laser Contouring", detail: "Precision soft-tissue shaping with minimal downtime." },
];

export function Technology() {
  return (
    <section id="technology" className="section-padding bg-ink text-porcelain">
      <div className="absolute inset-0" />
      <div className="container relative">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <div>
            <Badge variant="gold">Technology</Badge>
            <h2 className="mt-5 text-display-md text-balance">
              Instruments as precise as the outcome demands.
            </h2>
            <p className="mt-6 max-w-sm text-white/60 leading-relaxed">
              We invest in the same imaging and fabrication technology used
              by leading prosthodontic institutes, kept in-house so nothing
              is outsourced or rushed.
            </p>
          </div>

          <div className="divide-y divide-white/10">
            {TECH.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <h3 className="font-display text-xl italic text-porcelain">{t.name}</h3>
                <p className="max-w-sm text-sm text-white/55 sm:text-right">{t.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
