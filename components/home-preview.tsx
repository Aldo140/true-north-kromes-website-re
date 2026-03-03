"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const sections = [
  {
    href: "/services",
    image: "/images/service-printing.jpg",
    title: "Our Services",
    description: "3D design, metal printing, and professional post-processing for dental frameworks.",
  },
  {
    href: "/about",
    image: "/images/about.jpg",
    title: "About TNK",
    description: "Learn about our mission, capabilities, and why dental professionals choose us.",
  },
  {
    href: "/gallery",
    image: "/images/gallery-1.jpg",
    title: "Our Work",
    description: "Browse our portfolio of precision-crafted dental frameworks and partial dentures.",
  },
  {
    href: "/updates",
    image: "/images/service-design.jpg",
    title: "Latest Updates",
    description: "Stay informed with the latest news, insights, and developments from TNK.",
  },
  {
    href: "/downloads",
    image: "/images/service-postprocessing.jpg",
    title: "Downloads",
    description: "Order forms, submission guides, and technical documents for dental professionals.",
  },
  {
    href: "/faq",
    image: "/images/service-design.jpg",
    title: "FAQ",
    description: "Answers to common questions about our services, processes, and technology.",
  },
  {
    href: "/contact",
    image: "/images/hero.jpg",
    title: "Contact Us",
    description: "Ready to get started? Send your first case or request a follow-up conversation.",
  },
]

export function HomePreview() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-background py-16 lg:py-24" aria-label="Explore TNK">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group overflow-hidden rounded border border-border bg-card transition-shadow hover:shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={section.image}
                  alt={section.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground">
                  {section.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {section.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary transition-colors group-hover:text-[#225da6]">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-muted-foreground">
            All products are designed and fabricated <strong className="text-foreground">digitally</strong> in <strong className="text-foreground">Canada</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}
