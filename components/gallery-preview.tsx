import Link from "next/link"

const previewImages = [
  { src: "/images/gallery-polished-framework-gray.jpg", alt: "[Placeholder]", span: "row-span-2" },
  { src: "/images/gallery-finished-model-1.jpg", alt: "[Placeholder]", span: "" },
  { src: "/images/gallery-raw-print-batch.jpg", alt: "[Placeholder]", span: "" },
  { src: "/images/gallery-dlyte-operator.jpg", alt: "[Placeholder]", span: "row-span-2" },
  { src: "/images/gallery-finished-model-3.jpg", alt: "[Placeholder]", span: "" },
  { src: "/images/gallery-dlyte-sintering.jpg", alt: "[Placeholder]", span: "" },
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

        <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-3">
          {previewImages.map((img, i) => (
            <div
              key={i}
              className={`group overflow-hidden ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
