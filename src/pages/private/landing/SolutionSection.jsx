import React from 'react'
import SolImg from '../../../components/Solution/SolImg'
import SolText from '../../../components/Solution/SolText'

function SolutionSection() {
  return (
    <div  className='container mt-[10rem] flex md:flex-row flex-col lg:justify-center justify-center space-y-10'>
      <div className='flex justify-center items-center lg:ps-7' ><SolImg/></div>
      <div><SolText/></div>
    </div>
  )
}

export default SolutionSection
