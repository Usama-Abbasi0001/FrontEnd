import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; // Use /24/solid for latest version

function Rightbar() {
  const [showExplore, setShowExplore] = useState(false);
  const [showCompanies, setShowCompanies] = useState(false);

  return (
    <div className="flex items-center gap-6  text-sm text-black font-bold">
      {/* Explore Dropdown */}
      <div className="relative lg:flex hidden">
        <div
          className="cursor-pointer inline-flex items-center gap-1"
          onClick={() => {
            setShowExplore(!showExplore);
            setShowCompanies(false); // Close Companies if open
          }}
        >
          <span>EXPLORE</span>
          <ChevronDownIcon className="w-4 h-4" />
        </div>
        {showExplore && (
          <div className="absolute left-0 top-7 mt-2 w-56 rounded-xl border border-gray-200 bg-white shadow-xl z-10">
            <ul className="divide-y divide-gray-100">
              <li className="px-4 py-3 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2 transition-colors duration-150 cursor-pointer rounded-t-xl">
                🧭 LEARNING PATHS
              </li>
              <li className="px-4 py-3 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2 transition-colors duration-150 cursor-pointer">
                📱 CHALLENGES
              </li>
              <li className="px-4 py-3 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2 transition-colors duration-150 cursor-pointer">
                💻 SOLUTIONS
              </li>
              <li className="px-4 py-3 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2 transition-colors duration-150 cursor-pointer rounded-b-xl">
                📰 ARTICLES
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* For Companies Dropdown */}
      <div className="relative  lg:flex hidden">
        <div
          className="cursor-pointer inline-flex items-center gap-1"
          onClick={() => {
            setShowCompanies(!showCompanies);
            setShowExplore(false); // Close Explore if open
          }}
        >
          <span>FOR COMPANIES</span>
          <ChevronDownIcon className="w-4 h-4" />
        </div>
        {showCompanies && (
          <div className="absolute left-0 top-7 mt-2 w-48 rounded-xl border border-gray-200 bg-white shadow-xl z-10">
            <ul className="divide-y divide-gray-100">
              <li className="px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 cursor-pointer rounded-t-xl">
                HIRE DEVELOPERS
              </li>
              <li className="px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 cursor-pointer rounded-b-xl">
                TRAIN DEVELOPERS
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Unlock PRO */}
      <div className="relative cursor-pointer  lg:flex hidden">
        <span className="border-b-2 hover:border-red-500">UNLOCK</span>
        <span className="ml-1 px-1 text-white bg-blue-600 rounded text-xs">PRO</span>
      </div>

      {/* Login with GitHub */}
      <a
  href="https://github.com/Usama-Abbasi0001"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
    LOG IN <span className="text-gray-300">WITH GITHUB</span> <FaGithub className="text-white" />
</a>
    </div>
  );
}

export default Rightbar;
