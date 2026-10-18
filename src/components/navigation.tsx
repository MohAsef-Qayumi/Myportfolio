"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { profile } from "@/data/profile"

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          {profile.shortName.toLowerCase().replace(" ", ".")}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted transition-colors hover:text-fg">
              {link.label}
            </a>
          ))}
          <a href={profile.resume} target="_blank" rel="noopener" className="text-sm text-muted transition-colors hover:text-fg">
            Résumé
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-8 w-8 place-items-center rounded-md text-muted hover:text-fg"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="container pb-4 md:hidden">
          {[...links, { label: "Résumé", href: profile.resume }].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-t border-line py-3 text-sm text-muted hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
