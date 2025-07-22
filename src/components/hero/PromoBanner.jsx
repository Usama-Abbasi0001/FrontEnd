import React from 'react';

function PromoBanner() {
  return (
    <div className="w-full sm:w-[90%] md:w-[550px] lg:text-start text-center p-5 font-sans md:mt-5">
     <h1 className="lg:text-[40px] sm:text-3xl md:text-4xl text-blue-800 font-bold md:mb-10 mb-5 leading-6 tracking-wide">
  Practice building projects like a professional developer
</h1>


      <p className="text-sm sm:text-base leading-relaxed opacity-70 font-semibold md:mb-10 mb-5">
        Working with design tools like Figma and building fully-functional projects is what professionals do. 
        Our Pro subscription puts you in the shoes of a professional developer so you can take your skills 
        to the next level.
      </p>

      <button className="bg-red-500 text-white py-3 px-6 rounded-full font-bold text-sm sm:text-base hover:bg-red-600 transition-colors">
        ALREADY SOLD? UNLOCK PRO NOW
      </button>
    </div>
  );
}

export default PromoBanner;
