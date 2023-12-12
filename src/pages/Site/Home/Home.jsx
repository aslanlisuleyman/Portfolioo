import React from 'react'
import './Home.css'
import HomeHeader from '../../../components/Site/HomeHeader/HomeHeader'
import Slider from '../../../components/Site/Sliders/Slider'
import Static from '../../../components/Site/Static/Static'

const Home = () => {
  return (
    <div style={{backgroundColor:'white'}}>
    <HomeHeader/>
    <Slider/>
    <Static/>
    </div>
    
  )
}

export default Home