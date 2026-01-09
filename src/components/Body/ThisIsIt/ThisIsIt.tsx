import React from 'react'

const ThisIsIt = () => {
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
            <p className="leading-[1.2] text-white">This is it!</p>
          </div>
        </div>
      </div>

      {/* Headline Section */}
      <div className="mt-[3rem] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[52px] text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white tracking-[-0.96px] w-[min-content]">
        <h3 className="leading-[1.3]">
          <span> Let's</span>
          <span className="text-[#00ebff]">Goooo</span>
          <span> !!!</span>
        </h3>
      </div>

      {/* Paragraph Section (slightly bolder) */}
      <div
        className="mt-[3rem] flex flex-col font-['Inter:Medium',sans-serif] font-semibold justify-center leading-[0] not-italic min-w-full shrink-0 text-[19px] text-[rgba(255,255,255,0.55)] text-center tracking-[-0.09px] w-[790px]"
        id="waitlist"
      >
        <p className="leading-[1.45]">
          Be among the first to experience a revolutionary approach to education. Early access
        </p>
        <p className="leading-[1.45]">members get exclusive benefits. It’s free registration!</p>
      </div>

      {/* Form Container */}
      <div className="mt-16 w-[90%] max-w-4xl bg-gradient-to-b from-[#091021] to-[#254187] shadow-[0_4px_10px_0_rgba(255,255,255,0.2)] rounded-2xl p-10 flex flex-col gap-6 mx-auto">
        {/* Headline Section */}
        <div className="mt-[3rem] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[52px] text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white tracking-[-0.96px] w-[min-content]">
          <h3 className="leading-[1.3]">
            <span>Join the Waiting List for </span>
            <span className="text-[#00ebff]">FREE</span>
          </h3>
        </div>

        {/* Paragraph Section (slightly bolder) */}
        <div className="mt-[1rem] flex flex-col font-['Inter:Medium',sans-serif] font-semibold justify-center leading-[0] not-italic min-w-full shrink-0 text-[19px] text-[rgba(255,255,255,0.55)] text-center tracking-[-0.09px] w-[790px]">
          <p className="leading-[1.45]">Scan the QR or click the register button.</p>
        </div>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-4 rounded-lg bg-[#0f1325] placeholder-white text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00ebff] transition"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-lg bg-[#0f1325] placeholder-white text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00ebff] transition"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-4 rounded-lg bg-[#0f1325] placeholder-white text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00ebff] transition"
        />
        <button className="px-6 py-3 rounded-2xl text-white font-medium text-xl md:text-2xl bg-gradient-to-r from-[#090edb] to-[#f33cc0] shadow-lg hover:opacity-90 transition">
          Register
        </button>
      </div>
    </section>
  )
}

export default ThisIsIt
