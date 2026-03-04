import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore True North Kromes dental lab services including 3D metal printing, CAD design, and DLyte polishing.",
}

const services = [
  {
    title: "[Placeholder Service Title]",
    description:
      "[Placeholder -- client to supply service description.]",
    image: "/images/gallery-raw-print-batch.jpg",
  },
  {
    title: "[Placeholder Service Title]",
    description:
      "[Placeholder -- client to supply service description.]",
    image: "/images/gallery-dlyte-sintering.jpg",
  },
  {
    title: "[Placeholder Service Title]",
    description:
      "[Placeholder -- client to supply service description.]",
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
      {/* Header -- left aligned, tighter spacing -- Fix #1 #2 */}
      <section className="bg-white pt-44 pb-10 lg:pt-52 lg:pb-14">
        <div className="mx-auto max-w-5xl px-8 lg:px-16">
          <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground">
            WHAT WE DO
          </p>
          <h1 className="mt-2 font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-foreground">
            Our Services
          </h1>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
            [Placeholder subtitle]
          </p>
        </div>
      </section>

      {/* Main services -- alternating, varied gap -- Fix #2 */}
      <section className="bg-white pb-16 lg:pb-24">
        <div className="mx-auto max-w-5xl px-8 lg:px-16">
          <div className="flex flex-col gap-16 lg:gap-24">
            {services.map((service, i) => (
              <div
                key={i}
                className={`flex flex-col gap-8 lg:items-center lg:gap-14 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <div className="w-full lg:w-[55%]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="w-full lg:w-[45%]">
                  <h2 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional services -- 2-col not 3 for asymmetry -- Fix #5 */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-8 lg:px-16">
          <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground">
            ALSO AVAILABLE
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2.25rem)] font-normal text-foreground">
            Additional Services
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {additionalServices.map((s) => (
              <div key={s.title} className="border border-border bg-white p-7">
                <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA -- left aligned with text link -- Fix #1 #3 */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-8 lg:px-16">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2.25rem)] font-normal text-foreground">
            [Placeholder Heading]
          </h2>
          <p className="mt-3 max-w-lg text-base text-muted-foreground">
            [Placeholder -- client to supply CTA description.]
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4 decoration-border transition-colors hover:decoration-foreground"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
