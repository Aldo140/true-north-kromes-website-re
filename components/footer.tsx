import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] bg-white" aria-label="Site footer">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* Left */}
          <div className="max-w-xs">
            <Link href="/" aria-label="True North Kromes - Home">
              <img src="/images/logo.png" alt="True North Kromes" className="h-12 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-[#71717a]">
              A dental lab specializing in 3D printing metal partial denture frameworks.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6 text-sm lg:text-right">
            <div className="flex flex-col gap-2 lg:items-end">
              <a href="tel:+18076247222" className="text-[#71717a] hover:text-[#1a1a1a]">807.624.7222</a>
              <a href="mailto:truenorthkromes@gmail.com" className="text-[#71717a] hover:text-[#1a1a1a]">truenorthkromes@gmail.com</a>
              <span className="text-[#71717a]">Cochrane, Alberta</span>
            </div>
            <div className="flex gap-4 lg:justify-end">
              <a href="https://www.instagram.com/truenorthkromes/" target="_blank" rel="noopener noreferrer" className="text-[#71717a] hover:text-[#1a1a1a]">Instagram</a>
              <a href="https://truenorthkromes.seazona.net" target="_blank" rel="noopener noreferrer" className="text-[#71717a] hover:text-[#1a1a1a]">Portal</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#e5e5e5]">
        <div className="mx-auto max-w-6xl px-6 py-6 lg:px-12 flex flex-col sm:flex-row sm:justify-between gap-2 text-xs text-[#a1a1aa]">
          <span>2026 True North Kromes</span>
          <a href="https://promptandpixel.ca" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a1a]">
            Prompt & Pixel
          </a>
        </div>
      </div>
    </footer>
  )
}
