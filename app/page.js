import React from 'react'
import HeroSection from './components/banner/HeroSection'
import AboutMe from './components/about/AboutMe'
import Services from './components/services/Services'
import SkillsGrid from './components/skills/SkillsGrid'
import ContactSection from './components/contact/ContactSection'
import ProjectSection from './components/projects/ProjectSection'

const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Services />
      <SkillsGrid />
      <ProjectSection />
      <ContactSection />
    </div>
  )
}

export default page