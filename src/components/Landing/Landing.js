import React from 'react'
import About from './About'
// import buildingImg from '../../images/building.jpg'
import './Landing.scss'
// import { Link }  from 'react-router-dom'
import Carousel from './Slider'

const Landing = () => {
    return (
        <main className="landing">
            <h1 className="mission" >Empowering our community one person at a time.</h1>
            <Carousel/>
            <About />
        </main>
        
        
    )
}

export default Landing
