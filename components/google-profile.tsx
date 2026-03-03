"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function GoogleProfile() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="border-t border-border bg-secondary py-20 lg:py-28" aria-label="Find Us">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Location
          </p>
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight text-foreground text-balance">
            Find Us
          </h2>
        </div>

        <div className="overflow-hidden rounded-lg border border-border shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40127.88732689684!2d-114.52!3d51.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371550793bcd42f%3A0x3d42f418b44e040b!2sCochrane%2C%20AB!5e0!3m2!1sen!2sca!4v1709500000000!5m2!1sen!2sca"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="True North Kromes location in Cochrane, Alberta, Canada"
            className="w-full"
          />
        </div>

        <div className="mt-6 rounded border border-border bg-card p-6 text-center">
          <p className="text-sm text-muted-foreground">
            [PLACEHOLDER -- Google Reviews widget to be embedded here before launch]
          </p>
        </div>
      </div>
    </section>
  )
}
