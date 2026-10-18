type SectionProps = {
  id: string
  index: string
  title: string
  children: React.ReactNode
}

export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-line py-20 sm:py-28">
      <div className="container grid gap-10 md:grid-cols-[180px_1fr] md:gap-16">
        <header>
          <p className="eyebrow md:sticky md:top-24">
            <span className="text-accent">{index}</span> / {title}
          </p>
        </header>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  )
}
