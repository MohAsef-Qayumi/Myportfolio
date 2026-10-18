import { Section } from "@/components/section"
import { experience } from "@/data/profile"

export function Experience() {
  return (
    <Section id="experience" index="03" title="Experience">
      <ol className="space-y-12">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="grid gap-2 sm:grid-cols-[150px_1fr] sm:gap-8">
            <p className="font-mono text-xs leading-7 text-muted">{job.period}</p>
            <div>
              <h3 className="font-medium">
                {job.role} <span className="text-muted">· {job.company}</span>
              </h3>
              <p className="text-sm text-muted">{job.location}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-line" />
                    {point}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
                {job.stack.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
