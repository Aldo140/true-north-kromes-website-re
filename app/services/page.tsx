import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore True North Kromes dental lab services including 3D metal printing, CAD design, and DLyte polishing.",
}

const services = [
  {
    title: "[Placeholder Service Title]",
    description:
      "[Placeholder -- client to supply service description.]",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "[Placeholder Service Title]",
    description:
      "[Placeholder -- client to supply service description.]",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "[Placeholder Service Title]",
    description:
      "[Placeholder -- client to supply service description.]",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const additionalServices = [
  {
    title: "Custom Partial Frameworks",
    description: "[Placeholder -- describe the types of partial frameworks offered, materials, and customization options.]",
  },
  {
    title: "Implant Bars & Attachments",
    description: "[Placeholder -- describe implant bar services, supported systems, and materials.]",
  },
  {
    title: "Rush Orders",
    description: "[Placeholder -- describe expedited turnaround options and pricing.]",
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-white pt-44 pb-16 lg:pt-52 lg:pb-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-foreground">
            Our Services
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            [Placeholder subtitle]
          </p>
        </div>
      </section>

      {/* Main services with alternating layout */}
      <section className="bg-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-5xl px-5">
          <div className="flex flex-col gap-20">
            {services.map((service, i) => (
              <div
                key={i}
                className={`flex flex-col items-center gap-10 lg:flex-row ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <h2 className="text-2xl font-semibold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-sm leading-[1.8] text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional services */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="font-[family-name:var(--font-heading)] text-center text-[clamp(1.5rem,3vw,2.25rem)] font-normal text-foreground">
            Additional Services
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {additionalServices.map((s) => (
              <div key={s.title} className="border border-border bg-white p-8">
                <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2.25rem)] font-normal text-foreground">
            [Placeholder Heading]
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            [Placeholder -- client to supply CTA description.]
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center border border-foreground px-10 py-3 text-sm tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
