"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";

export function BlogGrid() {
  return (
    <section className="section-padding bg-porcelain dark:bg-ink">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card shadow-subtle transition-all duration-300 hover:-translate-y-1 hover:shadow-card dark:border-white/10"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-primary-100 via-porcelain to-accent-100 dark:from-primary-900 dark:via-ink dark:to-ink" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-primary dark:text-accent">
                    <span>{p.category}</span>
                    <span className="text-ink-muted dark:text-white/30">·</span>
                    <span className="text-ink-muted dark:text-white/40">{p.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg leading-snug text-ink dark:text-porcelain">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted dark:text-white/55">
                    {p.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4 dark:border-white/10">
                    <span className="text-xs text-ink-muted dark:text-white/40">
                      {new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary dark:text-white/40 dark:group-hover:text-accent" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
