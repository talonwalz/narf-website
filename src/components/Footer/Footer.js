import React from 'react'
// import image from '../../images/kokopellis.jpg'
import image from '../../images/logoIcon.png'
import { Link } from 'react-router-dom'
import './Footer.scss'

const googleReview = `https://www.google.com/search?q=northern+arizona+rehab+and+fitness&rlz=1C5CHFA_enUS939US939&sxsrf=ALeKk01GrOB8Kt4JBAPwqzUz-jI3EGUq2A%3A1618265615150&ei=D8Z0YJDFCMmUtAbi0rTABA&oq=norther&gs_lcp=Cgdnd3Mtd2l6EAEYADIECCMQJzIFCAAQkQIyBQguEJECMgoILhCHAhCxAxAUMgUIABCRAjIFCAAQkQIyBQguEJECMgUIABCxAzIFCAAQsQMyDQguEIcCEMcBEK8BEBQ6BwgjELADECc6BwgAEEcQsAM6EAguEMcBEKMCELADEMgDEEM6CgguELADEMgDEENKBQg4EgExUKMJWKMJYLUQaAFwAngAgAGPAYgBjQKSAQMwLjKYAQCgAQGqAQdnd3Mtd2l6yAEPwAEB&sclient=gws-wiz#lrd=0x872d0ff2380e2769:0xba632fdc16ac17d8,1,,,`

const Footer = () => {
    return (
        
        <header className="footer-container">
        <ul className="left">
                <Link to="/" style={{textDecoration: "none"}}><li>HOME</li></Link>
                <Link to="/our-team" style={{textDecoration: "none"}}><li>OUR TEAM</li></Link>
                <Link to="/our-services" style={{textDecoration: "none"}}><li>SERVICES</li></Link>
                <Link to="/new-patient" style={{textDecoration: "none"}}><li>NEW PATIENT</li></Link>
                <Link to="/contact-us" style={{textDecoration: "none"}}><li>CONTACT US</li></Link>
                <Link to="/auth" style={{textDecoration: "none"}}><li>LOGIN</li></Link>
            </ul>   
            
            <section className="middle">
                <p>Northern Arizona Rehabilitation And Fitness</p>
                <p>480 S. Willard St.</p>
                <p>Cottonwood, AZ 86326</p>
                <p>(928) 649-9726</p>
            </section>
            <article className="right">
                <Link to="/" style={{textDecoration: "none"}}><img className="footer-logo" src={image} alt="NARF logo"/></Link>  
                <div>
                    <a href="https://www.facebook.com/norazrehab" target="_blank" rel="noopener noreferrer"><img className="fb" src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="facebook link"/></a>
                    <a href={googleReview} target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/fluent/48/000000/google-logo.png" alt="google review link"/></a>
                </div>
            </article>   
        </header>        
    )
}

export default Footer