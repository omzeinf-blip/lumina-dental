"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { FinalCta } from "@/components/sections/final-cta";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
};

export function BlogPostContent({ post }: { post: Post }) {
  return (
    <>
      <article className="bg-ink pb-20 pt-40 sm:pt-48">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-accent">
              <ArrowLeft className="h-3 w-3" /> Back to Journal
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-accent"
          >
            <span>{post.category}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 max-w-3xl text-display-lg text-porcelain text-balance"
          >
            {post.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 flex items-center gap-5 text-sm text-white/50"
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> {post.readTime}
            </span>
          </motion.div>
        </div>
      </article>

      <section className="section-padding bg-porcelain dark:bg-ink">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-[16/9] rounded-xl bg-gradient-to-br from-primary-100 via-porcelain to-accent-100 dark:from-primary-900 dark:via-ink dark:to-ink"
            />

            <div className="mt-12 max-w-none text-ink-muted dark:text-white/65">
              <p className="text-lg leading-relaxed">{post.excerpt}</p>
              <p className="mt-6 leading-relaxed">
                Our team approaches every case individually, which means the
                guidance below is a starting point rather than a
                prescription. During your consultation, we'll map your
                specific goals against your dental anatomy before
                recommending a path forward.
              </p>
              <h2 className="mt-10 font-display text-2xl text-ink dark:text-porcelain">
                What to consider before your consultation
              </h2>
              <p className="mt-4 leading-relaxed">
                Come prepared with photos of smiles you admire, a sense of
                your budget range, and any prior dental work you'd like us
                to review. The more context we have, the more precise your
                digital preview will be.
              </p>
              <p className="mt-4 leading-relaxed">
                If you have questions specific to your situation, our
                concierge team is happy to walk through them before you
                commit to any treatment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
