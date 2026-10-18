import { ArrowUpRight } from "lucide-react"
import { Section } from "@/components/section"
import { projects, profile, type Project } from "@/data/profile"

export function Projects() {
  return (
    <Section id="projects" index="02" title="Selected work">
      <ol className="divide-y divide-line border-y border-line">
        {projects.map((project, i) => (
          <ProjectRow key={project.title} project={project} index={i + 1} />
        ))}
      </ol>

      <p className="mt-8 text-sm text-muted">
        More on{" "}
        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="link">
          GitHub
        </a>
        .
      </p>
    </Section>
  )
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const links = [
    project.live && { label: "Live", href: project.live },
    project.repo && { label: "Source", href: project.repo },
  ].filter(Boolean) as { label: string; href: string }[]

  return (
    <li className="grid gap-6 py-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
      <div>
        <div className="flex items-baseline gap-3 font-mono text-xs text-muted">
          <span>{String(index).padStart(2, "0")}</span>
          <span>{project.year}</span>
          {project.status === "in-progress" && (
            <span className="rounded bg-accent/10 px-1.5 py-0.5 text-accent">In progress</span>
          )}
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-2 text-muted">{project.summary}</p>

        {links.length > 0 && (
          <div className="mt-5 flex gap-5 text-sm">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 font-medium hover:text-accent"
              >
                {l.label}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-5">
        <p className="text-sm leading-relaxed">
          <span className="eyebrow mr-2">Problem</span>
          <span className="text-muted">{project.problem}</span>
        </p>
        <ul className="space-y-2 text-sm text-muted">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent" />
              {h}
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
          {project.stack.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}
