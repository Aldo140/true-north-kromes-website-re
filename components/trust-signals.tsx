export function TrustSignals() {
  return (
    <section className="border-y border-border bg-secondary py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-8 lg:px-16">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          {/* Tech stack */}
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-10">
            <p className="text-xs font-medium tracking-[0.15em] text-muted-foreground">
              POWERED BY
            </p>
            <div className="flex items-center gap-8">
              {/* Placeholder logos -- client to supply actual equipment brand logos */}
              <div className="flex h-8 items-center text-sm font-medium text-muted-foreground">
                [3D Printer Brand]
              </div>
              <div className="h-6 w-px bg-border" />
              <div className="flex h-8 items-center text-sm font-medium text-muted-foreground">
                [DLyte Logo]
              </div>
              <div className="h-6 w-px bg-border" />
              <div className="flex h-8 items-center text-sm font-medium text-muted-foreground">
                [CAD Software]
              </div>
            </div>
          </div>

          {/* Key stat */}
          <div className="text-center lg:text-right">
            <p className="text-xs font-medium tracking-[0.15em] text-muted-foreground">
              TRUSTED BY
            </p>
            <p className="mt-1 text-lg font-semibold text-foreground">
              [X]+ Dental Practices Across Canada
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
