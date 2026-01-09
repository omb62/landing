import React from 'react'
import ProblemWalls from './components/Body/ProblemWalls/ProblemWalls'
import OurSolution from './components/Body/OurSolution/OurSolution'
import SolutionVideos from './components/Body/SolutionVideos/SolutionVideos'
import ThisIsIt from './components/Body/ThisIsIt/ThisIsIt'
import BrandPromise from './components/Body/BrandPromise/BrandPromise'
import BrandPromiseList from './components/Body/BrandPromiseList/BrandPromiseList'
import CallBack from './components/Body/CallBack/CallBack'
import QASection from './components/Body/QASection/QASection'

const Body = () => {
  return (
    <div className="overflow-x-hidden">
      <ProblemWalls />
      <OurSolution />
      <SolutionVideos />
      <ThisIsIt />
      <BrandPromise />
      <BrandPromiseList />
      <CallBack />
      <QASection />
    </div>
  )
}

export default Body
