import Link from "next/link"

const previewImages = [
  { src: "/images/framework-polished.jpg", alt: "Polished chrome partial denture framework" },
  { src: "/images/framework-detail.jpg", alt: "Close-up detail of metal framework" },
  { src: "/images/framework-full.jpg", alt: "Full upper partial denture framework" },
  { src: "/images/framework-clasps.jpg", alt: "Framework with precision clasps" },
  { src: "/images/dlyte-polishing.jpg", alt: "DLyte electro-polishing process" },
  { src: "/images/printer-buildplate.jpg", alt: "3D printed frameworks on build plate" },
]

export function GalleryPreview() {
  return (
    <section className="bg-secondary py-20 lg:py-28" aria-label="Gallery Preview">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2.5rem)] font-light text-foreground">
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
