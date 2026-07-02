"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * useCountUp — animates a number from 0 to `value` once it scrolls into
 * view. Extracted from the Statistics section so any future counter
 * (pricing, gallery stats, doctor case counts) can reuse it.
 */
export function useCountUp(value: number, { duration = 1.6 }: { duration?: number } = {}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value, duration, reduceMotion]);

  return { ref, display };
}
