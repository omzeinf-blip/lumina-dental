"use client";

import { Reveal } from "@/components/ui/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQS } from "@/lib/data";

export function FaqPreview() {
  const preview = FAQS.slice(0, 4);
  return (
    <section id="faq" className="section-padding bg-mist dark:bg-white/[0.02]" aria-labelledby="faq-heading">
      <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div>
          <Reveal><p className="eyebrow">Questions</p></Reveal>
          <Reveal delay={0.08}>
            <h2 id="faq-heading" className="mt-4 text-display-md text-balance">
              Everything you'd want to ask, answered.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-sm text-ink-muted dark:text-white/60 leading-relaxed">
              Can't find what you're looking for?
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Button variant="outline" size="md" className="mt-6" asChild>
              <a href="/contact">Ask Us Directly</a>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {preview.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
