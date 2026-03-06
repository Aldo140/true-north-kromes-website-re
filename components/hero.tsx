import Link from "next/link"

export function Hero() {
  return (
    <section className="relative" aria-label="Hero">
      {/* Image container - maintains natural aspect ratio */}
      <div className="relative w-full">
        <img
          src="/images/hero-framework.jpg"
          alt="Raw 3D printed metal partial denture framework"
          className="w-full h-auto"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/85" />
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2.25rem,6vw,4rem)] font-normal leading-[1.1] text-[#1a1a1a]">
            Welcome to True North Kromes
          </h1>
          <p className="mt-6 max-w-2xl text-[clamp(1rem,1.5vw,1.25rem)] font-light leading-relaxed text-[#9ca3af]">
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
      </div>
    </section>
  )
}
