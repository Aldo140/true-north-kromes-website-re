import Link from "next/link"

export function Hero() {
  return (
    <section className="relative w-full aspect-video mt-[70px] sm:mt-0" aria-label="Hero">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/printer-demo.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="absolute inset-0 flex items-center">
        <div className="w-full px-5 sm:px-6 lg:px-12">
          <h1 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight text-white">
            True North Kromes
          </h1>
          <p className="mt-3 max-w-sm text-sm sm:text-base text-white/90">
            A Dental Lab Specializing in 3D Printing Metal Partial Denture Frameworks
          </p>
          <Link
            href="/contact"
            className="mt-5 sm:mt-6 inline-block text-sm text-white border-b border-white pb-0.5 hover:text-white/80 hover:border-white/80"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
