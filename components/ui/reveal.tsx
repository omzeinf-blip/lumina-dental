"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

type Direction = "up" | "down" | "left" | "right" | "none";

const OFFSETS: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 24 },
  right: { x: -24 },
  none: {},
};

export interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  /** Use viewport-triggered reveal (default) vs. reveal immediately on mount */
  onMount?: boolean;
}

/**
 * Reveal — the single source of truth for Lumina Dental's scroll-in motion.
 * Replaces the repeated `motion.div initial/whileInView/transition` blocks
 * that were duplicated across ~25 section components. Automatically
 * respects prefers-reduced-motion by skipping the offset/transition.
 */
export function Reveal({
  children,
  as = "div",
  direction = "up",
  delay = 0,
  duration = 0.7,
  once = true,
  className,
  onMount = false,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as as keyof typeof motion] ?? motion.div;
  const offset = reduceMotion ? {} : OFFSETS[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: reduceMotion ? 0.01 : duration, delay, ease: EASE },
    },
  };

  return (
    // @ts-expect-error — dynamic motion component keyed by `as`
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      {...(onMount ? { animate: "show" } : { whileInView: "show", viewport: { once } })}
    >
      {children}
    </Component>
  );
}

/** Stagger container for grids/lists of Reveal children. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{ show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}
