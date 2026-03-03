"use client"

import { useState, useCallback, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const galleryImages = [
  { id: 1, src: "/images/framework-polished.jpg", alt: "Polished upper palatal framework on dental model" },
  { id: 2, src: "/images/framework-clasps.jpg", alt: "Upper framework with clasps on dental model" },
  { id: 3, src: "/images/framework-detail.jpg", alt: "Detailed partial denture framework on model" },
  { id: 4, src: "/images/framework-overhead.jpg", alt: "Framework overhead view showing retention mesh" },
  { id: 5, src: "/images/framework-full.jpg", alt: "Full upper framework with retention and clasps" },
  { id: 6, src: "/images/framework-clasps2.jpg", alt: "Framework with clasps on dental model" },
  { id: 7, src: "/images/chrome-crowns.jpg", alt: "Chrome metal crowns on dental model" },
  { id: 8, src: "/images/lower-partial.jpg", alt: "Finished lower partial denture framework" },
  { id: 9, src: "/images/palatal-framework.jpg", alt: "Palatal framework close-up showing detail" },
  { id: 10, src: "/images/grillz.jpg", alt: "Custom metal dental grillz on model" },
  { id: 11, src: "/images/framework-raw.jpg", alt: "Raw 3D printed framework before finishing" },
  { id: 12, src: "/images/printer-buildplate.jpg", alt: "Build plate with frameworks next to NCL-M150 printer" },
  { id: 13, src: "/images/printer-branded.jpg", alt: "True North Kromes build plate in 3D printer" },
  { id: 14, src: "/images/printer-window.jpg", alt: "View through 3D metal printer during printing" },
  { id: 15, src: "/images/team-lab.jpg", alt: "True North Kromes team in the lab" },
]

export function Gallery() {
  const { ref, isVisible } = useScrollAnimation()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length)
    }
  }, [lightboxIndex])

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + galleryImages.length) % galleryImages.length
      )
    }
  }, [lightboxIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxIndex, goNext, goPrev])

  return (
    <section className="bg-background py-16 lg:py-24" aria-label="Our Work Gallery">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group aspect-square overflow-hidden rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`View ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 text-white/70 transition-colors hover:text-white"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[90vw] rounded object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/60">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  )
}
