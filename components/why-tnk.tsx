import { Layers, Printer, ShieldCheck, Users, Handshake, Award } from "lucide-react"

const reasons = [
  {
    icon: Layers,
    title: "Custom Metal Frameworks",
    description: "We specialize in crafting custom metal frameworks for dental prosthetics.",
  },
  {
    icon: Printer,
    title: "Precision 3D Printing",
    description: "Utilizing advanced 3D printing technology to ensure precision and quality.",
  },
  {
    icon: ShieldCheck,
    title: "Durable Solutions",
    description: "Offering durable and long-lasting metal framework solutions for dental restorations.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "We prioritize the unique needs and preferences of each client for tailored solutions.",
  },
  {
    icon: Handshake,
    title: "Collaborative Expertise",
    description: "Our team combines expertise in denturism and lab technology for exceptional outcomes.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Committed to upholding the highest standards of quality and precision in our work utilizing industry leading materials.",
  },
]

export function WhyTNK() {
  return (
    <section className="bg-secondary py-20 lg:py-28" aria-label="Why Choose TNK">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight text-foreground">
            Why Choose True North Kromes?
          </h2>
          <p className="mt-3 text-base text-muted-foreground">Our Services Can Help With</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="chrome-card rounded-lg border bg-card p-8 text-center"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h4 className="text-base font-semibold text-foreground">
                  {reason.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
