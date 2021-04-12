import React, {useState} from 'react'
import image from '../../images/logoIcon.png'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import './Header.scss'

const Header = () => {
    const [ menu, setMenu ] = useState(false)
    return (
        <nav>
        <header className="header-container">
            <img className="left" src={image} alt="NARF logo"/>
            <section className="middle">
                <p>Northern Arizona Rehabilitation And Fitness</p>
                <p>480 S. Willard St.</p>
                <p>Cottonwood, AZ 86326</p>
                <p>(928) 649-9726</p>
            </section>
            <section className="hamburger-menu">
                <div>
                    <img onClick={() => setMenu(!menu)} src="https://img.icons8.com/material-rounded/24/000000/menu--v4.png" alt="hamburger menu"/>
                </div>
            </section>
            {/* <ul className={ menu ? "dropdown" : "right" }>          
                <Link to="/"><li>HOME</li></Link>
                <Link to="/our-team"><li>OUR TEAM</li></Link>
                <Link to="/our-services"><li>SERVICES</li></Link>
                <Link to="/new-patient"><li>NEW PATIENT</li></Link>
                <Link to="/contact-us"><li>CONTACT US</li></Link>      
            </ul>     */}
            <section className="right">
                <div className="links">
                <Link to="/patient-feedback"><button className='btn-1'>Give Feedback</button></Link>
                <Link to="/covid-info"><button className='btn-2'>Covid Updates</button></Link>
                <Link to="/contact-us"><button className='btn-3'>Contact Us</button></Link>
                </div>
            </section>
            
        </header>
        <section className='nav-section'>
            <Nav />
            </section>
        </nav>
    )
}

export default Header
