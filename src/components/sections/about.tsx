import { Section } from "@/components/section"
import { about, education } from "@/data/profile"

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
        {about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      <dl className="mt-12 grid max-w-2xl gap-6 border-t border-line pt-8 sm:grid-cols-2">
        {education.map((item) => (
          <div key={item.degree} className="sm:col-span-2">
            <dt className="eyebrow mb-2">Education</dt>
            <dd>
              <p className="font-medium">{item.degree}</p>
              <p className="text-sm text-muted">
                {item.school} · {item.location} · {item.period}
              </p>
            </dd>
          </div>
        ))}
        <div>
          <dt className="eyebrow mb-2">Focus</dt>
          <dd className="text-sm text-muted">Full-stack web, mobile, applied ML</dd>
        </div>
        <div>
          <dt className="eyebrow mb-2">Works best in</dt>
          <dd className="text-sm text-muted">Remote, Agile teams with code review</dd>
        </div>
      </dl>
    </Section>
  )
}
