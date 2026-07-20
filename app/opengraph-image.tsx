import { ImageResponse } from "next/og"

export const dynamic = "force-static"

export const runtime = "edge"
export const alt = "True North Kromes dental metal printing lab in Cochrane, Alberta"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#101113",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.tnkromes.ca/images/og-logo.png"
          alt=""
          width={620}
          height={180}
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            marginTop: 28,
            display: "flex",
            color: "#f2f0ec",
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: 10,
            textTransform: "uppercase",
          }}
        >
          True North Kromes
        </div>
        <div
          style={{
            marginTop: 16,
            display: "flex",
            color: "#c9a227",
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          3D-Printed Co-Cr Partial Denture Frameworks
        </div>
        <div
          style={{
            marginTop: 16,
            display: "flex",
            color: "#f2f0ec",
            fontSize: 16,
            letterSpacing: 5,
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          Cochrane, Alberta · Canada
        </div>
      </div>
    ),
    { ...size }
  )
}
