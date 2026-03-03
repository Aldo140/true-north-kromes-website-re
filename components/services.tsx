"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    image: "/images/service-design.jpg",
    title: "3D Design",
    description: "Expert digital framework design tailored to each case.",
    link: "Explore 3D Design",
  },
  {
    image: "/images/service-printing.jpg",
    title: "3D Printing",
    description: "High-resolution metal printing using advanced SLM technology.",
    link: "Explore 3D Printing",
  },
  {
    image: "/images/service-postprocessing.jpg",
    title: "Post-Processing",
    description: "Professional finishing, polishing, and quality assurance.",
    link: "Explore Post-Processing",
  },
]

export function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-background py-20 lg:py-28" aria-label="Our Services">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 lg:px-8 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Our Services
          </p>
          <h2 className="mt-3 font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-foreground text-balance">
            Complete Support, Every Step of the Way
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h4 className="text-base font-semibold text-foreground">
                  {service.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
                >
                  {service.link}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
