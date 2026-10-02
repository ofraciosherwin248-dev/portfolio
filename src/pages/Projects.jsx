import { projects } from '../data.js'

export default function Projects() {
  return (
    <section className="py-16">
      <h1 className="mb-10 text-4xl font-extrabold tracking-tight md:text-5xl">Projects</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <a key={p.title} href={p.link} className="flex flex-col justify-between gap-6 rounded-2xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-brand">
            <div>
              <h2 className="text-2xl font-bold">{p.title}</h2>
              <p className="mt-2 text-muted">{p.text}</p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {p.tags.map((t) => <li key={t} className="rounded-full bg-tint px-3 py-1 text-xs font-medium text-blue">{t}</li>)}
            </ul>
          </a>
        ))}
      </div>
    </section>
  )
}
