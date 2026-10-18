import { Section } from "@/components/section"
import { skills } from "@/data/profile"

export function Skills() {
  return (
    <Section id="skills" index="04" title="Toolbox">
      <dl className="divide-y divide-line border-y border-line">
        {skills.map(({ group, items }) => (
          <div key={group} className="grid gap-2 py-4 sm:grid-cols-[150px_1fr] sm:gap-8">
            <dt className="eyebrow leading-6">{group}</dt>
            <dd className="text-sm leading-6">{items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
