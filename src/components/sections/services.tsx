import { Section } from "@/components/section"
import { services } from "@/data/profile"

export function Services() {
  return (
    <Section id="services" index="02" title="What I do">
      <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="flex flex-col bg-bg p-6">
            <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
            <p className="mt-2 text-sm text-muted">{service.summary}</p>
            <ul className="mt-5 flex-1 space-y-2 text-sm text-muted">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
              {service.stack.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
