export function About() {
  return (
    <section className="bg-background py-20 lg:py-28" aria-label="About TNK">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden">
            <img
              src="/images/palatal-plate.jpg"
              alt="Polished chrome palatal plate framework held in a blue glove"
              className="h-auto w-full rounded object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight text-foreground">
              Our Mission
            </h2>

            <hr className="mt-4 border-border" />

            <div className="mt-6 flex flex-col gap-4 text-base leading-[1.8] text-muted-foreground">
              <p>
                True North Kromes was established to address the need for superior partial
                denture frames that truly meet the needs of patients. With a foundation
                built on the combined expertise of a Denturist and a Lab Technologist, we
                have a deep understanding of the challenges faced by both dental labs and
                clinicians. This unique blend of experience allows us to bridge the gap
                between these two crucial areas of dental care, ensuring we deliver
                products that not only meet but exceed expectations.
              </p>
              <p>
                We specialize in one thing, and one thing only — partial denture
                frameworks. By narrowing our focus, we have been able to hone our craft
                and develop solutions that are tailored specifically to this area of dental
                technology. Our goal is simple yet powerful: to help both current and
                future customers utilize the full potential of technology to streamline their
                processes, increase efficiency, and ultimately improve the quality of care
                they provide to their patients. We are committed to staying at the
                forefront of innovation in denture technology, ensuring that our clients are
                equipped with the best tools available to enhance both their workflow and
                the outcomes they deliver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
