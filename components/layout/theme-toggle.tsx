"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ light = false }: { light?: boolean }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-10 w-10" />;

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 ${
        light
          ? "border-white/25 text-porcelain hover:bg-white/10"
          : "border-ink/15 text-ink hover:bg-ink/5 dark:border-white/20 dark:text-porcelain dark:hover:bg-white/10"
      }`}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
