import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

const LIMITS = { name: 100, email: 200, subject: 200, message: 5000 } as const
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")

type Payload = Record<keyof typeof LIMITS, string>

function parse(body: unknown): Payload | string {
  if (!body || typeof body !== "object") return "Invalid request."
  const input = body as Record<string, unknown>
  const out = {} as Payload

  for (const key of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
    const value = typeof input[key] === "string" ? (input[key] as string).trim() : ""
    if (!value) return "All fields are required."
    if (value.length > LIMITS[key]) return `${key[0].toUpperCase()}${key.slice(1)} is too long.`
    out[key] = value
  }

  if (!EMAIL_RE.test(out.email)) return "Please enter a valid email address."
  return out
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API
  const receiverEmail = process.env.EMAIL_REC
  if (!apiKey || !receiverEmail) {
    console.error("Contact form is not configured: missing RESEND_API or EMAIL_REC.")
    return NextResponse.json({ error: "Contact form is temporarily unavailable." }, { status: 500 })
  }

  const parsed = parse(await req.json().catch(() => null))
  if (typeof parsed === "string") {
    return NextResponse.json({ error: parsed }, { status: 400 })
  }

  const name = escapeHtml(parsed.name)
  const email = escapeHtml(parsed.email)
  const subject = escapeHtml(parsed.subject)
  const message = escapeHtml(parsed.message)

  try {
    const { data, error } = await new Resend(apiKey).emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: receiverEmail,
      replyTo: parsed.email,
      subject: `[Portfolio] ${parsed.subject.replace(/[\r\n]+/g, " ")}`,
      text: `From: ${parsed.name} <${parsed.email}>\n\n${parsed.message}`,
      html: `
        <div style="font-family: -apple-system, Segoe UI, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #171717;">
          <p style="margin: 0 0 4px; font-size: 12px; color: #737373; text-transform: uppercase; letter-spacing: .08em;">New message</p>
          <h2 style="margin: 0 0 20px; font-size: 18px;">${subject}</h2>
          <p style="margin: 0 0 20px; font-size: 14px;">
            <strong>${name}</strong> &lt;<a href="mailto:${email}" style="color: #0d6e5f;">${email}</a>&gt;
          </p>
          <div style="border-top: 1px solid #e5e5e2; padding-top: 16px; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Could not send your message. Please email me directly." }, { status: 502 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error("Unexpected error:", err)
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}
