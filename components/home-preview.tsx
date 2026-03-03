import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
  return (
    <section className="bg-background py-20 lg:py-28" aria-label="Explore TNK">
      <div className="mx-auto max-w-6xl px-5">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="chrome-card group overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md"
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
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>


      </div>
    </section>
  )
}
