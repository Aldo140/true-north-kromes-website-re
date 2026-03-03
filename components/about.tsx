"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const stats = ["High Precision", "High Efficiency", "Significant Cost Savings"]

export function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-background py-16 lg:py-24" aria-label="About TNK">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-5 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded">
          <img
            src="/images/team-selfie.jpg"
            alt="The True North Kromes team members in the laboratory"
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </div>

        <h2 className="mt-10 text-[clamp(1.5rem,3vw,2.25rem)] font-black text-foreground text-balance">
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

        <div className="mt-8 flex flex-wrap gap-3">
          {stats.map((stat) => (
            <span
              key={stat}
              className="rounded border border-border px-4 py-2 text-sm font-bold text-foreground"
            >
              {stat}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
