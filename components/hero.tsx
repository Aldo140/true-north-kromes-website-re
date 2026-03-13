import Link from "next/link"

export function Hero() {
  return (
    <section className="relative pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20" aria-label="Hero">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-12">
        <div className="relative w-full overflow-hidden rounded-lg aspect-video bg-gray-100">
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
          
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/40" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-5 sm:px-8">
              <h1 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight text-[#1a1a1a]">
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
      </div>
    </section>
  )
}
