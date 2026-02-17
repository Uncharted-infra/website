"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function SectionDemoCta() {
  return (
    <section className="px-4 py-20 md:py-32">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Want to see it in action?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
          Book a quick walkthrough with our travel team. No pitch deck — just a
          real conversation about how Uncharted can help you or your company
          travel better.
        </p>

        <div className="mt-10">
          <Button size="lg" className="rounded-full px-8">
            Talk to a travel concierge
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
