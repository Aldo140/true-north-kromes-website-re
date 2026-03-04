"use client"

import { useCallback, useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const teamImages = [
  {
    src: "/images/team-selfie.jpg",
    alt: "Three True North Kromes team members posing together in the workshop",
  },
  {
    src: "/images/team-lab.jpg",
    alt: "The True North Kromes team standing in the lab alongside equipment",
  },
  {
    src: "/images/team-building.jpg",
    alt: "The True North Kromes team outside the building entrance",
  },
]

export function About() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const onSelect = useCallback(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
  }, [api])

  useEffect(() => {
    if (!api) return
    onSelect()
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api, onSelect])

  return (
    <section className="bg-background py-20 lg:py-28" aria-label="About TNK">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="chrome-card overflow-hidden rounded-lg border bg-card p-1">
            <Carousel
              setApi={setApi}
              opts={{ loop: true }}
              plugins={[
                Autoplay({ delay: 5000, stopOnInteraction: false }),
              ]}
              className="w-full"
            >
              <CarouselContent className="ml-0">
                {teamImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-0">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="aspect-[4/3] w-full rounded object-cover"
                      loading={index === 0 ? undefined : "lazy"}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="flex items-center justify-center gap-2 py-3">
                {teamImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === index
                        ? "w-6 bg-accent"
                        : "w-2 bg-chrome-mid hover:bg-chrome-dark"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </Carousel>
          </div>

          <div>
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight text-foreground">
              Our Mission
            </h2>

            <div className="mt-5 flex flex-col gap-4 text-base leading-[1.8] text-muted-foreground">
              <p>
                True North Kromes was established to address the need for superior partial
                denture frames that truly meet the needs of patients. With a foundation
                built on the combined expertise of a Denturist and a Lab Technologist, we
                have a deep understanding of the challenges faced by both dental labs and
                clinicians. This unique blend of experience allows us to bridge the gap
                between these two crucial areas of dental care, ensuring we deliver
                products that not only meet but exceed expectations.
              </p>
              <p>
                We specialize in one thing, and one thing only — partial denture
                frameworks. By narrowing our focus, we have been able to hone our craft
                and develop solutions that are tailored specifically to this area of dental
                technology. Our goal is simple yet powerful: to help both current and
                future customers utilize the full potential of technology to streamline their
                processes, increase efficiency, and ultimately improve the quality of care
                they provide to their patients. We are committed to staying at the
                forefront of innovation in denture technology, ensuring that our clients are
                equipped with the best tools available to enhance both their workflow and
                the outcomes they deliver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
