import { ChevronDown } from "lucide-react"

const reasons = [
  {
    title: "Custom Metal Frameworks",
    description: "We specialize in crafting custom metal frameworks for dental prosthetics.",
  },
  {
    title: "Precision 3D Printing",
    description: "Utilizing advanced 3D printing technology to ensure precision and quality.",
  },
  {
    title: "Durable Solutions",
    description: "Offering durable and long-lasting metal framework solutions for dental restorations.",
  },
  {
    title: "Client-Centric Approach",
    description: "We prioritize the unique needs and preferences of each client for tailored solutions.",
  },
  {
    title: "Collaborative Expertise",
    description:
      "Our team combines expertise in denturism and lab technology for exceptional outcomes.",
  },
  {
    title: "Quality Assurance",
    description:
      "Committed to upholding the highest standards of quality and precision in our work utilizing industry leading materials.",
  },
]

export function WhyTNK() {
  return (
    <section className="bg-white" aria-label="Why Choose TNK">
      {/* Top heading on white */}
      <div className="py-14 text-center lg:py-20">
        <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2.5rem)] font-normal text-foreground">
          Why Choose True North Kromes?
        </h2>
        <p className="mt-2 text-sm tracking-wider text-muted-foreground">
          Our Services Can Help With
        </p>
        <ChevronDown className="mx-auto mt-3 h-5 w-5 text-foreground/40" aria-hidden="true" />
      </div>

      {/* Forest background with card overlay */}
      <div className="relative min-h-[500px] pb-16 lg:pb-24">
        <div className="absolute inset-0">
          <img
            src="/images/gallery-lab-wide.jpg"
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative mx-auto max-w-5xl px-5 pt-8 lg:pt-16">
          <div className="bg-white/95 backdrop-blur-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {reasons.map((reason, i) => (
                <div
                  key={reason.title}
                  className={`border border-border/60 p-7 lg:p-9 ${i >= 3 ? "" : ""}`}
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
