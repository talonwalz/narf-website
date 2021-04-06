import React from 'react'
import image from '../../images/logoIcon.png'
import './Header.scss'

const Header = () => {
    return (
        <>
        <header className="header-container">
            <img className="left" src={image} alt="NARF logo"/>
            <section className="middle">
                <p>Northern Arizona Rehabilitation And Fitness</p>
                <p>480 S. Willard St.</p>
                <p>Cottonwood, AZ 86326</p>
                <p>(928) 649-9726</p>
            </section>
            <ul className="right">
                <li>HOME</li>
                <li>OUR TEAM</li>
                <li>SERVICES</li>
                <li>NEW PATIENT</li>
                <li>CONTACT US</li>
                <div><img src="https://img.icons8.com/material-rounded/24/000000/menu--v4.png"/>
                </div>
            </ul>          
        </header>
        </>
    )
}

export default Header
