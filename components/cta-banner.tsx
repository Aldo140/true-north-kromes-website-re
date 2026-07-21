import Link from "next/link"
import { DrawRule, Reveal } from "@/components/motion-primitives"
import { MachinedLines, Magnetic } from "@/components/experience"
import { sitePath } from "@/lib/site-path"

export function CTABanner() {
  return (
    <section className="relative flex min-h-[34rem] items-end overflow-hidden bg-ink py-16 text-paper md:block md:min-h-0 md:py-24 lg:py-32" aria-label="Call to action">
      <div className="absolute inset-0 md:hidden" aria-hidden="true">
        <img
          src={sitePath("/images/opt/bg-finished-frame.jpg")}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute inset-5 border border-paper/10">
          <span className="absolute -left-px -top-px h-7 w-7 border-l border-t border-gold" />
          <span className="absolute -right-px -top-px h-7 w-7 border-r border-t border-gold" />
          <span className="absolute -bottom-px -left-px h-7 w-7 border-b border-l border-gold" />
          <span className="absolute -bottom-px -right-px h-7 w-7 border-b border-r border-gold" />
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-12">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.16em] text-gold md:hidden">
          CAD · SLM · PLASMA · IN-HOUSE
        </p>
        <DrawRule className="h-px bg-gold" />
        {/* Headline rises out of its channel like a face-mill pass */}
        <MachinedLines
          lines={["Send your first case."]}
          as="h2"
          className="mt-8 max-w-3xl text-balance font-sans text-[2.75rem] font-medium leading-[0.98] tracking-[-0.03em] sm:mt-12 md:text-[clamp(2rem,4.5vw,3.5rem)] md:leading-normal md:tracking-[-0.02em]"
        />
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-xl text-base text-paper/65 sm:text-lg">
            Volume pricing, personal upload link, support through the whole production cycle.
          </p>
          {/* Button leans toward the cursor — a part pulled into registration */}
          <Magnetic className="mt-8 sm:mt-10">
            <Link
              href="/contact"
              className="inline-flex min-h-14 w-full items-center justify-between border border-paper bg-paper px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-ink transition-colors active:bg-transparent active:text-paper sm:w-auto sm:justify-center sm:px-8 md:min-h-12 md:hover:bg-transparent md:hover:text-paper"
            >
              Start a case
              <span aria-hidden="true" className="text-base sm:hidden">→</span>
            </Link>
          </Magnetic>
          <ul className="mt-6 flex items-center justify-between border-t border-paper/15 pt-4 font-mono text-[8px] uppercase tracking-[0.14em] text-paper/55 md:hidden" aria-label="In-house services">
            <li>CAD design</li>
            <li>SLM printing</li>
            <li>Plasma finish</li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
