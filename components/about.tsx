"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const stats = [
  { label: "High Precision", detail: "[Placeholder detail]" },
  { label: "High Efficiency", detail: "[Placeholder detail]" },
  { label: "Significant Cost Savings", detail: "[Placeholder detail]" },
]

export function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-background py-20 lg:py-28" aria-label="About TNK">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/images/team-selfie.jpg"
              alt="The True North Kromes team members in the laboratory"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              About TNK
            </p>
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight text-foreground text-balance">
              Your Digital Partner in Partial Denture Manufacturing
            </h2>

            <p className="mt-5 text-base leading-[1.8] text-muted-foreground">
              True North Kromes (TNK) provides complete support throughout the entire
              production cycle. Our workflow delivers high precision, high efficiency,
              and significant cost savings -- enabling laboratories and clinics to
              produce frameworks that are more accurate, consistent, and customized than
              ever before. With TNK as your digital partner, you gain a streamlined,
              reliable, and modern approach to partial denture manufacturing.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                    <p className="text-sm text-muted-foreground">{stat.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
