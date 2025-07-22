
import LeftImg from '../../../components/hero/LeftImg';
import PromoBanner from '../../../components/hero/PromoBanner';

function HeroSection() {
  return (
    <div className='container ps-5 flex lg:justify-between justify-center items-center lg:flex-row flex-col lg:mt-10 border-transparent'>
     <div><PromoBanner/> </div>   
      <div><LeftImg/></div>
    </div>
  )
}

export default HeroSection;
