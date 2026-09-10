import { useEffect } from 'react'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { TailoredProgrammesSection } from './components/TailoredProgrammesSection'
import { Services } from './components/Services'
import { ValueSection } from './components/ValueSection'
import { WhoWeAre } from './components/WhoWeAre'
import { WhoWeAreConcepts } from './components/WhoWeAreConcepts'
import { WhoWeAreRefinedConcepts } from './components/WhoWeAreRefinedConcepts'
import { WhoWeAreFinalists } from './components/WhoWeAreFinalists'
import { WhoWeAreImageTreatments } from './components/WhoWeAreImageTreatments'
import './App.css'
import './redesign.css'
import './components/WhoWeAreFinal.css'

function App() {
  const isWhoWeAreConceptGallery =
    new URLSearchParams(window.location.search).get('view') === 'who-we-are-concepts'
  const isWhoWeAreRefinedGallery =
    new URLSearchParams(window.location.search).get('view') === 'who-we-are-refined'
  const isWhoWeAreFinalists =
    new URLSearchParams(window.location.search).get('view') === 'who-we-are-finalists'
  const isWhoWeAreImageTreatments =
    new URLSearchParams(window.location.search).get('view') === 'who-we-are-image-treatments'

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

  if (isWhoWeAreConceptGallery) {
    return <WhoWeAreConcepts />
  }

  if (isWhoWeAreRefinedGallery) {
    return <WhoWeAreRefinedConcepts />
  }

  if (isWhoWeAreFinalists) {
    return <WhoWeAreFinalists />
  }

  if (isWhoWeAreImageTreatments) {
    return <WhoWeAreImageTreatments />
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <Services />
        <ValueSection />
        <TailoredProgrammesSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
