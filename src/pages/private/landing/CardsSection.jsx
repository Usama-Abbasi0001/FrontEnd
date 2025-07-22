import React from 'react'
import Cardone from '../../../components/Cards/Cardone';
import Cardtwo from '../../../components/Cards/Cardtwo';

function CardsSection() {
  return (
    <div className='container lg:mt-0 mt-5'>
    <div className='flex lg:ms-10 lg:me-5 lg:flex-row flex-col lg:justify-center gap-10 items-center bg-gray-100 rounded-[10px] p-5 '>
        <div><Cardone/></div>
        <div><Cardtwo/></div>      
    </div>
    </div>
  )
}

export default CardsSection;
