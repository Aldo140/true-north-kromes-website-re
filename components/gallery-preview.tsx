import Link from "next/link"

const previewImages = [
  { src: "/images/gallery-polished-framework-gray.jpg", alt: "[Placeholder]" },
  { src: "/images/gallery-finished-model-1.jpg", alt: "[Placeholder]" },
  { src: "/images/gallery-raw-print-batch.jpg", alt: "[Placeholder]" },
  { src: "/images/gallery-dlyte-operator.jpg", alt: "[Placeholder]" },
  { src: "/images/gallery-finished-model-3.jpg", alt: "[Placeholder]" },
]

export function GalleryPreview() {
  return (
    <section className="bg-white px-8 py-24 lg:px-16 lg:py-32" aria-label="Gallery Preview">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground/60">
              Recent work
            </p>
            <h2 className="mt-3 font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-foreground">
              [Placeholder Heading]
            </h2>
          </div>
          <Link
            href="/gallery"
            className="border-b border-foreground/30 pb-0.5 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            View all work
          </Link>
        </div>

        {/* Organic grid -- not a perfect uniform grid */}
        <div className="mt-12 grid grid-cols-6 gap-2">
          <div className="col-span-6 aspect-[16/9] overflow-hidden md:col-span-3">
            <img src={previewImages[0].src} alt={previewImages[0].alt} className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="col-span-3 aspect-square overflow-hidden md:col-span-3">
            <img src={previewImages[1].src} alt={previewImages[1].alt} className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="col-span-3 aspect-[4/3] overflow-hidden md:col-span-2">
            <img src={previewImages[2].src} alt={previewImages[2].alt} className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="col-span-6 aspect-[16/7] overflow-hidden md:col-span-2">
            <img src={previewImages[3].src} alt={previewImages[3].alt} className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="col-span-3 aspect-[4/3] overflow-hidden md:col-span-2">
            <img src={previewImages[4].src} alt={previewImages[4].alt} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
