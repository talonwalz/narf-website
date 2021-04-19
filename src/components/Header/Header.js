import React, {useState} from 'react'
import image from '../../images/logoIcon.png'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import './Header.scss'

const Header = () => {
    return (
        <nav>
        <header className="header-container">
            <Link to="/" style={{textDecoration: "none"}} className="left">
            <img src={image} alt="NARF logo"/>
            </Link>
            <section className="middle">
                <p>Northern Arizona Rehabilitation And Fitness</p>
                <p>480 S. Willard St.</p>
                <p>Cottonwood, AZ 86326</p>
                <p>(928) 649-9726</p>
            </section>
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
