"use client"

import { useState } from "react"
import { ArrowUpRight, Loader2 } from "lucide-react"
import { Section } from "@/components/section"
import { profile } from "@/data/profile"

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string }

const emptyForm = { name: "", email: "", subject: "", message: "" }

export function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState<Status>({ kind: "idle" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ kind: "sending" })

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setStatus({ kind: "error", message: data.error ?? "Failed to send message." })
        return
      }
      setForm(emptyForm)
      setStatus({ kind: "sent" })
    } catch {
      setStatus({ kind: "error", message: "Network error. Please try again." })
    }
  }

  return (
    <Section id="contact" index="05" title="Contact">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s build something.</h2>
          <p className="mt-4 max-w-sm text-muted">
            Have a role, a project, or a problem worth solving? I usually reply within a day.
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="eyebrow mb-1">Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`} className="link">
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-1">Phone</dt>
              <dd>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="link">
                  {profile.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-1">Elsewhere</dt>
              <dd className="flex gap-5">
                {[
                  { label: "GitHub", href: profile.socials.github },
                  { label: "LinkedIn", href: profile.socials.linkedin },
                  { label: "X", href: profile.socials.x },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent">
                    {s.label} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name">
              <input name="name" required autoComplete="name" value={form.name} onChange={handleChange} className="field" />
            </Field>
            <Field label="Email">
              <input name="email" type="email" required autoComplete="email" value={form.email} onChange={handleChange} className="field" />
            </Field>
          </div>
          <Field label="Subject">
            <input name="subject" required value={form.subject} onChange={handleChange} className="field" />
          </Field>
          <Field label="Message">
            <textarea name="message" required rows={6} value={form.message} onChange={handleChange} className="field resize-y" />
          </Field>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button type="submit" disabled={status.kind === "sending"} className="btn-primary disabled:opacity-60">
              {status.kind === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status.kind === "sending" ? "Sending" : "Send message"}
            </button>
            <p role="status" aria-live="polite" className="text-sm">
              {status.kind === "sent" && <span className="text-accent">Thanks — your message is on its way.</span>}
              {status.kind === "error" && <span className="text-red-600 dark:text-red-400">{status.message}</span>}
            </p>
          </div>
        </form>
      </div>
    </Section>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted">{label}</span>
      {children}
    </label>
  )
}
