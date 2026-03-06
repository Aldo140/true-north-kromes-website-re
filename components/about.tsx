export function About() {
  return (
    <section className="bg-[#fafafa] pt-44 pb-24 lg:pt-52 lg:pb-32" aria-label="About TNK">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Image - takes up less space */}
          <div className="lg:col-span-5">
            <img
              src="/images/palatal-plate.jpg"
              alt="Polished chrome palatal plate framework held in a blue glove"
              className="h-auto w-full object-contain"
              loading="lazy"
            />
          </div>

          {/* Text content - larger area */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a1a1aa]">
              About Us
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.02em] text-[#1a1a1a]">
              Our Mission
            </h2>

            <div className="mt-10 flex flex-col gap-6 text-[15px] leading-[1.85] text-[#71717a]">
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
