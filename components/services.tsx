"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    image: "/images/cad-design.png",
    title: "3D Design",
    description: "Expert digital framework design tailored to each case.",
    link: "Explore 3D Design",
  },
  {
    image: "/images/printer-window.jpg",
    title: "3D Printing",
    description: "High-resolution metal printing using advanced SLM technology.",
    link: "Explore 3D Printing",
  },
  {
    image: "/images/dlyte-polishing.jpg",
    title: "Post-Processing",
    description: "Professional finishing, polishing, and quality assurance.",
    link: "Explore Post-Processing",
  },
]

export function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-background py-16 lg:py-24" aria-label="Our Services">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="mb-10 text-center text-[clamp(1.5rem,3vw,2.25rem)] font-black text-foreground text-balance">
          Complete Support, Every Step of the Way
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded border border-border bg-card transition-shadow hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-foreground">
                  {service.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary transition-colors hover:text-[#225da6]"
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
