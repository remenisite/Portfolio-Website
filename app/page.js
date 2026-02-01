import React from 'react'
import HeroSection from './components/banner/HeroSection'
import AboutMe from './components/about/AboutMe'
import Services from './components/services/Services'
import SkillsGrid from './components/skills/SkillsGrid'
import ContactSection from './components/contact/ContactSection'

import Project from './components/projects/Project'
import EducationAccordion from './components/Accordions/EducationAccordion'

const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Services />
      <SkillsGrid />
      <Project />
      <ContactSection />
      <EducationAccordion />
    </div>
  )
}

export default page