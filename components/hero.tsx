import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px]" aria-label="Hero">
      <div className="absolute inset-0">
        <img
          src="/images/gallery-two-frameworks.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/70 to-white/95" />
      </div>

      {/* Left-aligned content */}
      <div className="relative mx-auto flex min-h-[600px] max-w-5xl flex-col justify-end px-8 pb-16 lg:min-h-[700px] lg:px-16 lg:pb-24">
        <h1 className="font-[family-name:var(--font-heading)] text-center text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.1] text-[#1a1d21] lg:text-left">
          Welcome to True North Kromes
        </h1>
        <p className="mt-6 max-w-lg text-center text-[clamp(0.95rem,1.5vw,1.15rem)] font-light leading-relaxed text-[#5a6875] lg:text-left">
          A Dental Lab Specializing in 3D Printing Metal Partial Denture Frameworks
        </p>
        <div className="mt-10 flex justify-center lg:justify-start">
          <Link
            href="/contact"
            className="inline-flex items-center border border-[#5a6875] bg-[#5a6875] px-10 py-3 text-sm font-medium tracking-wider text-white transition-all hover:bg-transparent hover:text-[#5a6875]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
