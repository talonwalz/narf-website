import React, {useState} from 'react'
import image from '../../images/logoIcon.png'
import './Header.scss'

const Header = () => {
    const [ menu, setMenu ] = useState(false)
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
            <section className="hamburger-menu">
                <div>
                    <img onClick={() => setMenu(!menu)} src="https://img.icons8.com/material-rounded/24/000000/menu--v4.png" alt="hamburger menu"/>
                </div>
            </section>
            <ul className={ menu ? "dropdown" : "right" }>          
                <li>HOME</li>
                <li>OUR TEAM</li>
                <li>SERVICES</li>
                <li>NEW PATIENT</li>
                <li>CONTACT US</li>       
            </ul>          
        </header>
        </>
    )
}

export default Header
