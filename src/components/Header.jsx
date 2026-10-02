import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { org } from '../data.js'

const links = [['/', 'Home'], ['/about', 'About'], ['/projects', 'Projects'], ['/members', 'Members'], ['/contact', 'Contact']]

export default function Header() {
  const [open, setOpen] = useState(false)
  const item = ({ isActive }) => 'rounded-lg px-3 py-2 text-sm font-medium transition ' + (isActive ? 'bg-tint text-blue' : 'text-muted hover:text-ink')

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link to="/" className="font-extrabold tracking-tight">
          {org.name.split('&')[0].trim()}<span className="text-brand"> &amp; </span>{org.name.split('&')[1].trim()}
        </Link>
        <nav className="hidden gap-1 md:flex" aria-label="Main">
          {links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} className={item}>{label}</NavLink>)}
        </nav>
        <button className="rounded-lg border border-line px-3 py-2 text-sm font-medium md:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="flex flex-col gap-1 border-t border-line px-6 py-3 md:hidden" aria-label="Mobile">
          {links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} className={item} onClick={() => setOpen(false)}>{label}</NavLink>)}
        </nav>
      )}
    </header>
  )
}
