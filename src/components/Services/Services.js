import React from 'react'
import Pool from './Pool'
import knee from '../../images/Narf/knee-pain.jpg'
import hip from '../../images/Narf/hip-pain.jpg'
import neck from '../../images/Narf/neck-pain.jpeg'
import shoulder from '../../images/Narf/shoulder-pain.png'
import back from '../../images/Narf/sciatica-and-back-pain.jpeg'

import './Services.scss'


const Services = () => {
    return (
        <main className="services-container">
            <h2>What We Treat</h2>
                <br />
            <section className="image-container">
                
                <ul>
                    <li>Sciatica and Back Pain Relief</li>
                    <li>Neck Pain Relief</li>
                    <li>Shoulder Pain Relief</li>
                    <li>Hip and Knee Pain Relief</li>
                    <li>Elbow, Wrist, and Hand Relief</li>
                    <li>Foot and Ankle Pain Relief</li>
                    <li>Balance and Gate Disorders</li>
                    <li>Arthritis Pain Relief</li>
                    <li>Chronic Pain Relief</li>
                    <li>Fibromyalgia</li>
                    <li>Post-Surgical Rehab</li>
                    <li>Sports Injury</li>
                    <li>Work Injury</li>
                </ul>

                    <article >
                        <img src={knee} alt="knee pain"/>
                        <h4>Knee Pain</h4>
                    </article>
                    <article >
                        <img src={hip} alt="knee pain"/>
                        <h4>Knee Pain</h4>
                    </article>
                    <article >
                        <img src={shoulder} alt="knee pain"/>
                        <h4>Knee Pain</h4>
                    </article>
                    <article >
                        <img src={back} alt="knee pain"/>
                        <h4>Knee Pain</h4>
                    </article>
                    <article >
                        <img src={neck} alt="knee pain"/>
                        <h4>Knee Pain</h4>
                    </article>
                    <article >
                        <img src={knee} alt="knee pain"/>
                        <h4>Knee Pain</h4>
                    </article>
                    <article >
                        <img src={hip} alt="knee pain"/>
                        <h4>Knee Pain</h4>
                    </article>
                    <article >
                        <img src={shoulder} alt="knee pain"/>
                        <h4>Knee Pain</h4>
                    </article>
                    <article >
                        <img src={back} alt="knee pain"/>
                        <h4>Knee Pain</h4>
                    </article>
                    <article >
                        <img src={neck} alt="knee pain"/>
                        <h4>Knee Pain</h4>
                    </article>
                    <article >
                        <img src={back} alt="knee pain"/>
                        <h4>Knee Pain</h4>
                    </article>
                    <article >
                        <img src={neck} alt="knee pain"/>
                        <h4>Knee Pain</h4>
                    </article>
            </section>
            <section>
                <h2>Treatments</h2>
                <ul>
                    <li>- Manual Therapy</li>
                    <li>- Traction</li>
                </ul>
            </section>
                <br/>
                <Pool />
           
        </main>
    )
}

export default Services
