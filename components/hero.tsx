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
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(34,45,58,0.92)] via-[rgba(26,36,47,0.88)] to-[rgba(18,26,35,0.94)]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-5 pt-32 pb-24 lg:pt-40 lg:pb-36">
        <p className="text-sm font-medium uppercase tracking-widest text-white/50">
          True North Kromes
        </p>
        <h1 className="mt-3 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white">
          One-Stop Metal Printing Service
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 lg:text-lg lg:leading-relaxed">
          A fully integrated digital 3D-printing solution that transforms the
          way dental professionals design and manufacture partial dentures —
          delivering high precision, high efficiency, and significant cost savings.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-white px-7 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-chrome-light"
          >
            Email or Call Us Today
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center rounded-md border border-white/30 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-white/60 hover:bg-white/10"
          >
            Our Services
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/45">
          <a href="mailto:truenorthkromes@gmail.com" className="transition-colors hover:text-white/75">
            truenorthkromes@gmail.com
          </a>
          <span className="hidden h-4 w-px bg-white/25 sm:block" aria-hidden="true" />
          <a href="tel:+18076247222" className="transition-colors hover:text-white/75">
            (807) 624-7222
          </a>
        </div>
      </div>
    </section>
  )
}
