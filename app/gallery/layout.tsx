import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "3D-Printed Partial Framework Gallery",
  description: "View polished Co-Cr partial denture frameworks designed, SLM-printed, finished, and inspected by True North Kromes in Cochrane, Alberta.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Co-Cr Partial Framework Gallery | True North Kromes",
    description: "Finished upper and lower partial frameworks from our Cochrane dental metal printing lab.",
    url: "/gallery",
    type: "website",
  },
}

export default function GalleryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
