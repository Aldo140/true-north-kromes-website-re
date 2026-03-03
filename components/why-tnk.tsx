"use client"

import { Microscope, Truck, Shield } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const reasons = [
  {
    icon: Microscope,
    title: "Lab-Direct",
    description: "Work directly with the lab. No middlemen, no markups.",
  },
  {
    icon: Truck,
    title: "Flexible Submission",
    description:
      "Send cases by courier (physical models) or digital STL scan -- whichever works for you.",
  },
  {
    icon: Shield,
    title: "Canadian-Made",
    description:
      "Proudly designed and manufactured in Canada for Canadian dental professionals.",
  },
]

export function WhyTNK() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="border-t border-border bg-secondary py-16 lg:py-24" aria-label="Why Choose TNK">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="mb-10 text-center text-[clamp(1.5rem,3vw,2.25rem)] font-black text-foreground text-balance">
          Why Dental Professionals Choose TNK
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="rounded border border-border bg-card p-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground">
                  {reason.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
