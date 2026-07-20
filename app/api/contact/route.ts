import { NextResponse } from "next/server"
import { Resend } from "resend"

export const runtime = "nodejs"

const LEAD_TO = process.env.CONTACT_LEAD_EMAIL || "truenorthkromes@gmail.com"
const LEAD_FROM = process.env.CONTACT_LEAD_FROM || "True North Kromes Website <onboarding@resend.dev>"

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — contact form cannot deliver leads.")
    return NextResponse.json(
      { error: "Contact form is not configured yet. Please call or email us directly." },
      { status: 503 }
    )
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  const name = typeof body.name === "string" ? body.name.trim() : ""
  const telephone = typeof body.telephone === "string" ? body.telephone.trim() : ""
  const fileType = typeof body.fileType === "string" ? body.fileType.trim() : ""
  const monthlyVolume = typeof body.monthlyVolume === "string" ? body.monthlyVolume.trim() : ""
  const address = typeof body.address === "string" ? body.address.trim() : ""
  const city = typeof body.city === "string" ? body.city.trim() : ""
  const postal = typeof body.postal === "string" ? body.postal.trim() : ""

  if (!name || !telephone || !fileType || !monthlyVolume) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
  }

  const rows: Array<[string, string]> = [
    ["Name", name],
    ["Telephone", telephone],
    ["File type", fileType],
    ["Frames per month", monthlyVolume],
    ["Address", address || "—"],
    ["City", city || "—"],
    ["Postal code", postal || "—"],
  ]

  const html = `
    <h2>New case request from tnkromes.ca</h2>
    <table cellpadding="6" cellspacing="0">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(value)}</td></tr>`
        )
        .join("")}
    </table>
  `

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: LEAD_FROM,
      to: LEAD_TO,
      subject: `New case request — ${name}`,
      html,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Contact form send failed:", err)
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 })
  }
}
