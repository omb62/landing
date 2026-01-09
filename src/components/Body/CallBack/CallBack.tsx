import React from 'react'
import { scrollToTarget } from '../../mouse-scroll/scrollToTarget'

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#091021] to-[#254187] py-40 font-['Inter:Medium',sans-serif]">
      <div className="mx-auto px-6 text-center flex flex-col items-center">
        {/* Heading */}
        <div className="w-[90%] mx-auto">
          <h1
            className="leading-tight tracking-[-1.2px] text-transparent bg-clip-text text-4xl md:text-5xl lg:text-6xl font-black"
            style={{
              backgroundImage:
                'linear-gradient(90deg, #090edb 2.806%, #00ebff 40.095%, #f33cc0 117%)',
              textShadow: '0px 4px 4px rgba(0,0,0,0.25)',
            }}
          >
            <span className="block">Don’t cling so tightly to who you are today.</span>
            <span className="block">There’s a version of you in the future who’s</span>
            <span className="block">stronger, better, and waiting to grow.</span>
            <br />
          </h1>
        </div>

        {/* Description */}
        <p className="text-white text-xl md:text-2xl mb-2 font-semibold">
          This is the future Vloree is creating ——
        </p>
        <p className="text-white text-xl md:text-2xl mb-8 font-semibold">
          and you can be part of it.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-12">
          <button
            className="px-6 py-3 rounded-2xl text-white font-medium text-xl md:text-2xl bg-gradient-to-r from-[#090edb] to-[#f33cc0] border border-[#00ebff] hover:opacity-90 transition"
            onClick={scrollToTarget}
          >
            Join Waiting List for Free
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
