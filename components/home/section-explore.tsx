"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

const EXPLORE_PROMPTS = [
  "Weekend getaway ideas from Chicago",
  "Best beaches in Southeast Asia for solo travelers",
  "Where should I go for a winter trip in Europe?",
];

export function SectionExplore() {
  return (
    <section className="px-4 py-20 md:py-32">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
          Explore
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Not sure where to go? Just ask.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Describe a vibe, a budget, a season — Uncharted will surface
          destinations you hadn&rsquo;t even considered. No searching, no
          scrolling, no 40 open tabs.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
          {EXPLORE_PROMPTS.map((prompt) => (
            <Badge
              key={prompt}
              variant="secondary"
              className="px-4 py-2 text-sm font-normal"
            >
              &ldquo;{prompt}&rdquo;
            </Badge>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
