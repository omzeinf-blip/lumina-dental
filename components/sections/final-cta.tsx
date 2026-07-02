"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmileArc } from "@/components/ui/smile-arc";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.14),_transparent_60%)]"
        aria-hidden
      />
      <div className="container relative flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SmileArc width={130} />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl text-display-lg text-porcelain text-balance"
        >
          Your perfect smile begins with one conversation.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <Button variant="gold" size="lg" asChild>
            <a href="/book-appointment">
              Book Your Consultation <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
