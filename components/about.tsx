export function About() {
  return (
    <section className="bg-background py-20 lg:py-28" aria-label="About TNK">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="chrome-card overflow-hidden rounded-lg border bg-card p-1">
            <img
              src="/images/team-selfie.jpg"
              alt="The True North Kromes team members in the laboratory"
              className="h-auto w-full rounded object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight text-foreground">
              About TNK
            </h2>

            <p className="mt-5 text-base leading-[1.8] text-muted-foreground">
              True North Kromes (TNK) provides complete support throughout the entire
              production cycle. Our workflow delivers high precision, high efficiency,
              and significant cost savings -- enabling laboratories and clinics to
              produce frameworks that are more accurate, consistent, and customized than
              ever before.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
