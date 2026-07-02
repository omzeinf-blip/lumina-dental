export function SectionSkeleton() {
  return (
    <div className="section-padding" aria-hidden="true">
      <div className="container">
        <div className="h-4 w-32 animate-pulse rounded-full bg-ink/10 dark:bg-white/10" />
        <div className="mt-4 h-10 w-2/3 max-w-lg animate-pulse rounded-lg bg-ink/10 dark:bg-white/10" />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-64 animate-pulse rounded-xl bg-ink/5 dark:bg-white/5"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
