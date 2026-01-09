import React from 'react'
import { FaRocket, FaShieldAlt, FaCogs, FaChartLine, FaUsers } from 'react-icons/fa'

type ListItem = {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

const listItems: ListItem[] = [
  {
    id: 1,
    title: 'We highlight achievements, not arguments',
    description: 'People see what lifts them up, not what drags them down.',
    icon: <FaRocket />,
  },
  {
    id: 2,
    title: 'We reward kindness, not cruelty',
    description: 'Kind people become visible. Hurtful behaviour doesn’t get rewarded.',
    icon: <FaShieldAlt />,
  },
  {
    id: 3,
    title: 'We celebrate effort, not drama',
    description: 'Growth matters more than gossip.',
    icon: <FaCogs />,
  },
  {
    id: 4,
    title: 'We amplify education, not outrage',
    description: 'You get smarter from your feed, not stressed.',
    icon: <FaChartLine />,
  },
  {
    id: 5,
    title: 'We encourage reflection, not comparison',
    description: 'You grow at your own pace, without pressure.',
    icon: <FaUsers />,
  },
]

const BrandPromiseList: React.FC = () => {
  return (
    <section className="bg-white text-black py-16">
      <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 mx-[2%]">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            You can’t expect students or professionals to learn, build confidence, or develop skills
            in a space filled with negativity.
          </h1>
          <br></br>
          <h1 className="text-5xl font-extrabold leading-tight">
            So we built Vloree as a space that lifts people up because growth only happens when you
            feel safe and encouraged.
          </h1>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {listItems.map((item) => (
            <div key={item.id} className="bg-blue-900 text-white rounded-2xl p-6">
              {/* First Row: Thumbnail + Title */}
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl text-white">{item.icon}</div>
                <h2 className="text-2xl font-semibold">{item.title}</h2>
              </div>

              {/* Second Row: Description */}
              <p className="text-xl leading-relaxed text-white/90">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandPromiseList
