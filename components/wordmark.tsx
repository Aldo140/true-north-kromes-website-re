/* Text companion to the TNK mark. Rendered as real text (not baked into
   the logo image) so it stays crisp at any size, but styled with the
   same brushed-steel gradient so it reads as one mark. */
export function Wordmark({
  className = "",
  align = "center",
}: {
  className?: string
  align?: "center" | "start"
}) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center gap-2 whitespace-nowrap font-mono font-semibold uppercase leading-none ${
        align === "center" ? "justify-center" : "justify-start"
      } ${className}`}
    >
      <span className="h-px w-3 shrink-0 bg-gradient-to-r from-transparent to-[#9a9a9a]" />
      <span
        className="bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #fdfdfd 0%, #d6d6d6 20%, #8f8f8f 52%, #c2c2c2 78%, #f5f5f5 100%)",
          filter: "drop-shadow(0 1px 0 rgba(0,0,0,0.55))",
        }}
      >
        True North Kromes
      </span>
      <span className="h-px w-3 shrink-0 bg-gradient-to-l from-transparent to-[#9a9a9a]" />
    </div>
  )
}
