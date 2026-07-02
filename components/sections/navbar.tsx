"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxury ${
        scrolled
          ? "bg-porcelain/85 backdrop-blur-xl shadow-subtle dark:bg-ink/80"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between lg:h-24">
        <Link
          href="/"
          className={`font-display text-xl tracking-tight transition-colors ${
            scrolled ? "text-ink dark:text-porcelain" : "text-porcelain"
          }`}
        >
          Lumina <span className="italic text-accent">Dental</span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                scrolled
                  ? "text-ink-muted hover:text-primary dark:text-white/70 dark:hover:text-accent"
                  : "text-porcelain/85 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle light={!scrolled} />
          <Button variant="gold" size="md" asChild>
            <Link href="/book-appointment">Book Consultation</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center lg:hidden ${
            scrolled ? "text-ink dark:text-porcelain" : "text-porcelain"
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-porcelain dark:bg-ink lg:hidden"
          >
            <nav className="container flex flex-col gap-1 pb-8 pt-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-4 text-base text-ink dark:border-white/10 dark:text-porcelain"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-5 flex items-center justify-between">
                <ThemeToggle />
                <Button variant="gold" asChild>
                  <Link href="/book-appointment">Book Consultation</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
