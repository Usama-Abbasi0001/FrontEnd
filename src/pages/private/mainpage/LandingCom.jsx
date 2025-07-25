import React from 'react'
import NavBar from '../landing/NavBar'
import HeroSection from '../landing/HeroSection'
import CardsSection from '../landing/CardsSection'
import PremiumSection from '../landing/PremiumSection'
import PracticeSection from '../landing/PracticeSection'
import SolutionSection from '../landing/SolutionSection'
import CameraSection from '../landing/CameraSection'
import SubsSection from '../landing/SubsSection'
import FooterSection from '../landing/FooterSection'

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
      <CardsSection/>
      <SubsSection/>
      <FooterSection/>
    </div>
  )
}

export default LandingCom
