import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-pill border px-3.5 py-1.5 text-xs font-mono uppercase tracking-[0.14em] transition-colors",
  {
    variants: {
      variant: {
        default: "border-primary/20 bg-primary/8 text-primary dark:text-primary-300",
        gold: "border-accent/30 bg-accent/10 text-accent-700 dark:text-accent-200",
        outline: "border-ink/15 text-ink-muted dark:border-white/20 dark:text-white/70",
        solid: "border-transparent bg-ink text-porcelain dark:bg-porcelain dark:text-ink",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
