"use client"

import Link from "next/link"
import {
  Layers,
  Users,
  Image as ImageIcon,
  Newspaper,
  HelpCircle,
  Mail,
  ArrowRight,
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const sections = [
  {
    href: "/services",
    icon: Layers,
    title: "Our Services",
    description: "3D design, metal printing, and professional post-processing for dental frameworks.",
  },
  {
    href: "/about",
    icon: Users,
    title: "About TNK",
    description: "Learn about our mission, capabilities, and why dental professionals choose us.",
  },
  {
    href: "/gallery",
    icon: ImageIcon,
    title: "Our Work",
    description: "Browse our portfolio of precision-crafted dental frameworks and partial dentures.",
  },
  {
    href: "/updates",
    icon: Newspaper,
    title: "Latest Updates",
    description: "Stay informed with the latest news, insights, and developments from TNK.",
  },
  {
    href: "/faq",
    icon: HelpCircle,
    title: "FAQ",
    description: "Answers to common questions about our services, processes, and technology.",
  },
  {
    href: "/contact",
    icon: Mail,
    title: "Contact Us",
    description: "Ready to get started? Send your first case or request a follow-up conversation.",
  },
]

export function HomePreview() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-secondary py-20 lg:py-28" aria-label="Explore TNK">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 lg:px-8 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Explore
          </p>
          <h2 className="mt-3 font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-foreground text-balance">
            Everything You Need, In One Place
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <Link
                key={section.href}
                href={section.href}
                className="group flex flex-col rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {section.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {section.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-muted-foreground">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
