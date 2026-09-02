import { useEffect } from 'react'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ProcessTimeline } from './components/ProcessTimeline'
import { SectionTransition } from './components/SectionTransition'
import { TailoredProgrammesSection } from './components/TailoredProgrammesSection'
import { Services } from './components/Services'
import { ValueSection } from './components/ValueSection'
import { WellnessFeature } from './components/WellnessFeature'
import { WhoWeAre } from './components/WhoWeAre'
import './App.css'

function App() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1)

      if (!id) return

      window.requestAnimationFrame(() => {
        const target = document.getElementById(decodeURIComponent(id))

        if (!target) return

        const root = document.documentElement
        const previousScrollBehavior = root.style.scrollBehavior

        root.style.scrollBehavior = 'auto'
        target.scrollIntoView({ block: 'start' })
        root.style.scrollBehavior = previousScrollBehavior
      })
    }

    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)

    return () => {
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionTransition tone="blue-to-light" />
        <WhoWeAre />
        <SectionTransition tone="light-to-blue" flip />
        <Services />
        <SectionTransition tone="light-to-blue" />
        <ValueSection />
        <SectionTransition tone="light-to-light" flip />
        <WellnessFeature />
        <SectionTransition tone="blue-to-blue" />
        <TailoredProgrammesSection />
        <SectionTransition tone="split-to-light" flip />
        <ProcessTimeline />
        <SectionTransition tone="light-to-blue" />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
