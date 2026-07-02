"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * SmileArc — Lumina Dental's signature element.
 * A single hairline arc, the geometry of a smile, that draws itself
 * into view. Used sparingly as a section divider / underline motif
 * so it reads as a deliberate signature rather than decoration.
 */
export function SmileArc({
  className,
  width = 120,
  strokeWidth = 2,
  color = "#D4AF37",
}: {
  className?: string;
  width?: number;
  strokeWidth?: number;
  color?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <svg
      ref={ref}
      width={width}
      height={width * 0.28}
      viewBox="0 0 120 34"
      fill="none"
      className={cn("overflow-visible", className)}
      aria-hidden="true"
    >
      <motion.path
        d="M2 4 C 30 30, 90 30, 118 4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}
