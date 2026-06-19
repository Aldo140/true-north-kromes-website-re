"use client"

export function VideoSection() {
  const videos = [
    {
      id: "UeDTzSWzHEk",
      title: "iOS scan repair with medit design",
      description: "A simple instructional video just to show you what is possible within the medit ecosystem to repair scans that may have some issues.",
    },
    {
      id: "Y5asA4FIYoQ",
      title: "Scanning with an impression to fix problem extension areas",
      description: "Here's a video showing how to use the impression scan button within the medit ecosystem.",
    },
  ]

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-8 lg:px-16">
        <p className="text-xs font-medium tracking-[0.2em] text-[#c9a227]">
          SEE IT IN ACTION
        </p>
        <h2 className="mt-2 font-sans text-[clamp(1.5rem,3vw,2.25rem)] font-normal text-foreground">
          Process Videos
        </h2>
        
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {videos.map((video) => (
            <div key={video.id} className="flex flex-col gap-4">
              {/* Video Container */}
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              
              {/* Title and Description */}
              <div>
                <h3 className="font-sans text-lg font-medium text-foreground">
                  {video.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
