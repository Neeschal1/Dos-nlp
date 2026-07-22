import React from 'react'
import AboutUsHero from './aboutUsHero'
import Statistics from './statistics'
import Footer from '../../constants/footer'
import OurPeople from './ourPeople'
import OurMission from './ourMission'

const Aboutus = () => {
  return (
    <div className="flex flex-1 w-full flex-col bg-[#F2F1FF]">
      <AboutUsHero />
      <Statistics />
      <OurMission />
      <OurPeople />
      <Footer />
    </div>
  )
}

export default Aboutus