"use client";

import { motion } from "motion/react";
import { MessageCircle, Search, Luggage } from "lucide-react";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Tell me what you're thinking",
    description:
      "A destination, a vibe, a budget, a date — anything. There's no wrong way to start.",
  },
  {
    icon: Search,
    title: "I research and plan",
    description:
      "Uncharted searches real options, compares prices, and builds a plan tailored to what you actually want.",
  },
  {
    icon: Luggage,
    title: "You travel",
    description:
      "Review your itinerary, book what you like, and go. Uncharted stays with you if anything changes along the way.",
  },
];

export function SectionHowItWorks() {
  return (
    <section className="px-4 py-20 md:py-32">
      <motion.div
        className="mx-auto max-w-3xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            No accounts to set up, no forms to fill. Just start a conversation.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-5 top-6 bottom-6 w-px bg-border hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                className="flex items-start gap-6 relative"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              >
                <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 shrink-0 relative z-10">
                  <step.icon className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
