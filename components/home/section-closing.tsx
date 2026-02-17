"use client";

import { motion } from "motion/react";

export function SectionClosing() {
  return (
    <section className="px-4 py-24 md:py-40">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-3xl font-bold tracking-tight sm:text-4xl leading-snug">
          Your next trip is a conversation away.
        </p>
      </motion.div>
    </section>
  );
}
