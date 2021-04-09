import React from 'react'
import logo from '../../images/fullLogo.png'
import './About.scss'


const About = () => {
    return (
        <main className="about-container"> 
            <img src={logo}/>
            <section>
                <h2>To promote, enhance, and facilitate the quality of life and the recovery of normal movement for our patients through skilled therapeutic intervention.</h2>
                <br/>
                <p>It is our mission to create an enjoyable family atmosphere and rewarding work environment where you are happy, love being here and can reach your individual aspirations and goals. Our entire staff is made up of very creative and high toned people who are committed to providing you with safe, effective and creative treatments. We promise to listen, understand and genuinely care about you and your condition. We will provide you with this level of service in a friendly, fun and compassionate atmosphere.</p>
                <br/>
                <p>At Northern Arizona Rehabilitation & Fitness, PC we specialize in treatment for all injuries to the spine, shoulder, elbow, wrist/hand, hip, knee and foot/ankle. At any time during the day, our clinic is filled with athletes and non-athletes alike ranging in age from 15-97.</p>
                <br/>
                <p>All our physical therapists are licensed by the state of Arizona and are actively involved in your program throughout the course of treatment. Your treatment will include a comprehensive initial examination and the development of an individualized treatment plan. Our rehabilitation environment allows for close supervision and personalized care; this ensures your program is performed safely and correctly. When it comes to physical therapy, we know you have a choice and we truly appreciate you choosing us!</p>
            </section>  
        </main>
    )
}

export default About
