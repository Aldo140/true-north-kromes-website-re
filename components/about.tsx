export function About() {
  return (
    <section className="bg-[#f8f9fa] py-20 lg:py-28" aria-label="About TNK">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src="/images/palatal-plate.jpg"
              alt="Polished chrome palatal plate framework held in a blue glove"
              className="h-auto w-full max-w-md object-contain"
              loading="lazy"
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,4vw,2.5rem)] font-normal text-[#1a1a1a]">
              Our Mission
            </h2>

            <div className="mt-6 h-px w-20 bg-border" />

            <div className="mt-8 flex flex-col gap-5 text-[15px] leading-[1.8] text-[#9ca3af]">
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
                We specialize in one thing, and one thing only—partial denture
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
