"use client"

import { useState } from "react"
import { X } from "lucide-react"

const categories = ["All", "[Placeholder]", "[Placeholder]", "[Placeholder]"]

const images = [
  { src: "/images/framework-polished.jpg", alt: "[Placeholder]", category: "[Placeholder]" },
  { src: "/images/framework-detail.jpg", alt: "[Placeholder]", category: "[Placeholder]" },
  { src: "/images/framework-full.jpg", alt: "[Placeholder]", category: "[Placeholder]" },
  { src: "/images/framework-clasps.jpg", alt: "[Placeholder]", category: "[Placeholder]" },
  { src: "/images/framework-clasps2.jpg", alt: "[Placeholder]", category: "[Placeholder]" },
  { src: "/images/framework-lower.jpg", alt: "[Placeholder]", category: "[Placeholder]" },
  { src: "/images/framework-profile.jpg", alt: "[Placeholder]", category: "[Placeholder]" },
  { src: "/images/framework-overhead.jpg", alt: "[Placeholder]", category: "[Placeholder]" },
  { src: "/images/palatal-framework.jpg", alt: "[Placeholder]", category: "[Placeholder]" },
  { src: "/images/palatal-plate.jpg", alt: "[Placeholder]", category: "[Placeholder]" },
  { src: "/images/framework-raw.jpg", alt: "[Placeholder]", category: "[Placeholder]" },
  { src: "/images/printer-buildplate.jpg", alt: "[Placeholder]", category: "[Placeholder]" },
  { src: "/images/printer-window.jpg", alt: "[Placeholder]", category: "[Placeholder]" },
  { src: "/images/printer-branded.jpg", alt: "[Placeholder]", category: "[Placeholder]" },
  { src: "/images/dlyte-polishing.jpg", alt: "[Placeholder]", category: "[Placeholder]" },
  { src: "/images/polishing-process.jpg", alt: "[Placeholder]", category: "[Placeholder]" },
  { src: "/images/powder-bed.jpg", alt: "[Placeholder]", category: "[Placeholder]" },
  { src: "/images/team-selfie.jpg", alt: "[Placeholder]", category: "[Placeholder]" },
  { src: "/images/team-lab.jpg", alt: "[Placeholder]", category: "[Placeholder]" },
  { src: "/images/team-building.jpg", alt: "[Placeholder]", category: "[Placeholder]" },
  { src: "/images/lab-facility.jpg", alt: "[Placeholder]", category: "[Placeholder]" },
]

export default function GalleryPage() {
  const [filter, setFilter] = useState("All")
  const [lightbox, setLightbox] = useState<string | null>(null)

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter)

  return (
    <>
      <section className="bg-white pt-44 pb-20 lg:pt-52 lg:pb-28">
        <div className="mx-auto max-w-6xl px-5">
          <h1 className="text-center text-[clamp(1.75rem,3.5vw,2.5rem)] font-light text-foreground">
            Gallery
          </h1>
          <p className="mt-2 text-center text-sm tracking-wider text-muted-foreground">
            [Placeholder subtitle]
          </p>

          {/* Filter tabs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`border px-6 py-2 text-sm tracking-wider transition-colors ${
                  filter === cat
                    ? "border-foreground bg-foreground text-white"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image grid */}
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((img, i) => (
              <button
                key={img.src + i}
                onClick={() => setLightbox(img.src)}
                className="group overflow-hidden focus:outline-none"
                aria-label={`View ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 text-white/80 hover:text-white"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightbox}
            alt="Enlarged view"
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
