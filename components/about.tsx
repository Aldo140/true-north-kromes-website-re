export function About() {
  return (
    <section className="bg-white py-28 lg:py-40" aria-label="About TNK">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid gap-20 lg:grid-cols-12 lg:gap-24">
          {/* Image - smaller left side */}
          <div className="lg:col-span-4 lg:row-span-2 flex items-center">
            <img
              src="/images/palatal-plate.jpg"
              alt="Polished chrome palatal plate framework held in a blue glove"
              className="h-auto w-full object-contain"
              loading="lazy"
            />
          </div>

          {/* Text content - larger right side */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a1a1aa]">
                Our Story
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.02em] text-[#1a1a1a]">
                Our Mission
              </h2>
            </div>

            <div className="space-y-6 text-base leading-[1.8] text-[#71717a]">
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
