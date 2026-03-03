"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const stats = ["High Precision", "High Efficiency", "Significant Cost Savings"]

export function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-background py-20 lg:py-28" aria-label="About TNK">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-4 lg:px-8 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-lg">
          <img
            src="/images/about.jpg"
            alt="True North Kromes dental laboratory facility"
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </div>

        <h2 className="mt-10 font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-foreground text-balance">
          Your Digital Partner in Partial Denture Manufacturing
        </h2>

        <p className="mt-6 text-base leading-[1.75] text-muted-foreground">
          True North Kromes (TNK) provides complete support throughout the entire
          production cycle. Our workflow delivers high precision, high efficiency,
          and significant cost savings — enabling laboratories and clinics to
          produce frameworks that are more accurate, consistent, and customized than
          ever before. With TNK as your digital partner, you gain a streamlined,
          reliable, and modern approach to partial denture manufacturing.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {stats.map((stat) => (
            <span
              key={stat}
              className="rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground"
            >
              {stat}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
