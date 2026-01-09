import React from 'react'
import imgHero from './../../../assets/hero_section_image.png'
import { scrollToTarget } from '../../mouse-scroll/scrollToTarget'

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#091021] to-[#254187] py-40 font-['Inter:Medium',sans-serif]">
      <div className="mx-auto px-6 text-center flex flex-col items-center">
        {/* Heading */}
        <div className="w-full mx-[5rem]">
          <h1
            className="leading-tight tracking-[-1.2px] text-transparent bg-clip-text text-5xl md:text-6xl lg:text-7xl font-black"
            style={{
              backgroundImage:
                'linear-gradient(90deg, #090edb 2.806%, #00ebff 40.095%, #f33cc0 117%)',
              textShadow: '0px 4px 4px rgba(0,0,0,0.25)',
            }}
          >
            <span className="block">Your digital space for kindness,</span>
            <span className="block">learning, and the best version of you.</span>
            <br />
          </h1>
        </div>

        {/* Description */}
        <p className="text-white text-xl md:text-2xl mb-2 font-semibold">
          You deserve better than a black hole for all your achievements in any activities.
        </p>
        <p className="text-white text-xl md:text-2xl mb-8 font-semibold">
          You deserve a space where your effort finally means something.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-12">
          <button
            className="px-6 py-3 rounded-2xl text-white font-medium text-xl md:text-2xl bg-gradient-to-r from-[#090edb] to-[#f33cc0] border border-[#00ebff] hover:opacity-90 transition"
            onClick={scrollToTarget}
          >
            Join Waiting List for Free
          </button>

          <button className="px-6 py-3 rounded-2xl font-medium text-white text-xl md:text-2xl border border-gray-300 hover:bg-white hover:text-gray-800 transition">
            Explore
          </button>
        </div>

        {/* Image */}
        <div className="mx-[20%] backdrop-blur-[2px] backdrop-filter inset-0 overflow-hidden rounded-[32px] border-2 border-white ">
          <img
            src={imgHero}
            alt="Preview"
            className="h-full left-[-0.24%] max-w-none top-[-0.38%] w-[170.39%] rounded-[2rem]"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
