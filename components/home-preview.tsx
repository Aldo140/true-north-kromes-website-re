"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const sections = [
  {
    href: "/services",
    image: "/images/lab-facility.jpg",
    title: "Our Services",
    description: "[Placeholder description]",
  },
  {
    href: "/about",
    image: "/images/team-selfie.jpg",
    title: "About TNK",
    description: "[Placeholder description]",
  },
  {
    href: "/gallery",
    image: "/images/framework-hero.jpg",
    title: "Our Work",
    description: "[Placeholder description]",
  },
  {
    href: "/updates",
    image: "/images/printer-branded.jpg",
    title: "Latest Updates",
    description: "[Placeholder description]",
  },
  {
    href: "/downloads",
    image: "/images/framework-lower.jpg",
    title: "Downloads",
    description: "[Placeholder description]",
  },
  {
    href: "/faq",
    image: "/images/palatal-plate.jpg",
    title: "FAQ",
    description: "[Placeholder description]",
  },
  {
    href: "/contact",
    image: "/images/team-building.jpg",
    title: "Contact Us",
    description: "[Placeholder description]",
  },
]

export function HomePreview() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-background py-20 lg:py-28" aria-label="Explore TNK">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Explore
          </p>
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight text-foreground text-balance">
            Everything You Need to Know
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={section.image}
                  alt={section.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold text-foreground">
                  {section.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {section.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm tracking-wide text-muted-foreground">
            [Placeholder tagline -- client to supply before launch.]
          </p>
        </div>
      </div>
    </section>
  )
}
