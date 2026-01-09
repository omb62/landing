import React from 'react'

const RealityWeFace = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#091021] to-[#254187] py-20 font-['Inter:Medium',sans-serif]">
      <div className="mx-auto px-6 text-center flex flex-col items-center">
        <div
          className="h-[43px] overflow-clip relative shrink-0 w-[270px]"
          data-name="Frame Chapter"
        >
          <div
            className="absolute bg-gradient-to-r from-[#090edb] inset-[0_11px] rounded-[20px] to-[#00ebff] via-50% via-[#e73dc4]"
            data-name="Rectangle Chapter"
          />
          <div
            className="absolute bg-[#091021] inset-[2px_17px] rounded-[15px]"
            data-name="Rectangle Chapter"
          />
          <div className="absolute bottom-[12px] flex flex-col font-['Sora:Light',sans-serif] font-normal justify-center leading-[0] left-[132px] text-[19px] text-center text-nowrap text-white top-[12px] translate-x-[-50%]">
            <p className="leading-[1.2] text-white">The reality we face</p>
          </div>
        </div>
      </div>

      {/* Headline Section */}
      <div className="mt-[3rem] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[52px] text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white tracking-[-0.96px] w-[min-content]">
        <h3 className="leading-[1.3]">
          <span>These </span>
          <span className="text-[#00ebff]">Stories</span>
          <span> sounds familiar?</span>
        </h3>
      </div>

      {/* Paragraph Section (slightly bolder) */}
      <div className="mt-[3rem] flex flex-col font-['Inter:Medium',sans-serif] font-semibold justify-center leading-[0] not-italic min-w-full shrink-0 text-[19px] text-[rgba(255,255,255,0.55)] text-center tracking-[-0.09px] w-[790px]">
        <p className="leading-[1.45]">
          Human share their struggles every day. These aren’t just problems, they’ve barriers
        </p>
        <p className="leading-[1.45]">
          preventing millions from preventing millions from reaching their potential
        </p>
      </div>
    </section>
  )
}

export default RealityWeFace
