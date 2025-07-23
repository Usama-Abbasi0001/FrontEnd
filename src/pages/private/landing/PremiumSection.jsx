import React from 'react'
import PreImg from '../../../components/Premium/PreImg';
import PreText from '../../../components/Premium/PreText';

function PremiumSection() {
  return (
    <div className='container lg:mt-[8rem] mt-[10rem] flex md:flex-row flex-col lg:justify-center justify-center space-y-10'>
      <div className='flex justify-center items-center'><PreImg/></div>
      <div><PreText/></div>
    </div>
  )
}

export default PremiumSection;