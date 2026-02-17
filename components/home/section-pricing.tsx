"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Adventurer",
    price: "Free",
    period: "",
    tagline: "Learn, browse, and try the agent",
    featured: false,
    features: [
      "5 free maps a day",
      "Unlimited travel chat & questions",
      "Destination discovery & comparisons",
      "High-level itinerary suggestions",
      "Save 1 active trip",
      "Basic recommendations",
    ],
    cta: "Get started free",
  },
  {
    name: "Nomad",
    price: "$15",
    period: "/ month",
    tagline: "For actively planning trips",
    featured: true,
    features: [
      "120 maps per month",
      "Live flight & hotel searches",
      "Personalized day-by-day itineraries",
      "Save multiple trips",
      "Traveler profiles & preferences",
      "Booking checkout preparation",
      "Budget tracking & cost estimates",
    ],
    cta: "Start planning",
  },
  {
    name: "Wanderlust",
    price: "$30",
    period: "/ month",
    tagline: "A travel companion you rely on",
    featured: false,
    features: [
      "300 maps per month",
      "Booking & reservation management",
      "Modify reservations on the fly",
      "In-trip help & live problem solving",
      "Smart itinerary re-optimization",
      "Priority agent processing",
      "Future SMS / WhatsApp messaging",
    ],
    cta: "Go Wanderlust",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    tagline: "For teams and companies",
    featured: false,
    features: [
      "Everything in Wanderlust",
      "Multi-traveler coordination",
      "Admin dashboard & reporting",
      "Spend controls & budgets",
      "Policy enforcement",
      "Integrations (HR, expense, booking)",
      "Dedicated support",
    ],
    cta: "Talk to us",
  },
] as const;

export function SectionPricing() {
  return (
    <section id="pricing" className="px-4 py-20 md:py-32">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, honest pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Start free. Upgrade when Uncharted becomes the travel partner you
            can&rsquo;t travel without.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <Card
                className={cn(
                  "flex flex-col h-full",
                  plan.featured && "border-primary/40 shadow-md"
                )}
              >
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    {plan.featured && (
                      <Badge variant="default" className="text-[10px] px-2 py-0.5">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-sm text-muted-foreground">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <CardDescription className="mt-1">
                    {plan.tagline}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    variant={plan.featured ? "default" : "outline"}
                    className="w-full rounded-full"
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
