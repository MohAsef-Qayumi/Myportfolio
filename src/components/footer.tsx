import { profile } from "@/data/profile"

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container font-mono text-xs text-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}
