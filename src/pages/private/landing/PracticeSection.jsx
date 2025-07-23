import React from 'react'
import PraText from '../../../components/Practices/PraText'
import PraImg from '../../../components/Practices/PraImg';
function PracticeSection() {
  return (
 <div className='container lg:mt-0 mt-[10rem] flex md:flex-row flex-col justify-center items-center space-y-16'>
      <div><PraText/></div>
      <div className='flex justify-center items-center'><PraImg/></div>
    </div>
  )
}

export default PracticeSection
