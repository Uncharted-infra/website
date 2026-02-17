"use client";

import { motion } from "motion/react";
import { Plane, Hotel, Ticket } from "lucide-react";

const CAPABILITIES = [
  {
    icon: Plane,
    label: "Flights",
    detail: "Search, compare, and lock in the best fares across airlines.",
  },
  {
    icon: Hotel,
    label: "Hotels & stays",
    detail: "Find lodging that fits your budget, location, and style.",
  },
  {
    icon: Ticket,
    label: "Activities & reservations",
    detail: "Book tours, restaurants, and experiences — no copy-pasting confirmation codes.",
  },
];

export function SectionBook() {
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
            Book
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Flights, hotels, reservations — handled
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Uncharted doesn&rsquo;t just recommend. It books. Real flights, real
            hotels, real confirmations — so you can stop juggling tabs and start
            packing.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.label}
              className="flex items-start gap-5"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
            >
              <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 shrink-0 mt-0.5">
                <cap.icon className="size-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{cap.label}</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {cap.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
