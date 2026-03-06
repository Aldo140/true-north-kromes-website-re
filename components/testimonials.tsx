import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "The fit and finish on these frameworks is exceptional. TNK has become our go-to for all partial denture cases.",
    name: "Partner Lab",
    role: "Dental Laboratory",
  },
  {
    quote: "Fast turnaround and consistent quality. The digital workflow has streamlined our entire process.",
    name: "Partner Clinic",
    role: "Denture Clinic",
  },
  {
    quote: "Finally, frameworks that fit right the first time. The precision of 3D printing makes a real difference.",
    name: "Partner Lab",
    role: "Dental Laboratory",
  },
]

export function Testimonials() {
  return (
    <section className="bg-white py-24 lg:py-32" aria-label="Testimonials">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2.5rem)] font-light text-foreground">
          What Our Partners Say
        </h2>
        <p className="mt-3 text-center text-sm tracking-wider text-muted-foreground">
          TRUSTED BY DENTAL PROFESSIONALS
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-border bg-background p-10">
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-accent text-accent"
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
