import React from 'react'
import { cards } from './data' // make sure cards has 15 items with {id, thumbnail, title, description}

const QASection: React.FC = () => {
  return (
    <section className="w-full px-16 py-16 bg-[#172954]">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Q&A Section</h1>
        <p className="text-lg text-gray-300">What are the frequent questions?</p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.slice(0, 15).map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            {/* Thumbnail + Title */}
            <div className="flex items-center gap-5 p-8 border-b border-gray-200">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="w-14 h-14 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-semibold text-gray-900">{card.title}</h3>
            </div>

            {/* Description */}
            <div className="p-8 text-gray-700 text-2xl flex-1 whitespace-pre-line">
              {card.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default QASection
