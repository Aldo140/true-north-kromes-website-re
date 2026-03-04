import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[540px] lg:min-h-[620px]" aria-label="Hero">
      <div className="absolute inset-x-4 inset-y-0 lg:inset-x-12">
        <img
          src="/images/printer-buildplate.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
      </div>

      {/* Left-aligned content -- not centered like every AI template */}
      <div className="relative mx-auto flex max-w-6xl flex-col justify-end px-8 pt-48 pb-16 lg:px-16 lg:pt-56 lg:pb-20">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
          Dental Lab / 3D Metal Printing
        </p>
        <h1 className="mt-4 max-w-xl font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] text-white">
          Precision-printed chrome frameworks
        </h1>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
          A fully integrated digital workflow that transforms how dental professionals manufacture partial dentures.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <Link
            href="/contact"
            className="bg-white px-7 py-3 text-sm font-medium tracking-wide text-foreground transition-colors hover:bg-white/90"
          >
            Work with us
          </Link>
          <Link
            href="/gallery"
            className="border-b border-white/40 pb-0.5 text-sm text-white/70 transition-colors hover:border-white hover:text-white"
          >
            See our work
          </Link>
        </div>
      </div>
    </section>
  )
}
