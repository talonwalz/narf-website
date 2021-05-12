import React from 'react'
import Pool from './Pool'
// import knee from '../../images/Narf/knee-pain.jpg'
// import hip from '../../images/Narf/hip-pain.jpg'
// import neck from '../../images/Narf/neck-pain.jpeg'
// import shoulder from '../../images/Narf/shoulder-pain.png'
// import sciatica from '../../images/Narf/sciatica.jpg'
// import wrist from '../../images/Narf/wrist-and-hand.jpeg'
// import postSurgery from '../../images/Narf/post-surgical-rehab.jpeg'
// import arthritis from '../../images/Narf/arthritis.jpeg'
// import balance from '../../images/Narf/balance.jpeg'
// import fibromyalgia from '../../images/Narf/fibromyalgia.jpeg'
// import foot from '../../images/Narf/FootAnkle.jpg'
// import back from '../../images/Narf/sciatica-and-back-pain.jpeg'


import './Services.scss'


const Services = () => {
    return (
        <main className="services-container">
            <h1>What We Treat</h1>
                <br />
            <section className="symptoms-container"> 
                <ul>
                    <li>Sciatica and Back Pain</li>
                    <li>Neck Pain</li>
                    <li>Shoulder Pain</li>
                    <li>Hip and Knee Pain</li>
                    <li>Elbow, Wrist, and Hand Pain</li>
                    <li>Foot and Ankle Pain</li>
                    <li>Dizziness and Balance Impairments</li>
                </ul>
                <ul>
                    <li>Balance and Gate Disorders</li>
                    <li>Arthritis Pain</li>
                    <li>Chronic Pain</li>
                    <li>Fibromyalgia</li>                  
                    <li>Sports Injury</li>
                    <li>Work Injury</li>
                    <li>General Weakness</li>
                </ul>

            </section>
            <h1>Treatments</h1>
            <section className="treatment-container">
                <ul>
                    <li>Physical Therapy Evaluation and Intervention</li>
                    <li>Aquatic Therapy</li>
                    <li>Orthopedic Manual Therapy</li>
                    <li>Ergonomic Evaluations</li>
                    <li>Sport Specific Training</li>
                    <li>Individualized Fitness Programs</li>
                    <li>Community Wellness</li>
                    <li>Balance Training and Fall Prevention</li>
                </ul>
                <ul>
                    <li>Therapeutic Ultrasound</li>
                    <li>Electrical Stimulation</li>
                    <li>Mechanical Lumbar Traction</li>
                    <li>Mechanical Cervical Traction</li>
                    <li>Laser Light Therapy</li>
                    <li>Therapeutic Exercise</li>
                    <li>Iontophoresis</li>
                    <li>Post-Surgical Rehab</li>
                </ul>
            </section>
                <br/>
            <Pool />
           
        </main>
    )
}

export default Services

// Displays everything in block format
// {/* <article >
//     <img src={knee} alt="knee pain"/>
//     <h4>Knee Pain</h4>
// </article>
// <article >
//     <img src={hip} alt="Hip pain"/>
//     <h4>Hip Pain</h4>
// </article>
// <article >
//     <img src={shoulder} alt="shoulder pain"/>
//     <h4>Shoulder Pain</h4>
// </article>
// <article >
//     <img src={back} alt="back pain"/>
//     <h4>Back Pain</h4>
// </article>
// <article >
//     <img src={neck} alt="neck pain"/>
//     <h4>Neck Pain</h4>
// </article>
// <article >
//     <img src={sciatica} alt="sciatica"/>
//     <h4>Sciatica</h4>
// </article>
// <article >
//     <img src={foot} alt="foot and ankle pain"/>
//     <h4>Foot and Ankle Pain</h4>
// </article>
// <article >
//     <img src={wrist} alt="wrist and hand pain"/>
//     <h4>Wrist and Hand Pain</h4>
// </article>
// <article >
//     <img src={balance} alt="balance"/>
//     <h4>Balance</h4>
// </article>
// <article >
//     <img src={arthritis} alt="arthritis"/>
//     <h4>Arthritis</h4>
// </article>
// <article >
//     <img src={fibromyalgia} alt="fibromyalgia"/>
//     <h4>Fibromyalgia</h4>
// </article>
// <article >
//     <img src={postSurgery} alt="post-surgical rehab"/>
//     <h4>Post-Surgical Rehab</h4>
// </article> */}