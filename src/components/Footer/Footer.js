import React from 'react'
import image from '../../images/kokopellis.jpg'
import './Footer.scss'

const Footer = () => {
    return (
        <>
        <header className="footer-container">
        <ul className="left">
                <li>HOME</li>
                <li>OUR TEAM</li>
                <li>SERVICES</li>
                <li>NEW PATIENT</li>
                <li>CONTACT US</li>
                <li>LOGIN</li>
            </ul>   
            
            <section className="middle">
                <p>Northern Arizona Rehabilitation And Fitness</p>
                <p>480 S. Willard St.</p>
                <p>Cottonwood, AZ 86326</p>
                <p>(928) 649-9726</p>
            </section>
            <article className="right">
                <img src={image} alt="NARF logo"/>    
                <img className="fb" src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/>
                

            </article>   
        </header>
        </>
    )
}

export default Footer