export function About() {
  return (
    <section className="bg-white py-28 lg:py-36" aria-label="About TNK">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="flex items-center justify-center overflow-hidden">
            <img
              src="/images/palatal-plate.jpg"
              alt="Polished chrome palatal plate framework held in a blue glove"
              className="h-auto w-full max-w-md object-contain lg:max-w-none"
              loading="lazy"
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium tracking-[0.3em] text-[#6b6b6b] uppercase">About Us</p>
            <h2 className="font-[family-name:var(--font-heading)] mt-4 text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] text-[#1a1a1a]">
              Our <span className="italic">mission</span>
            </h2>

            <div className="mt-8 flex flex-col gap-6 text-[15px] leading-[1.9] text-[#6b6b6b]">
              <p>
                True North Kromes was established to address the need for superior partial
                denture frames that truly meet the needs of patients. With a foundation
                built on the combined expertise of a Denturist and a Lab Technologist, we
                have a deep understanding of the challenges faced by both dental labs and
                clinicians.
              </p>
              <p>
                We specialize in one thing, and one thing only — partial denture
                frameworks. By narrowing our focus, we have been able to hone our craft
                and develop solutions that are tailored specifically to this area of dental
                technology. Our goal is simple yet powerful: to help both current and
                future customers utilize the full potential of technology to streamline their
                processes and improve the quality of care they provide to their patients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
