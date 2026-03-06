import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[520px] lg:min-h-[600px]" aria-label="Hero">
      <div className="absolute inset-x-4 inset-y-0 lg:inset-x-12">
        <img
          src="/images/gallery-lab-chamlion.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Left-aligned content instead of centered -- Fix #1 */}
      <div className="relative mx-auto flex max-w-5xl flex-col justify-end px-8 pt-44 pb-16 lg:px-16 lg:pt-56 lg:pb-20">
        <h1 className="font-[family-name:var(--font-heading)] text-center text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.1] text-white lg:text-left">
          Welcome to True North Kromes
        </h1>
        <p className="mt-6 max-w-lg text-center text-[clamp(0.95rem,1.5vw,1.15rem)] font-light leading-relaxed text-white/80 lg:text-left">
          A Dental Lab Specializing in 3D Printing Metal Partial Denture Frameworks
        </p>
        <div className="mt-10 flex justify-center lg:justify-start">
          <Link
            href="/contact"
            className="inline-flex items-center border-2 border-[#c9a227] bg-transparent px-10 py-3 text-sm font-medium tracking-wider text-white transition-all hover:bg-[#c9a227] hover:text-[#1a1d21]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
