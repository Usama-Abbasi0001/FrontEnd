import React, { useState } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

function Leftbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [companiesOpen, setCompaniesOpen] = useState(false);

  return (
    <>
      {/* Mobile Navbar Toggle */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b">
        <div className="flex space-x-2 items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
          <img
            src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Flogo-mobile.svg&w=64&q=75"
            alt="Logo"
            className="h-6"
          />
        </div>
      </div>

      {/* Sidebar Drawer */}
      {menuOpen && (
        <div className="fixed top-16 left-5 w-72 bg-white shadow-xl z-50 p-4 rounded-xl space-y-4 border">
          {/* EXPLORE Dropdown */}
          <div className="relative">
            <button
              className="w-full flex justify-between items-center px-2 py-2 font-semibold text-left"
              onClick={() => setExploreOpen(!exploreOpen)}
            >
              EXPLORE <ChevronDownIcon className="w-4 h-4" />
            </button>
            {exploreOpen && (
              <div className="mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-md">
                <ul className="divide-y divide-gray-100">
                  <li className="px-4 py-3 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                    🧭 LEARNING PATHS
                  </li>
                  <li className="px-4 py-3 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                    📱 CHALLENGES
                  </li>
                  <li className="px-4 py-3 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                    💻 SOLUTIONS
                  </li>
                  <li className="px-4 py-3 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                    📰 ARTICLES
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* FOR COMPANIES Dropdown */}
          <div className="relative">
            <button
              className="w-full flex justify-between items-center px-2 py-2 font-semibold text-left"
              onClick={() => setCompaniesOpen(!companiesOpen)}
            >
              FOR COMPANIES <ChevronDownIcon className="w-4 h-4" />
            </button>
            {companiesOpen && (
              <div className="mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-md">
                <ul className="divide-y divide-gray-100">
                  <li className="px-4 py-3 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                    HIRE DEVELOPERS
                  </li>
                  <li className="px-4 py-3 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                    TRAIN DEVELOPERS
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* UNLOCK PRO */}
          <div className="flex items-center gap-2 px-2">
            <span className="font-semibold border-b-2 border-red-500">UNLOCK</span>
            <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">PRO</span>
          </div>
        </div>
      )}

      {/* Desktop Logo */}
      <div className="lg:flex hidden">
        <img
          src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Flogo-desktop.svg&w=640&q=75"
          alt="Logo"
        />
      </div>
    </>
  );
}

export default Leftbar;
