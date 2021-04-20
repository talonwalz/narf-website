import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'


const Nav = () => {
    const [ menu, setMenu ] = useState(false)

    return (
        <section className='nav-container'>
            <div onClick={() => setMenu(!menu)} className={menu ? "hamburger-x" : "hamburger"}>
                <div></div>
            </div>           
            <ul className={ menu ? "dropdown" : "null" }>
                <Link to="/" style={{textDecoration: "none"}} onClick={() => setMenu(!menu)}><li className="">HOME</li></Link>
                <Link to="/our-team" style={{textDecoration: "none"}} onClick={() => setMenu(!menu)}><li >OUR TEAM</li></Link>
                <Link to="/our-services" style={{textDecoration: "none"}} onClick={() => setMenu(!menu)}><li>SERVICES</li></Link>
                <Link to="/new-patient" style={{textDecoration: "none"}} onClick={() => setMenu(!menu)}><li>NEW PATIENT</li></Link>
                <Link to="/success-stories" style={{textDecoration: "none"}} onClick={() => setMenu(!menu)}><li>SUCCESS STORIES</li></Link>      
            </ul>  
        </section>
    )
}

export default Nav
