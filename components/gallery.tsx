"use client"

import { useState, useCallback, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

{/* 63 placeholder images — replace with actual lab photography */}
const galleryImages = Array.from({ length: 63 }, (_, i) => ({
  id: i + 1,
  src: "/images/gallery-1.jpg",
  alt: `Dental framework sample ${i + 1}`,
}))

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
    <section id="gallery" className="bg-[#2a2a2a] py-20 lg:py-28" aria-label="Our Work Gallery">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 lg:px-8 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="mb-12 text-center font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-white text-balance">
          Our Work
        </h2>

        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group aspect-square overflow-hidden rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e6fff]"
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
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
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
