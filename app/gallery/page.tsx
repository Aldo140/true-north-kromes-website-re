"use client"

import { useState } from "react"
import { X } from "lucide-react"

const images = [
  { src: "/images/gallery-polished-framework-gray.jpg", alt: "[Placeholder]" },
  { src: "/images/gallery-finished-model-1.jpg", alt: "[Placeholder]" },
  { src: "/images/gallery-finished-model-2.jpg", alt: "[Placeholder]" },
  { src: "/images/gallery-finished-model-3.jpg", alt: "[Placeholder]" },
  { src: "/images/gallery-finished-model-4.jpg", alt: "[Placeholder]" },
  { src: "/images/gallery-raw-print-batch.jpg", alt: "[Placeholder]" },
  { src: "/images/gallery-raw-print-detail.jpg", alt: "[Placeholder]" },
  { src: "/images/gallery-raw-print-supports.jpg", alt: "[Placeholder]" },
  { src: "/images/gallery-dlyte-sintering.jpg", alt: "[Placeholder]" },
  { src: "/images/gallery-dlyte-operator.jpg", alt: "[Placeholder]" },
  { src: "/images/gallery-dlyte-polishing-action.jpg", alt: "[Placeholder]" },
  { src: "/images/gallery-grillz-full.jpg", alt: "[Placeholder]" },
  { src: "/images/gallery-lab-wide.jpg", alt: "[Placeholder]" },
]

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <>
      <section className="bg-white pt-44 pb-20 lg:pt-52 lg:pb-28">
        <div className="mx-auto max-w-6xl px-8 lg:px-16">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground/60">
            Our work
          </p>
          <h1 className="mt-3 font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] text-foreground">
            Gallery
          </h1>

          {/* Image grid */}
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {images.map((img, i) => (
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
