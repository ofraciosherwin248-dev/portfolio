import { useState } from 'react'
import { org } from '../data.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Opens the visitor's email app. Swap this for a backend call (fetch) later.
  const submit = (e) => {
    e.preventDefault()
    const body = form.message + '\n\nFrom: ' + form.name + ' (' + form.email + ')'
    window.location.href = 'mailto:' + org.email + '?subject=' + encodeURIComponent('Portfolio message') + '&body=' + encodeURIComponent(body)
  }

  const field = 'mt-1 w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:border-brand'

  return (
    <section className="py-16">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">Contact</h1>
      <p className="mb-10 max-w-md text-muted">Have a project or role in mind? Send us a message.</p>
      <form onSubmit={submit} className="grid max-w-xl gap-5">
        <label className="font-medium">Name<input className={field} name="name" value={form.name} onChange={change} required /></label>
        <label className="font-medium">Email<input className={field} type="email" name="email" value={form.email} onChange={change} required /></label>
        <label className="font-medium">Message<textarea className={field} name="message" rows="5" value={form.message} onChange={change} required /></label>
        <button className="justify-self-start rounded-xl bg-brand px-7 py-3 font-bold text-white hover:brightness-110" type="submit">Send message</button>
      </form>
    </section>
  )
}
