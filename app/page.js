import React from 'react'
import HeroSection from './components/banner/HeroSection'
import AboutMe from './components/about/AboutMe'
import Services from './components/services/Services'

const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Services />
    </div>
  )
}

export default page