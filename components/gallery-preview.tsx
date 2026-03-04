import Link from "next/link"

const previewImages = [
  { src: "/images/gallery-polished-framework-gray.jpg", alt: "Polished chrome framework on gray background" },
  { src: "/images/gallery-finished-model-1.jpg", alt: "Finished framework seated on dental model" },
  { src: "/images/gallery-mesh-partial-1.jpg", alt: "Precision mesh partial denture framework" },
  { src: "/images/gallery-framework-standalone.jpg", alt: "Standalone chrome framework detail" },
  { src: "/images/gallery-finished-model-3.jpg", alt: "Completed framework on model" },
  { src: "/images/gallery-dlyte-sintering.jpg", alt: "DLyte sintering process in action" },
]

export function GalleryPreview() {
  return (
    <section className="bg-secondary py-20 lg:py-28" aria-label="Gallery Preview">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-[family-name:var(--font-heading)] text-center text-[clamp(1.5rem,3vw,2.5rem)] font-normal text-foreground">
          [Placeholder Heading]
        </h2>
        <p className="mt-2 text-center text-sm tracking-wider text-muted-foreground">
          [Placeholder subtitle]
        </p>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3">
          {previewImages.map((img, i) => (
            <div key={i} className="group overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center border border-foreground px-10 py-3 text-sm tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-white"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
