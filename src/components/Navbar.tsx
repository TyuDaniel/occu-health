import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { navLinks } from '../data/siteContent'
import { Logo } from './Logo'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState('')

  useEffect(() => {
    const onScroll = () => {
      const revealPoint = Math.min(160, Math.max(72, window.innerHeight * 0.14))
      setScrolled(window.scrollY > revealPoint)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => section !== null)
    let frame = 0

    const updateActiveSection = () => {
      frame = 0
      const readingLine = window.scrollY + 96 + window.innerHeight * 0.18
      const currentSection = [...sections]
        .reverse()
        .find((section) => section.offsetTop <= readingLine)

      setActiveHref(currentSection ? `#${currentSection.id}` : '')
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    const desktopMenu = window.matchMedia('(min-width: 1101px)')
    const onBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    desktopMenu.addEventListener('change', onBreakpointChange)

    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', onKeyDown)
      desktopMenu.removeEventListener('change', onBreakpointChange)
    }
  }, [menuOpen])

  return (
    <header
      className={`site-header${scrolled ? ' is-scrolled' : ''}`}
      data-menu-open={menuOpen}
    >
      <nav className="nav-shell" aria-label="Primary navigation">
        <Logo variant={scrolled || menuOpen ? 'brand' : 'inverse'} />

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
                <a
                  className={activeHref === link.href ? 'is-active' : undefined}
                  href={link.href}
                  aria-current={activeHref === link.href ? 'location' : undefined}
                  onClick={() => {
                    setActiveHref(link.href)
                    setMenuOpen(false)
                  }}
                >
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
            <span>Contact</span>
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  )
}
