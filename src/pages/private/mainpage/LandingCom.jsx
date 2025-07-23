import React from 'react'
import NavBar from '../landing/NavBar'
import HeroSection from '../landing/HeroSection'
import CardsSection from '../landing/CardsSection'
import PremiumSection from '../landing/PremiumSection'
import PracticeSection from '../landing/PracticeSection'
import SolutionSection from '../landing/SolutionSection'
import CameraSection from '../landing/CameraSection'

function LandingCom() {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <CardsSection/>
      <PremiumSection/>
      <PracticeSection/>
      <SolutionSection/>
      <CameraSection/>
    </div>
  )
}

export default LandingCom
