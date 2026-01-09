import React from 'react'
import imgLogo from './../../../assets/logo-whiteonblack-01.png'
import { scrollToTarget } from '../../mouse-scroll/scrollToTarget'

const Navbar = () => {
  return (
    <nav className="fixed top-8 left-0 right-0 z-50 bg-black shadow-md rounded-[1rem] mx-auto max-w-4xl px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src={imgLogo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-3">
          <h2 className="text-white font-bold text-xl cursor-pointer">Explore</h2>
          <button
            className="rounded-lg bg-gray-200 px-6 py-2 text-lg font-medium text-black hover:bg-gray-300 transition"
            onClick={scrollToTarget}
          >
            Join Waiting List for Free
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
