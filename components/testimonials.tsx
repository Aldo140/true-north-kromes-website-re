import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "[Placeholder -- client testimonial goes here. Ask client for real reviews from their customers.]",
    name: "[Placeholder Name]",
    role: "[Placeholder Title]",
  },
  {
    quote: "[Placeholder -- client testimonial goes here. Ask client for real reviews from their customers.]",
    name: "[Placeholder Name]",
    role: "[Placeholder Title]",
  },
  {
    quote: "[Placeholder -- client testimonial goes here. Ask client for real reviews from their customers.]",
    name: "[Placeholder Name]",
    role: "[Placeholder Title]",
  },
]

export function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-label="Testimonials">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2.5rem)] font-light text-foreground">
          [Placeholder Heading]
        </h2>
        <p className="mt-2 text-center text-sm tracking-wider text-muted-foreground">
          [Placeholder subtitle]
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-border p-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-[#8a9aab] text-[#8a9aab]"
                  />
                ))}
              </div>
              <blockquote className="mt-5 text-sm italic leading-relaxed text-muted-foreground">
                {`"${t.quote}"`}
              </blockquote>
              <div className="mt-6">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
