import React from 'react'
import Navbar from './components/Header/Navbar/Navbar'
import Hero from './components/Header/Hero/Hero'
import RealityWeFace from './components/Header/RealityWeFace/RealityWeFace'

const Header = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <RealityWeFace />
    </div>
  )
}

export default Header
