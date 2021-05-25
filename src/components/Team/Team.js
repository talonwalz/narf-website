import React from 'react'
import tarrin from '../../images/tarrinNew.jpg'
// import dan from '../../images/dan.JPG'
import dan2 from '../../images/dan2.jpg'
import dawn from '../../images/dawn.jpg'
import './Team.scss'

const Team = () => {
    return (
        <main className="team-container">
            <h1>Our Team</h1>
            <section className="person">
            <img classname="image1" src={tarrin} alt="Tarrin Walz"/>
            <article>
                <h2>Tarrin Walz, PT, MS / Owner</h2>
                <br/>
                <p>Tarrin graduated from Utah State University in Logan, UT in 1994 with a B.S. in Exercise Science and again in 1997 with an M.S. in Exercise Physiology with an emphasis in Cardiac Rehabilitation. He then received his M.S. in Physical Therapy from Regis University in Denver, CO in 1999. Shortly after moving his family to Cottonwood in 2000, along with business partner Philip A. Sauer, RPT, opened Northern Arizona Rehabilitation & Fitness, PC (NARF). Tarrin is a member of the American Physical Therapy Association and the National Strength and Conditioning Association.
                </p>     
                <br/>
                <p>
                Tarrin has experience working in sports medicine, orthopedics, athletic training and aquatic rehabilitation. He is a proud supporter of Mingus Union H.S. athletics and is involved with numerous sports programs. He enjoys spending time with his kids, playing sports, and remains active in numerous community activities.
                </p>
            </article>    
            </section>
            <section className="person">
            <img src={dan2} alt="Dan Sorensen"/>
            <article>
                <h2>Dan Sorensen, PT, MPT</h2>
                <br/>
                <p>Dan graduated with his Master's degree in physical therapy in 2003 and has been working at Northern Arizona Rehabilitation & Fitness since then. Dan is an Arizona native who grew up in the Phoenix area. He went to school in Utah and Texas, but came back to Arizona to enjoy the great weather and be close to family. He is happily married to a beautiful wife and has five children who keep him entertained and busy. Some of his hobbies and interests are exercising, reading, hunting, Formula 1 racing, and spending time with his family. He has taken multiple courses in treatment for sports injuries, osteoarthritis, and strength/conditioning.
                </p>
                <br/>
                <p>"I love physical therapy because I get to see people return to a better lifestyle and enjoy being part of the process!"
                </p>
            </article>  
            </section>
            <section className="person">
            <img src={dawn} alt="Dawn Rossi"/>
            <article >
                <h2>Dawn Rossi, PTA</h2>
                <br/>
                <p>Dawn is from Anchorage Alaska.  She graduated from NAU in 1992 with degree in Psychology and received her Physical Therapist Assistant training at Green River Community College in 2000.  Dawn has been a PTA for 18 years working in many different settings, including in-patient, out-patient, acute care, skilled nursing and home health. Outpatient PT is her favorite setting.  She specializes in aquatic training and myofascial release techniques (MFR).  She decided to leave the travelling therapist world and joined team NARF in 2018 and has been helping people get their lives back ever since.</p>
            </article>   
            </section>
        </main>
    )
}

export default Team
