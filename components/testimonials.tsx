import { DrawRule, Reveal } from "@/components/motion-primitives"

/* Not wired into any page yet — no real client quotes exist to show.
   Pass real testimonials in via the `testimonials` prop once you have them
   (name + lab/title + quote), then drop <Testimonials items={...} /> into
   About or the homepage. */

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export function Testimonials({ items }: { items: Testimonial[] }) {
  if (items.length === 0) return null

  return (
    <section className="bg-paper py-20 sm:py-24 lg:py-28" aria-label="Client testimonials">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-dim">
          What clients say
        </p>
        <div className="mt-10 grid gap-x-10 gap-y-12 lg:grid-cols-2">
          {items.map((t, i) => (
            <div key={t.name}>
              <DrawRule className="h-px bg-line-dark" delay={i * 0.1} />
              <Reveal y={12} delay={i * 0.1 + 0.1} amount={0.3}>
                <blockquote className="mt-6 max-w-[52ch] text-balance font-sans text-lg leading-relaxed text-ink sm:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
                  {t.name} · {t.role}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
