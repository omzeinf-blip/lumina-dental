import { SmileArc } from "@/components/ui/smile-arc";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  withArc = false,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  withArc?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <Reveal>
        <p className={cn("eyebrow", align === "center" && "justify-center")}>{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className={cn("mt-4 text-display-md text-balance", align === "center" && "mx-auto max-w-2xl")}>
          {title}
        </h2>
      </Reveal>
      {withArc && (
        <Reveal delay={0.14}>
          <SmileArc width={100} className={align === "center" ? "mx-auto" : undefined} />
        </Reveal>
      )}
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 max-w-md text-ink-muted dark:text-white/60 leading-relaxed",
              align === "center" && "mx-auto max-w-xl"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
