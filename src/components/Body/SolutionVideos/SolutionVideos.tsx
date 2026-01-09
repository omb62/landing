import React from 'react'
import { cards } from './data'

const SolutionVideos: React.FC = () => {
  return (
    <section className="w-full px-6 py-16 bg-[#172954]">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.slice(0, 2).map((card) => (
          <div key={card.id} className="flex flex-col">
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-black h-[32rem]">
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
          </div>
        ))}
      </div>
    </section>
  )
}

export default SolutionVideos
