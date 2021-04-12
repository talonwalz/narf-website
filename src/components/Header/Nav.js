import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'


const Nav = () => {
    const [ menu, setMenu ] = useState(false)
    return (
        <section className='nav-container'>
            {/* <ul className={ menu ? "dropdown" : "right" }>           */}
            <ul>
                <Link to="/" style={{textDecoration: "none"}}><li>HOME</li></Link>
                <Link to="/our-team" style={{textDecoration: "none"}}><li>OUR TEAM</li></Link>
                <Link to="/our-services" style={{textDecoration: "none"}}><li>SERVICES</li></Link>
                <Link to="/new-patient" style={{textDecoration: "none"}}><li>NEW PATIENT</li></Link>
                <Link to="/contact-us" style={{textDecoration: "none"}}><li>CONTACT US</li></Link>      
            </ul>  
        </section>
    )
}

export default Nav
