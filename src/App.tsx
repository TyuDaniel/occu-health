import { BusinessCase } from './components/BusinessCase'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { PackagesSection } from './components/PackagesSection'
import { ProcessTimeline } from './components/ProcessTimeline'
import { Services } from './components/Services'
import { ValueSection } from './components/ValueSection'
import { WellnessFeature } from './components/WellnessFeature'
import { WhoWeAre } from './components/WhoWeAre'
import { WhyOccuhealth } from './components/WhyOccuhealth'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <Services />
        <ValueSection />
        <WellnessFeature />
        <PackagesSection />
        <BusinessCase />
        <ProcessTimeline />
        <WhyOccuhealth />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
