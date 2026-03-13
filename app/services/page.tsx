import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore True North Kromes dental lab services including 3D metal printing, CAD design, and DLyte polishing.",
}

const services = [
  {
    title: "3D Design",
    description:
      "Expert digital framework design tailored to each case. Our CAD specialist team is around 250 strong and also combined with an AI program that utilizes the databases to create precise partial denture designs that account for optimal fit, retention, and patient comfort. The process of design will allow the client to view their design before it is printed to obtain predictable results. We work with all major file formats and can accommodate custom specifications.",
    image: "/images/service-3d-design.jpg",
  },
  {
    title: "3D Printing",
    description:
      "High-resolution metal printing using advanced SLM (Selective Laser Melting) technology. Our Chamlion printers produce frameworks with exceptional accuracy and consistency, ensuring reliable results case after case.",
    image: "/images/service-3d-printing.jpg",
  },
  {
    title: "Post-Processing",
    description:
      "Professional finishing using our AP10 Plasma Polishing Machine. Plasma polishing is a high-precision, high-efficiency, environmentally-friendly processing method for metal surfaces. The polishing of the workpiece is achieved by forming an envelope gas layer between the workpiece and the polishing liquid and generating plasma discharge to remove impurities. Every framework is polished to a mirror finish and inspected before delivery, ensuring it meets our exacting standards.",
    image: "/images/service-post-processing.jpg",
  },
]

const additionalServices = [
  {
    title: "Custom Partial Frameworks",
    description: "Upper and lower partial denture frameworks in CoCr alloy. Includes cast clasps, mesh retention, and precision-fit designs tailored to your case specifications.",
  },
  {
    title: "Implant Bars & Attachments",
    description: "Custom implant bars with precision screw holes for overdenture retention. Designed to your implant system specifications.",
  },
  {
    title: "Metal Mesh Trays",
    description: "Custom perforated metal trays for impression taking and specialized prosthetic applications.",
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* Header -- left aligned, tighter spacing -- Fix #1 #2 */}
      <section className="bg-white pt-44 pb-10 lg:pt-52 lg:pb-14">
        <div className="mx-auto max-w-5xl px-8 lg:px-16">
          <p className="text-xs font-medium tracking-[0.2em] text-[#c9a227]">
            WHAT WE DO
          </p>
          <h1 className="mt-2 font-sans text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-foreground">
            Our Services
          </h1>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
            A fully integrated digital 3D-printing solution that transforms the way dental professionals design and manufacture partial dentures.
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
                  <div className="aspect-[4/3] w-full bg-[#f0f0f0] flex items-center justify-center border border-[#e5e5e5]">
                    <p className="text-sm text-[#a1a1aa]">{service.title}</p>
                  </div>
                </div>
                <div className="w-full lg:w-[45%]">
                  <h2 className="font-sans text-2xl text-foreground">
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
          <p className="text-xs font-medium tracking-[0.2em] text-[#c9a227]">
            ALSO AVAILABLE
          </p>
          <h2 className="mt-2 font-sans text-[clamp(1.5rem,3vw,2.25rem)] font-normal text-foreground">
            Additional Services
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {additionalServices.map((s) => (
              <div key={s.title} className="border border-border bg-white p-7">
                <h3 className="font-sans text-lg text-foreground">{s.title}</h3>
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
          <h2 className="font-sans text-[clamp(1.5rem,3vw,2.25rem)] font-normal text-foreground">
            Ready to Get Started?
          </h2>
          <p className="mt-3 max-w-lg text-base text-muted-foreground">
            Email or call us today to discuss your case requirements. We provide complete support throughout the entire production cycle.
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
