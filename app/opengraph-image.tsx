import { ImageResponse } from "next/og"

export const dynamic = "force-static"

export const runtime = "edge"
export const alt = "True North Kromes Inc"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#1a2230",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://tnkromes.ca/images/og-logo.png"
          alt=""
          width={800}
          height={400}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  )
}
