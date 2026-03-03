"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    image: "/images/cad-design.png",
    title: "3D Design",
    description:
      "Expert digital framework design tailored to each case using industry-leading CAD software.",
    link: "Learn more",
  },
  {
    image: "/images/printer-window.jpg",
    title: "Metal 3D Printing",
    description:
      "High-resolution printing in medical-grade cobalt-chrome using Selective Laser Melting (SLM).",
    link: "Learn more",
  },
  {
    image: "/images/dlyte-polishing.jpg",
    title: "Post-Processing",
    description:
      "DLyte electropolishing, hand finishing, and rigorous quality assurance on every framework.",
    link: "Learn more",
  },
]

export function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-secondary/50 py-20 lg:py-28" aria-label="Our Services">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            What We Do
          </p>
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight text-foreground text-balance">
            Complete Support, Every Step of the Way
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-lg"
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
                <h4 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-[#164a74]"
                >
                  {service.link}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
