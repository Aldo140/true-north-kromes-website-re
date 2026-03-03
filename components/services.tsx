"use client"

import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    image: "/images/cad-design.png",
    title: "3D Design",
    description:
      "Expert digital framework design tailored to each case.",
    href: "/services",
    cta: "Explore 3D Design",
  },
  {
    image: "/images/powder-bed.jpg",
    title: "3D Printing",
    description:
      "High-resolution metal printing using advanced SLM technology.",
    href: "/services",
    cta: "Explore 3D Printing",
  },
  {
    image: "/images/printer-buildplate.jpg",
    title: "Post-Processing",
    description:
      "Professional finishing, polishing, and quality assurance.",
    href: "/services",
    cta: "Explore Post-Processing",
  },
]

export function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-background py-20 lg:py-28" aria-label="Our Services">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group text-center"
            >
              {/* Title above image */}
              <h4 className="mb-4 text-xl font-bold tracking-tight text-foreground">
                {service.title}
              </h4>

              {/* Image */}
              <div className="overflow-hidden rounded-lg bg-muted">
                <img
                  src={service.image}
                  alt={service.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={service.image.includes("cad-design") ? { objectPosition: "center 40%" } : undefined}
                  loading="lazy"
                />
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              {/* CTA */}
              <span className="mt-3 inline-block text-sm font-semibold text-primary transition-colors group-hover:text-[#164a74]">
                {service.cta}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
