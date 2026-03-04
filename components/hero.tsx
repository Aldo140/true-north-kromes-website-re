import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[500px] lg:min-h-[580px]" aria-label="Hero">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/printer-buildplate.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-center px-5 pt-44 pb-28 text-center lg:pt-56 lg:pb-36">
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white text-balance">
          Welcome to True North Kromes
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 lg:text-lg lg:leading-relaxed">
          A Dental Lab Specializing in 3D Printing Metal Partial Denture Frameworks
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-sm border border-white bg-white px-8 py-3 text-sm font-medium tracking-wide text-foreground transition-colors hover:bg-transparent hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
