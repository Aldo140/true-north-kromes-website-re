import Link from "next/link"

const previewImages = [
  "/images/recent-work-1.jpg",
  "/images/recent-work-2.jpg",
  "/images/recent-work-3.jpg",
  "/images/recent-work-4.jpg",
]

export function GalleryPreview() {
  return (
    <section className="bg-[#fafafa] py-16 sm:py-20 lg:py-28" aria-label="Gallery Preview">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
        <div className="flex items-end justify-between">
          <h2 className="font-sans text-[clamp(1.5rem,3vw,2.5rem)] font-medium text-[#1a1a1a]">
            Recent Work
          </h2>
          <Link
            href="/gallery"
            className="text-sm text-[#71717a] hover:text-[#1a1a1a]"
          >
            View All
          </Link>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
          {previewImages.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden">
              <img
                src={src}
                alt="Framework"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
