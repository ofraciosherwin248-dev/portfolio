import { Link } from 'react-router-dom'
import { projects } from '../data.js'

export default function Home() {
  return (
    <>
      <section className="grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-5xl leading-none font-extrabold tracking-tight md:text-6xl">
            Two Java developers
            <span className="block bg-gradient-to-r from-blue to-brand bg-clip-text text-transparent">building solid backends.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted">We design and ship Spring Boot services, REST APIs and data layers that stay fast and easy to maintain.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="rounded-xl bg-brand px-6 py-3 font-bold text-white hover:brightness-110">See our work</Link>
            <Link to="/contact" className="rounded-xl px-6 py-3 font-bold ring-2 ring-line hover:ring-blue">Work with us</Link>
          </div>
        </div>
        <div className="relative mr-4 mb-4">
          <div className="absolute inset-4 -right-4 -bottom-4 rounded-2xl bg-brand" aria-hidden="true" />
          <pre className="relative overflow-x-auto rounded-2xl border border-[#223153] bg-[#0b1220] p-5 font-mono text-sm leading-7 text-[#d5def0]">
{['record Developer(String name, String role) {}', '', 'var team = List.of(', '  new Developer("Mark Sherwin", "Backend"),', '  new Developer("Crish", "Full-stack")', ');'].join('\n')}
          </pre>
        </div>
      </section>

      <section className="py-10">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight">Featured projects</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((p) => (
            <Link key={p.title} to="/projects" className="rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-brand">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.text}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
