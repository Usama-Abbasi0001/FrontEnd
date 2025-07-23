import React from 'react'
import CamText from '../../../components/Camera/CamText'
import CamImg from '../../../components/Camera/CamImg'

function CameraSection() {
  return (
   <div className='container lg:mt-0 mt-[10rem] flex md:flex-row flex-col justify-center items-center space-y-16'>
      <div><CamText/></div>
      <div className='flex justify-center items-center'><CamImg/></div>
    </div>
  )
}

export default CameraSection
