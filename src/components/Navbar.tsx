import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { navLinks } from '../data/siteContent'
import { Logo } from './Logo'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [compactHeader, setCompactHeader] = useState(() =>
    window.matchMedia('(max-width: 760px)').matches,
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)

    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    const query = window.matchMedia('(max-width: 760px)')
    const onChange = () => setCompactHeader(query.matches)

    onChange()
    query.addEventListener('change', onChange)

    return () => query.removeEventListener('change', onChange)
  }, [])

  return (
    <header
      className={`site-header${scrolled ? ' is-scrolled' : ''}`}
      data-menu-open={menuOpen}
    >
      <nav className="nav-shell" aria-label="Primary navigation">
        <Logo variant={compactHeader || scrolled || menuOpen ? 'brand' : 'inverse'} />

        <button
          className="nav-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <div className="nav-menu" id="primary-menu">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="button button--lime nav-cta"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Speak to Our Team <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  )
}
