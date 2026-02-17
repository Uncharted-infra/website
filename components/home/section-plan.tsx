"use client";

import { motion } from "motion/react";

const ITINERARY_PREVIEW = [
  { day: "Day 1", summary: "Arrive in Rome — Trastevere walk, dinner near Piazza Navona" },
  { day: "Day 2", summary: "Colosseum & Forum morning, Testaccio food tour afternoon" },
  { day: "Day 3", summary: "Day trip to Tivoli — Villa d'Este gardens, back for sunset" },
  { day: "Day 4", summary: "Train to Florence — check in, Oltrarno neighborhood evening" },
  { day: "Day 5", summary: "Uffizi morning, San Lorenzo market, departure" },
];

export function SectionPlan() {
  return (
    <section className="px-4 py-20 md:py-32">
      <motion.div
        className="mx-auto max-w-3xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Plan
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            From idea to itinerary in minutes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Tell Uncharted what kind of trip you want. It builds a day-by-day
            plan, handles the logistics, and adjusts when you change your mind.
          </p>
        </div>

        <motion.div
          className="mt-12 rounded-xl border bg-card p-6 md:p-8 shadow-sm"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-5">
            5 days in Italy — sample itinerary
          </p>
          <div className="space-y-4">
            {ITINERARY_PREVIEW.map((item) => (
              <div key={item.day} className="flex gap-4 items-baseline">
                <span className="text-sm font-semibold text-foreground/70 shrink-0 w-14">
                  {item.day}
                </span>
                <span className="text-sm text-foreground leading-relaxed">
                  {item.summary}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
