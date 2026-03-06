import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px]" aria-label="Hero">
      <div className="absolute inset-0">
        <img
          src="/images/gallery-two-frameworks.jpg"
          alt="Precision 3D printed dental frameworks"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      <div className="relative mx-auto flex min-h-[600px] max-w-5xl flex-col items-center justify-center px-8 text-center lg:min-h-[700px] lg:px-16">
        <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2.25rem,6vw,4rem)] font-normal leading-[1.1] text-white">
          Welcome to True North Kromes
        </h1>
        <p className="mt-6 max-w-2xl text-[clamp(1rem,1.5vw,1.25rem)] font-light leading-relaxed text-white/90">
          A Dental Lab Specializing in 3D Printing Metal Partial Denture Frameworks
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center bg-white px-10 py-3 text-sm font-medium tracking-wider text-[#1a1a1a] transition-all hover:bg-white/90"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
