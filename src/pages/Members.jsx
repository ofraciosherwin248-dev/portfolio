import { useState } from 'react'
import { members } from '../data.js'

const KEY = 'member-photos'

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {} } catch { return {} }
}

// Crops to a centered square and shrinks the image so it fits in browser storage.
function resize(file, size = 320) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const url = URL.createObjectURL(file)
    img.onload = () => {
      const c = document.createElement('canvas')
      c.width = c.height = size
      const m = Math.min(img.width, img.height)
      c.getContext('2d').drawImage(img, (img.width - m) / 2, (img.height - m) / 2, m, m, 0, 0, size, size)
      URL.revokeObjectURL(url)
      resolve(c.toDataURL('image/jpeg', 0.85))
    }
    img.onerror = reject
    img.src = url
  })
}

const link = (u) => (/^https?:\/\//.test(u) ? u : 'https://' + u)

export default function Members() {
  const [photos, setPhotos] = useState(load)

  const save = (next) => {
    setPhotos(next)
    try { localStorage.setItem(KEY, JSON.stringify(next)) } catch { /* storage full or blocked */ }
  }
  const upload = async (id, file) => {
    if (file) save({ ...photos, [id]: await resize(file) })
  }
  const remove = (id) => {
    const next = { ...photos }
    delete next[id]
    save(next)
  }

  return (
    <section className="py-16">
      <h1 className="mb-10 text-4xl font-extrabold tracking-tight md:text-5xl">Members</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {members.map((m, i) => {
          const photo = photos[m.initials] || m.photo
          const color = i % 2 ? 'blue' : 'brand'
          return (
            <article key={m.name} className={'rounded-2xl border border-line border-t-8 bg-white p-8 ' + (i % 2 ? 'border-t-blue' : 'border-t-brand')}>
              <div className="mb-5 flex items-center gap-4">
                <label className="flex cursor-pointer items-center gap-4">
                  <input className="peer sr-only" type="file" accept="image/*" onChange={(e) => upload(m.initials, e.target.files[0])} />
                  <span
                    className={'grid size-24 place-items-center rounded-full bg-cover bg-center text-xl font-extrabold text-white ring-8 ring-tint peer-focus-visible:outline-4 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-brand ' + (color === 'blue' ? 'bg-blue' : 'bg-brand')}
                    style={photo ? { backgroundImage: 'url(' + photo + ')', color: 'transparent' } : undefined}
                    role="img" aria-label={m.name + ' profile photo'}
                  >{m.initials}</span>
                  <small className="text-sm text-muted underline underline-offset-4">{photo ? 'Change photo' : 'Upload photo'}</small>
                </label>
                {photos[m.initials] && (
                  <button type="button" className="text-sm text-muted underline underline-offset-4 hover:text-ink" onClick={() => remove(m.initials)}>Remove</button>
                )}
              </div>
              <h2 className="text-2xl font-bold">{m.name}</h2>
              <p className={'mb-3 text-sm font-bold ' + (i % 2 ? 'text-blue' : 'text-brand')}>{m.role}</p>
              <p className="text-muted">{m.bio}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {m.tags.map((t) => <li key={t} className="rounded-full bg-tint px-3 py-1 text-xs font-medium text-blue">{t}</li>)}
              </ul>
              {(m.github || m.linkedin) && (
                <p className="mt-5 flex gap-5 text-sm font-bold">
                  {m.github && <a className="underline underline-offset-4 hover:text-brand" href={link(m.github)} target="_blank" rel="noopener noreferrer">GitHub</a>}
                  {m.linkedin && <a className="underline underline-offset-4 hover:text-brand" href={link(m.linkedin)} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                </p>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
