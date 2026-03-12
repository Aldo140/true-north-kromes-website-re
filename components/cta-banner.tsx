import Link from "next/link"

export function CTABanner() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28" aria-label="Call to action">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-12 text-center">
        <h2 className="font-sans text-[clamp(1.5rem,3vw,2.5rem)] font-medium text-[#1a1a1a]">
          Ready to streamline your workflow?
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#71717a]">
          Email or call us today to get started with TNK.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/contact"
            className="text-sm text-[#1a1a1a] border-b border-[#1a1a1a] pb-0.5 hover:text-[#71717a] hover:border-[#71717a]"
          >
            Contact Us
          </Link>
          <a
            href="tel:+18076247222"
            className="text-sm text-[#71717a] hover:text-[#1a1a1a]"
          >
            807.624.7222
          </a>
        </div>
      </div>
    </section>
  )
}
