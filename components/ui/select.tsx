import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "flex h-12 w-full appearance-none rounded-md border border-input bg-card px-4 pr-10 text-sm text-ink transition-colors duration-200 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 dark:text-porcelain aria-[invalid=true]:border-destructive aria-[invalid=true]:focus-visible:ring-destructive",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted dark:text-white/50" />
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
