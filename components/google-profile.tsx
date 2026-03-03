"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function GoogleProfile() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-white py-20 lg:py-28" aria-label="Find Us">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 lg:px-8 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="mb-12 text-center font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-[#1e1e1e] text-balance">
          Find Us
        </h2>

        {/* Google Maps embed — PLACEHOLDER: Replace with actual Cochrane, AB location embed */}
        <div className="overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40127.88732689684!2d-114.52!3d51.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371550793bcd42f%3A0x3d42f418b44e040b!2sCochrane%2C%20AB!5e0!3m2!1sen!2sca!4v1709500000000!5m2!1sen!2sca"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="True North Kromes location in Cochrane, Alberta, Canada"
            className="w-full"
          />
        </div>

        {/* Google Reviews widget placeholder */}
        <div className="mt-8 rounded-lg border border-[#dcdcdc] bg-[#f2f2f2] p-8 text-center">
          <p className="text-base text-[#1e1e1e]/50">
            [PLACEHOLDER — Google Reviews widget to be embedded here before launch]
          </p>
        </div>
      </div>
    </section>
  )
}
