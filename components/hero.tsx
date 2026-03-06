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
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
        
        {/* Content overlay - left aligned for editorial feel */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-8 lg:px-12">
            <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-[#1a1a1a]">
              True North<br />Kromes
            </h1>
            <p className="mt-5 max-w-md text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed text-[#71717a]">
              A Dental Lab Specializing in 3D Printing Metal Partial Denture Frameworks
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center border-b border-[#1a1a1a] pb-1 text-sm font-medium tracking-wide text-[#1a1a1a] transition-all hover:border-[#71717a] hover:text-[#71717a]"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
