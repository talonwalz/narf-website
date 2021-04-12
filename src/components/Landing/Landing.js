import React from 'react'
import About from './About'
// import buildingImg from '../../images/building.jpg'
import './Landing.scss'
import { Link }  from 'react-router-dom'
import Carousel from './Slider'

const Landing = () => {
    return (
        <main className="landing">
            <h1 className="mission">Empowering our community one person at a time.</h1>
            {/* <section className="landing-container">
                <div className="links">
                <Link to="/patient-feedback"><button>Give Feedback</button></Link>
                <Link to="/covid-info"><button>Covid Updates</button></Link>
                <Link to="/contact-us"><button>Contact Us</button></Link>
                </div>
                <div className="mission">
                <h1>Empowering our community one person at a time.</h1>
                </div>
            </section> */}
            <Carousel/>
            <About />
        </main>
        
        
    )
}

export default Landing
