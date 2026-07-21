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
      className="bg-ink py-14 text-paper md:py-24 lg:py-28"
      aria-label="Process videos"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
        <div className="md:hidden">
          <div className="flex items-center gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-gold">
              Station feed / Medit ecosystem
            </p>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </div>
          <h2 className="mt-5 max-w-[9ch] text-balance text-[2.4rem] font-semibold leading-[0.95] tracking-[-0.035em]">
            Process Videos
          </h2>

          <div className="-mx-5 mt-9 flex snap-x snap-mandatory overflow-x-auto border-y border-line pl-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {videos.map((video, i) => (
              <figure key={`mobile-${video.id}`} className="w-[86vw] shrink-0 snap-start border-r border-line bg-ink-soft first:border-l first:border-l-gold/60">
                <div className="flex min-h-12 items-center justify-between border-b border-line px-4 font-mono text-[9px] uppercase tracking-[0.14em]">
                  <span className="text-gold">Feed {String(i + 1).padStart(2, "0")}</span>
                  <span className="text-paper/65">Medit instruction</span>
                </div>
                <div className="aspect-video w-full overflow-hidden bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
                <figcaption className="p-5">
                  <h3 className="max-w-[24ch] text-balance text-lg font-semibold leading-6 tracking-[-0.02em]">{video.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-paper/72">{video.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.14em] text-paper/65">
            <span className="text-gold">Swipe</span>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
            <span>01-02</span>
          </div>
        </div>

        <div className="hidden md:block">
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
      </div>
    </section>
  )
}
