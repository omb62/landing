import React from 'react'
import { cards } from './data'

const ProblemWalls: React.FC = () => {
  return (
    <section className="w-full px-6 py-16 bg-[#172954]">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div key={card.id} className="flex flex-col">
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-black aspect-[4/5]">
              {/* Video */}
              <video
                className="w-full h-[70%] object-cover cursor-pointer"
                src={card.videoSrc}
                playsInline
                onClick={(e) => {
                  const video = e.currentTarget
                  video.paused ? video.play() : video.pause()
                }}
              />

              {/* Overlay Image (30% height) */}
              <div className="absolute bottom-0 left-0 w-full h-[30%] group">
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                />

                {/* Text Overlay */}
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-6 py-2">
                  <h3 className="text-white text-xl font-semibold">{card.title}</h3>
                  <p className="text-white/80 text-base mt-1 line-clamp-2">{card.description}</p>
                </div>
              </div>
            </div>

            {/* New white container with text */}
            <div className="mt-4 bg-white p-4 px-6 rounded-2xl h-24 flex items-center">
              <p className="text-black text-l font-semibold">{card.whatifs}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Text after cards */}
      <h3 className="mt-12 text-center text-white font-bold text-xl mx-auto">
        The cost of inaction? Lost potential, frustrated families, and an education system that’s
        failing to evolve
      </h3>
    </section>
  )
}

export default ProblemWalls
