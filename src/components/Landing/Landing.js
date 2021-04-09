import React from 'react'
import About from './About'
import buildingImg from '../../images/building.jpg'
import './Landing.scss'
import { Link }  from 'react-router-dom'

const Landing = () => {
    return (
        <section className="landing-container">
            <div>
                <Link to="/patient-feedback"><button>Give Feedback</button></Link>
                <Link to="/covid-info"><button>Covid Updates</button></Link>
                <Link to="/contact-us"><button>Contact Us</button></Link>
                </div>
                <About />
        </section>
        
        
    )
}

export default Landing
