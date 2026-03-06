const reasons = [
  {
    title: "Digital-First Workflow",
    description: "Submit STL files directly through our portal. No physical impressions required for most cases.",
  },
  {
    title: "Chrome Cobalt Alloy",
    description: "Medical-grade chrome cobalt for superior strength, biocompatibility, and corrosion resistance.",
  },
  {
    title: "Consistent Fit",
    description: "3D printing eliminates casting variables. Every framework matches your digital design exactly.",
  },
  {
    title: "Fast Turnaround",
    description: "Standard cases returned within [X] business days. Rush service available for urgent cases.",
  },
  {
    title: "DLyte Finishing",
    description: "Electropolishing technology delivers mirror-smooth surfaces impossible with traditional methods.",
  },
  {
    title: "Technical Support",
    description: "Questions about design or specs? Our team is available to consult on complex cases.",
  },
]

export function WhyTNK() {
  return (
    <section className="bg-white" aria-label="Why Choose TNK">
      {/* Left-aligned heading -- Fix #1, no chevron -- Fix #4 */}
      <div className="mx-auto max-w-5xl px-5 pt-16 pb-6 lg:pt-24 lg:pb-10">
        <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground">
          WHY CHOOSE US
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2.5rem)] font-normal text-foreground">
          Why True North Kromes?
        </h2>
      </div>

      {/* Lab background with asymmetric card grid -- Fix #5 */}
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
            {/* 2-column top row, full-width bottom -- Fix #5 breaks grid symmetry */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {reasons.slice(0, 4).map((reason) => (
                <div
                  key={reason.title}
                  className="border border-border/40 p-7 lg:p-9"
                >
                  <h3 className="text-base font-semibold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {reasons.slice(4).map((reason) => (
                <div
                  key={reason.title}
                  className="border border-border/40 p-7 lg:p-9"
                >
                  <h3 className="text-base font-semibold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
