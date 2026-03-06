export function About() {
  return (
    <section className="bg-white pt-36 pb-24 lg:pt-44 lg:pb-32" aria-label="About TNK">
      <div className="grid lg:grid-cols-2">
        {/* Image -- flush to left edge like client */}
        <div className="flex items-center justify-center overflow-hidden bg-white">
          <img
            src="/images/palatal-plate.jpg"
            alt="Polished chrome palatal plate framework held in a blue glove"
            className="h-full w-auto object-contain"
            loading="lazy"
          />
        </div>

        {/* Text content */}
        <div className="px-8 py-12 lg:px-14 lg:py-16">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3vw,2.5rem)] font-normal text-foreground">
            Our Mission
          </h2>

          <hr className="mt-6 border-border" />

          <div className="mt-8 flex flex-col gap-5 text-[15px] leading-[1.85] text-muted-foreground">
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
    </section>
  )
}
