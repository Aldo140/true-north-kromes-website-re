"use client"

import { Microscope, Truck, Shield } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const reasons = [
  {
    icon: Microscope,
    title: "LAB-DIRECT",
    description: "Work directly with the lab. No middlemen, no markups.",
  },
  {
    icon: Truck,
    title: "FLEXIBLE SUBMISSION",
    description:
      "Send cases by courier (physical models) or digital STL scan — whichever works for you.",
  },
  {
    icon: Shield,
    title: "CANADIAN-MADE",
    description:
      "Proudly designed and manufactured in Canada for Canadian dental professionals.",
  },
]

export function WhyTNK() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-[#f2f2f2] py-20 lg:py-28" aria-label="Why Choose TNK">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 lg:px-8 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="mb-12 text-center">
          <span className="text-sm font-medium uppercase tracking-[0.15em] text-[#c8a84b]">
            Why TNK
          </span>
          <h2 className="mt-3 font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-[#1e1e1e] text-balance">
            Why Dental Professionals Choose TNK
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="rounded-lg bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f2f2f2]">
                  <Icon className="h-6 w-6 text-[#1e1e1e]" />
                </div>
                <h4 className="text-base font-semibold uppercase tracking-[0.1em] text-[#1e1e1e]">
                  {reason.title}
                </h4>
                <p className="mt-3 text-base leading-relaxed text-[#1e1e1e]/70">
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
