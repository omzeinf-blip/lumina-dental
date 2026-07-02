"use client";

import { Reveal } from "@/components/ui/reveal";
import { useCountUp } from "@/lib/hooks/use-count-up";

const STATS = [
  { value: 18, suffix: "+", label: "Years of Excellence" },
  { value: 12400, suffix: "+", label: "Smiles Transformed" },
  { value: 4.9, suffix: "/5", label: "Patient Satisfaction", decimals: 1 },
  { value: 97, suffix: "%", label: "Would Recommend" },
];

function StatItem({
  value,
  suffix,
  label,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}) {
  const { ref, display } = useCountUp(value);
  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className="block">
      <span className="font-display text-5xl text-porcelain sm:text-6xl tabular-nums">
        {display.toFixed(decimals)}
        <span className="text-accent">{suffix}</span>
      </span>
      <span className="mt-2 block font-mono text-xs uppercase tracking-[0.16em] text-white/50">
        {label}
      </span>
    </span>
  );
}

export function Statistics() {
  return (
    <section className="bg-ink section-padding" aria-label="Lumina Dental by the numbers">
      <div className="container">
        <div className="grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="border-l border-white/10 pl-6">
              <StatItem {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
