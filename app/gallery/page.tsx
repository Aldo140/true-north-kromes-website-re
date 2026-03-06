"use client"

import { useState } from "react"
import { X } from "lucide-react"

const images: { src: string; alt: string }[] = [
  // Row 1: Best finished work variety
  { src: "/images/gallery-upper-framework-acrylic-1.jpg", alt: "Upper framework with acrylic teeth on model" },
  { src: "/images/gallery-framework-closeup-1.jpg", alt: "Polished partial denture framework on dental model" },
  { src: "/images/gallery-grillz-polished.jpg", alt: "Polished metal grillz on dental model" },
  { src: "/images/gallery-denture-articulated-front.jpg", alt: "Articulated denture models - front view" },
  
  // Row 2: Mix of products and angles
  { src: "/images/gallery-upper-partial-blue-glove.jpg", alt: "Upper partial framework held with blue glove" },
  { src: "/images/gallery-lower-partial-model-1.jpg", alt: "Lower partial framework on dental model - front view" },
  { src: "/images/gallery-parada-grillz-1.jpg", alt: "Custom PARADA lettered grillz on model" },
  { src: "/images/gallery-framework-closeup-2.jpg", alt: "Polished upper partial framework on model" },
  
  // Row 3: More variety
  { src: "/images/gallery-mesh-tray.jpg", alt: "Perforated mesh tray framework - gloved hand" },
  { src: "/images/gallery-denture-articulated-side.jpg", alt: "Articulated denture models - side view" },
  { src: "/images/gallery-framework-gloved-1.jpg", alt: "Gloved hand holding polished partial framework" },
  { src: "/images/gallery-implant-bar-1.jpg", alt: "Implant bar with screw holes - gloved hand" },
  
  // Row 4: Different subjects
  { src: "/images/gallery-lower-partial-model-2.jpg", alt: "Lower partial framework on dental model - side view" },
  { src: "/images/gallery-upper-framework-acrylic-2.jpg", alt: "Upper framework with acrylic saddles" },
  { src: "/images/gallery-dlyte-framework-1.jpg", alt: "Polished framework on DLyte machine arm" },
  { src: "/images/gallery-partial-framework-only.jpg", alt: "Polished partial framework - no model" },
  
  // Row 5: Continue variety
  { src: "/images/gallery-upper-partial-1.jpg", alt: "Upper partial framework with mesh retention" },
  { src: "/images/gallery-parada-grillz-2.jpg", alt: "PARADA grillz alternate angle" },
  { src: "/images/gallery-lower-partial-model-3.jpg", alt: "Lower partial framework on dental model - angled view" },
  { src: "/images/gallery-two-frameworks.jpg", alt: "Two polished frameworks with mesh retention" },
  
  // Row 6: Mix continued
  { src: "/images/gallery-implant-bar-2.jpg", alt: "Implant bar detail view" },
  { src: "/images/gallery-framework-gloved-2.jpg", alt: "Polished upper partial with clasps" },
  { src: "/images/gallery-mesh-tray-2.jpg", alt: "Perforated mesh tray framework - alternate angle" },
  { src: "/images/gallery-upper-framework-occlusal.jpg", alt: "Upper framework occlusal view on model" },
  
  // Row 7: More variety
  { src: "/images/gallery-dlyte-polishing.jpg", alt: "Frameworks in DLyte polishing bath" },
  { src: "/images/gallery-lower-partial-model-4.jpg", alt: "Lower partial framework on dental model - underside" },
  { src: "/images/gallery-partial-framework-only-2.jpg", alt: "Polished partial framework - alternate view" },
  { src: "/images/gallery-clasps-model.jpg", alt: "Metal clasps on dental model" },
  
  // Row 8: Different types
  { src: "/images/gallery-mesh-tray-3.jpg", alt: "Large perforated mesh tray framework" },
  { src: "/images/gallery-dlyte-operator-1.jpg", alt: "Technician operating DLyte mini polishing machine" },
  { src: "/images/gallery-lower-partial-model-5.jpg", alt: "Lower partial framework on dental model - occlusal view" },
  { src: "/images/gallery-framework-surface.jpg", alt: "Polished partial framework on surface" },
  
  // Row 9: Process and equipment
  { src: "/images/gallery-partial-framework-only-3.jpg", alt: "Polished partial framework with clasps" },
  { src: "/images/gallery-raw-framework-side.jpg", alt: "Raw printed framework with supports - side view" },
  { src: "/images/gallery-dlyte-framework-2.jpg", alt: "Polished framework on DLyte arm - alternate view" },
  { src: "/images/gallery-upper-partial-2.jpg", alt: "Upper partial framework detail view" },
  
  // Row 10: Raw prints and process
  { src: "/images/gallery-printer-window-1.jpg", alt: "Metal frameworks inside 3D printer chamber" },
  { src: "/images/gallery-raw-framework-supports.jpg", alt: "Raw printed framework with support structures" },
  { src: "/images/gallery-dlyte-operator-2.jpg", alt: "Technician using DLyte mini controls" },
  { src: "/images/gallery-raw-horseshoe.jpg", alt: "Raw horseshoe framework with supports" },
  
  // Row 11: Equipment and lab
  { src: "/images/gallery-build-plate-printer.jpg", alt: "Build plate with multiple frameworks in printer" },
  { src: "/images/gallery-raw-build-plate.jpg", alt: "Raw printed build plate with framework supports" },
  { src: "/images/gallery-printer-window-2.jpg", alt: "Frameworks being handled inside printer" },
  { src: "/images/gallery-lab-chamlion.jpg", alt: "Full lab view with Chamlion 3D printers" },
  
  // Row 12: Final row - lab and team
  { src: "/images/gallery-printer-chamber.jpg", alt: "3D printer chamber view" },
  { src: "/images/gallery-team-lab.jpg", alt: "TNK team in the lab with Chamlion printer" },
  { src: "/images/gallery-technician-printer.jpg", alt: "Technician holding build plate at NCL-M150 printer" },
  { src: "/images/gallery-team-building.jpg", alt: "Team outside TNK building entrance" },
]

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <>
      <section className="bg-white pt-44 pb-20 lg:pt-52 lg:pb-28">
        <div className="mx-auto max-w-6xl px-5">
          <h1 className="font-[family-name:var(--font-heading)] text-center text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-foreground">
            Gallery
          </h1>
          <p className="mt-2 text-center text-sm tracking-wider text-muted-foreground">
            [Placeholder subtitle]
          </p>

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
