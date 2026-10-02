import { org } from '../data.js'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line py-8 text-sm text-muted">
      <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-3 px-6">
        <span>© {new Date().getFullYear()} {org.name}</span>
        <span className="flex gap-4">
          {org.github && <a className="underline underline-offset-4 hover:text-ink" href={org.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
          {org.linkedin && <a className="underline underline-offset-4 hover:text-ink" href={org.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
        </span>
      </div>
    </footer>
  )
}
