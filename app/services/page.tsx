import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore True North Kromes dental lab services including 3D metal printing, CAD design, and DLyte polishing.",
}

const services = [
  {
    title: "[Placeholder Service Title]",
    description: "[Placeholder -- client to supply service description.]",
    image: "/images/gallery-raw-print-batch.jpg",
  },
  {
    title: "[Placeholder Service Title]",
    description: "[Placeholder -- client to supply service description.]",
    image: "/images/gallery-dlyte-sintering.jpg",
  },
  {
    title: "[Placeholder Service Title]",
    description: "[Placeholder -- client to supply service description.]",
    image: "/images/gallery-polished-framework-gray.jpg",
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
        <div className="mx-auto max-w-6xl px-8 lg:px-16">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground/60">
            What we do
          </p>
          <h1 className="mt-3 font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] text-foreground">
            Our Services
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            [Placeholder subtitle]
          </p>
        </div>
      </section>

      {/* Main services */}
      <section className="bg-white pb-24 lg:pb-32">
        <div className="mx-auto max-w-6xl px-8 lg:px-16">
          <div className="flex flex-col gap-24">
            {services.map((service, i) => (
              <div
                key={i}
                className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full overflow-hidden lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 font-serif text-2xl text-foreground">
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
      <section className="border-t border-border bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-8 lg:px-16">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground/60">
            Also available
          </p>
          <h2 className="mt-3 font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-foreground">
            Additional Services
          </h2>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {additionalServices.map((s) => (
              <div key={s.title} className="bg-white p-8 lg:p-10">
                <h3 className="text-[17px] font-medium text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-8 lg:px-16">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-foreground">
                [Placeholder Heading]
              </h2>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                [Placeholder -- client to supply CTA description.]
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 bg-foreground px-7 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-foreground/90"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
