import React, { useState } from 'react';
import { Minus, Plues } from '../../Uitls/Icons';

function Question(props) {
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[90%] sm:max-w-[1100px] mx-auto my-4 rounded-xl overflow-hidden shadow-lg transition-all duration-300">
      <div
        onClick={() => setIsOpen(!IsOpen)}
        className="flex items-center justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-4 cursor-pointer font-semibold text-lg hover:opacity-90 transition-colors duration-200"
      >
        <span className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold">
          {props.title}
        </span>
        <div className="flex">
          {IsOpen ? <Minus /> : <Plues />}
        </div>
      </div>

      {IsOpen && (
        <div className="bg-white text-gray-800 px-6 py-5 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed border-t-2 border-indigo-300">
          {props.Parha}
        </div>
      )}
    </div>
  );
}

export default Question;
