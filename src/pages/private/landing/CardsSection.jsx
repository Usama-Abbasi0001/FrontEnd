import React from 'react'
import Cardone from '../../../components/Cards/Cardone';

function CardsSection() {
  return (
    <div className='container lg:mt-0 mt-[10rem]'>
    <div className='flex lg:ms-10 lg:me-5 lg:flex-row flex-col lg:justify-center gap-10 items-center bg-gray-100 rounded-b-[10px] p-5 '>
            <div className="">
      <Cardone
        quote="❝"
        text="Frontend Mentor was absolutely pivotal in my career transition, offering portfolio-ready projects and a supportive community. The premium challenges stood out in my interviews and prepared me for a real-life workflow. Thanks to this platform, I transitioned from a newbie to a hired developer."
        imgSrc="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fpro-avatar-emmilie.webp&w=256&q=75"
        name="Emmilie"
        username="emestabillo"
      />
    </div>
           <div className="">
      <Cardone
        quote="❝"
        text="Frontend Mentor is the best platform for honing real-world coding skills. After starting with a free membership, I quickly upgraded to PRO, thoroughly enjoying the premium challenges. These projects paved the way for my first professional programming job. The community they’ve cultivated is also invaluable, with countless members collaboratively learning and supporting each other."
        imgSrc="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fpro-avatar-kent.webp&w=256&q=75"
        name="Kent"
        username="@12Kentos"
      />
    </div>    
    </div>
    </div>
  )
}

export default CardsSection;
