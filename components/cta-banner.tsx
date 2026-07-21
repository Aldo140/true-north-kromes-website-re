import Link from "next/link"
import { DrawRule, Reveal } from "@/components/motion-primitives"
import { MachinedLines, Magnetic } from "@/components/experience"

export function CTABanner() {
  return (
    <section className="bg-ink py-16 text-paper md:py-24 lg:py-32" aria-label="Call to action">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
        <DrawRule className="h-px bg-gold" />
        {/* Headline rises out of its channel like a face-mill pass */}
        <MachinedLines
          lines={["Send your first case."]}
          as="h2"
          className="mt-10 max-w-3xl text-balance font-sans text-[clamp(2rem,4.5vw,3.5rem)] font-medium tracking-[-0.02em] sm:mt-12"
        />
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-xl text-base text-paper/65 sm:text-lg">
            Volume pricing, personal upload link, support through the whole production cycle.
          </p>
          {/* Button leans toward the cursor — a part pulled into registration */}
          <Magnetic className="mt-10">
            <Link
              href="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center border border-paper bg-paper px-8 py-4 font-mono text-xs uppercase tracking-[0.18em] text-ink transition-colors hover:bg-transparent hover:text-paper sm:w-auto"
            >
              Start a case
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  )
}
