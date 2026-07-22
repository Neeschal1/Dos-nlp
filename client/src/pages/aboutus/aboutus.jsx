import React from 'react'
import AboutUsHero from './aboutUsHero'
import Statistics from './statistics'
import Footer from '../../constants/footer'
import OurPeople from './ourPeople'
import OurMission from './ourMission'
import OurVision from './ourVision'

const Aboutus = () => {
  return (
    <div className="flex flex-1 w-full flex-col bg-[#F2F1FF]">
      <AboutUsHero />
      <Statistics />
      <OurMission />
      <OurVision />
      <OurPeople />
      <Footer />
    </div>
  )
}

export default Aboutus