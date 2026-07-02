import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill text-sm font-medium tracking-wide transition-all duration-300 ease-luxury disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-soft hover:bg-primary-600 hover:shadow-card active:scale-[0.98]",
        gold:
          "bg-accent text-accent-foreground shadow-gold hover:bg-accent-400 active:scale-[0.98]",
        outline:
          "border border-ink/15 text-ink dark:text-porcelain dark:border-white/20 bg-transparent hover:border-primary hover:text-primary dark:hover:border-accent dark:hover:text-accent",
        ghost:
          "bg-transparent text-ink dark:text-porcelain hover:bg-ink/5 dark:hover:bg-white/5",
        link: "bg-transparent text-primary dark:text-accent underline-offset-4 hover:underline p-0 h-auto rounded-none",
      },
      size: {
        sm: "h-10 px-5 text-xs",
        md: "h-12 px-7",
        lg: "h-14 px-9 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
