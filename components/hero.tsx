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
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/75 to-white/90" />
      </div>

      <div className="relative mx-auto flex min-h-[600px] max-w-5xl flex-col items-center justify-center px-8 text-center lg:min-h-[700px] lg:px-16">
        <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2.25rem,6vw,4rem)] font-normal leading-[1.1] text-[#1a1a1a]">
          Welcome to True North Kromes
        </h1>
        <p className="mt-6 max-w-2xl text-[clamp(1rem,1.5vw,1.25rem)] font-light leading-relaxed text-[#6b7280]">
          A Dental Lab Specializing in 3D Printing Metal Partial Denture Frameworks
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center border border-[#1a1a1a] bg-[#1a1a1a] px-10 py-3 text-sm font-medium tracking-wider text-white transition-all hover:bg-transparent hover:text-[#1a1a1a]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
