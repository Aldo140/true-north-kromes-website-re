import Link from "next/link"

export function Hero() {
  return (
    <section className="relative" aria-label="Hero">
      <div className="relative w-full">
        <img
          src="/images/hero-framework.jpg"
          alt="Raw 3D printed metal partial denture framework"
          className="w-full h-auto"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/30" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-12">
            <h1 className="font-sans text-[clamp(1.75rem,5vw,4.5rem)] font-medium leading-[1.15] text-[#1a1a1a]">
              True North Kromes
            </h1>
            <p className="mt-3 max-w-md text-sm sm:text-base text-[#71717a]">
              A Dental Lab Specializing in 3D Printing Metal Partial Denture Frameworks
            </p>
            <Link
              href="/contact"
              className="mt-6 sm:mt-8 inline-block text-sm text-[#1a1a1a] border-b border-[#1a1a1a] pb-0.5 hover:text-[#71717a] hover:border-[#71717a]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
