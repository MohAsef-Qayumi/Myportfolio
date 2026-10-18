import Image from "next/image"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { profile } from "@/data/profile"

export function Hero() {
  return (
    <section id="top" className="pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="container grid items-end gap-12 md:grid-cols-[1fr_260px]">
        <div>
          <p className="eyebrow mb-6 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to internships & freelance work
          </p>

          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tightest sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl text-muted sm:text-2xl">{profile.role}</p>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              Selected work <ArrowDownRight className="h-4 w-4" />
            </a>
            <a href={profile.resume} download="Mohammad-Asef-Qayumi-Resume.pdf" className="btn-ghost">
              Download résumé
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {[
              { label: "GitHub", href: profile.socials.github },
              { label: "LinkedIn", href: profile.socials.linkedin },
              { label: "X", href: profile.socials.x },
            ].map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 hover:text-fg">
                  {s.label}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-48 md:mx-0 md:w-full">
          <Image
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width={520}
            height={650}
            priority
            className="aspect-[4/5] w-full rounded-lg border border-line object-cover grayscale-[20%]"
          />
          <p className="mt-3 font-mono text-[11px] text-muted">Based in {profile.location} · From {profile.hometown}</p>
        </div>
      </div>
    </section>
  )
}
