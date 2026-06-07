import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import TrustedBy from './components/TrustedBy.tsx'
import CustomizeAgent from './components/CustomizeAgent.tsx'
import TryIris from './components/TryIris.tsx'
import DeployAgents from './components/DeployAgents.tsx'
import ProductShowcase from './components/ProductShowcase.tsx'
import FeaturesGrid from './components/FeaturesGrid.tsx'
import ResearchSection from './components/ResearchSection.tsx'
import SafetySection from './components/SafetySection.tsx'
import LatestUpdates from './components/LatestUpdates.tsx'
import CtaBanner from './components/CtaBanner.tsx'
import Footer from './components/Footer.tsx'

function SectionDivider() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
      </div>
    </div>
  )
}

function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full bg-[#3bb9ad] text-white shadow-lg flex items-center justify-center hover:bg-[#3bb9ad]/90 transition-all"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <div className="bg-off-white min-h-screen">
      <Navbar />
      <Hero />
      <SectionDivider />
      <TrustedBy />
      <SectionDivider />
      <CustomizeAgent />
      <SectionDivider />
      <TryIris />
      <SectionDivider />
      <DeployAgents />
      <SectionDivider />
      <ProductShowcase />
      <SectionDivider />
      <FeaturesGrid />
      <SectionDivider />
      <ResearchSection />
      <SectionDivider />
      <SafetySection />
      <SectionDivider />
      <LatestUpdates />
      <SectionDivider />
      <CtaBanner />
      <Footer />
      <BackToTop />
    </div>
  )
}
