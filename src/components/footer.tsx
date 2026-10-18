import { profile } from "@/data/profile"

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container flex flex-col justify-between gap-2 font-mono text-xs text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with Next.js & Tailwind CSS · Deployed on Vercel</p>
      </div>
    </footer>
  )
}
