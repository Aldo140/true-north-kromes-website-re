"use client"

import { Reveal } from "@/components/motion-primitives"

const videos = [
  {
    id: "UeDTzSWzHEk",
    title: "iOS scan repair with medit design",
    description:
      "A simple instructional video just to show you what is possible within the medit ecosystem to repair scans that may have some issues.",
  },
  {
    id: "Y5asA4FIYoQ",
    title: "Scanning with an impression to fix problem extension areas",
    description:
      "Here's a video showing how to use the impression scan button within the medit ecosystem.",
  },
]

/** Gold L-corner brackets locking onto a monitor frame. */
function MonitorBrackets() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute -inset-px z-10">
      <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-gold" />
      <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-gold" />
      <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-gold" />
      <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-gold" />
    </div>
  )
}

export function VideoSection() {
  return (
    <section
      className="bg-ink py-16 text-paper md:py-24 lg:py-28"
      aria-label="Process videos"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
        {/* Monitoring-station header row */}
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
            Station feed · Medit ecosystem
          </p>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-paper/40 sm:block">
            Scan workflow · 02 feeds
          </span>
        </div>
        <h2 className="mt-4 text-balance font-sans text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.02em] text-paper">
          Process Videos
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2 lg:gap-14">
          {videos.map((video, i) => (
            <Reveal key={video.id} y={20} delay={i * 0.12} amount={0.2}>
              <figure className="flex flex-col">
                {/* Bracketed monitor frame: mono caption bar + feed */}
                <div className="relative">
                  <MonitorBrackets />
                  <div className="border border-line bg-ink-soft">
                    <div className="flex items-baseline justify-between gap-4 border-b border-line px-4 py-2.5">
                      <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
                        {`Video ${String(i + 1).padStart(2, "0")}`}
                      </span>
                      <h3 className="text-right font-mono text-[11px] uppercase tracking-[0.18em] text-paper/70">
                        {video.title}
                      </h3>
                    </div>
                    <div className="aspect-video w-full overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <figcaption className="mt-4">
                  <p className="max-w-[52ch] text-sm leading-relaxed text-paper/70">
                    {video.description}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
