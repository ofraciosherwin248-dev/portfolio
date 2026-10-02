const blocks = [
  ['Mission', 'Replace this with what your team or organization sets out to do and who it serves.'],
  ['History', 'Replace this with how the team started, when, and the key milestones so far.'],
  ['Values', 'Replace this with the principles you work by, such as clean code, testing and clear communication.'],
]

export default function About() {
  return (
    <section className="py-16">
      <h1 className="mb-10 text-4xl font-extrabold tracking-tight md:text-5xl">About us</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {blocks.map(([title, text]) => (
          <article key={title} className="rounded-2xl border border-line bg-white p-6">
            <h2 className="text-xl font-bold text-blue">{title}</h2>
            <p className="mt-3 text-muted">{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
