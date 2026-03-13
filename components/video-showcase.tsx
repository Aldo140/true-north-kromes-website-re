export function VideoShowcase() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28" aria-label="Printer in action">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-12">
        <h2 className="font-sans text-[clamp(1.5rem,3vw,2.5rem)] font-medium text-[#1a1a1a]">
          3D Metal Printing in Action
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#71717a]">
          Watch our Chamlion NCL-M150 metal printer at work, creating precise partial denture frameworks with advanced 3D printing technology.
        </p>
        
        <div className="mt-8 sm:mt-10 w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-sm border border-[#e5e5e5]"
          >
            <source src="/videos/printer-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
