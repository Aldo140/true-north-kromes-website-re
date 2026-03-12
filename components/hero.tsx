import Link from "next/link"

export function Hero() {
  return (
    <section className="relative pt-[70px] sm:pt-[80px] lg:pt-[100px]" aria-label="Hero">
      <div className="relative w-full">
        <img
          src="/images/hero-framework.jpg"
          alt="Raw 3D printed metal partial denture framework"
          className="w-full h-auto"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/40" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-12">
            <h1 className="font-sans text-2xl sm:text-3xl lg:text-5xl font-medium leading-tight text-[#1a1a1a]">
              True North Kromes
            </h1>
            <p className="mt-3 max-w-sm text-sm sm:text-base text-[#52525b]">
              A Dental Lab Specializing in 3D Printing Metal Partial Denture Frameworks
            </p>
            <Link
              href="/contact"
              className="mt-5 sm:mt-6 inline-block text-sm text-[#1a1a1a] border-b border-[#1a1a1a] pb-0.5 hover:text-[#52525b] hover:border-[#52525b]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
