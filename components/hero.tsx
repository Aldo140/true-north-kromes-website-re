import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[520px] lg:min-h-[600px]" aria-label="Hero">
      <div className="absolute inset-x-4 inset-y-0 lg:inset-x-12">
        <img
          src="/images/printer-buildplate.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Left-aligned content instead of centered -- Fix #1 */}
      <div className="relative mx-auto flex max-w-5xl flex-col justify-end px-8 pt-44 pb-16 lg:px-16 lg:pt-56 lg:pb-20">
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white">
          True North Kromes
        </h1>
        <p className="mt-4 max-w-md text-[clamp(0.9rem,1.5vw,1.1rem)] font-normal leading-relaxed text-white/80">
          Precision 3D-printed metal partial denture frameworks
        </p>
        {/* Solid filled button -- Fix #3 */}
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center bg-white px-8 py-3 text-sm font-medium tracking-wider text-foreground transition-opacity hover:opacity-90"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
