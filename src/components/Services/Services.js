import React from 'react'
import Pool from './Pool'
import knee from '../../images/Narf/knee-pain.jpg'
import hip from '../../images/Narf/hip-pain.jpg'
import neck from '../../images/Narf/neck-pain.jpeg'
import shoulder from '../../images/Narf/shoulder-pain.png'
import sciatica from '../../images/Narf/sciatica.jpg'
import wrist from '../../images/Narf/wrist-and-hand.jpeg'
import postSurgery from '../../images/Narf/post-surgical-rehab.jpeg'
import arthritis from '../../images/Narf/arthritis.jpeg'
import balance from '../../images/Narf/balance.jpeg'
import fibromyalgia from '../../images/Narf/fibromyalgia.jpeg'
import foot from '../../images/Narf/FootAnkle.jpg'
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
                        <img src={hip} alt="Hip pain"/>
                        <h4>Hip Pain</h4>
                    </article>
                    <article >
                        <img src={shoulder} alt="shoulder pain"/>
                        <h4>Shoulder Pain</h4>
                    </article>
                    <article >
                        <img src={back} alt="back pain"/>
                        <h4>Back Pain</h4>
                    </article>
                    <article >
                        <img src={neck} alt="neck pain"/>
                        <h4>Neck Pain</h4>
                    </article>
                    <article >
                        <img src={sciatica} alt="sciatica"/>
                        <h4>Sciatica</h4>
                    </article>
                    <article >
                        <img src={foot} alt="foot and ankle pain"/>
                        <h4>Foot and Ankle Pain</h4>
                    </article>
                    <article >
                        <img src={wrist} alt="wrist and hand pain"/>
                        <h4>Wrist and Hand Pain</h4>
                    </article>
                    <article >
                        <img src={balance} alt="balance"/>
                        <h4>Balance</h4>
                    </article>
                    <article >
                        <img src={arthritis} alt="arthritis"/>
                        <h4>Arthritis</h4>
                    </article>
                    <article >
                        <img src={fibromyalgia} alt="fibromyalgia"/>
                        <h4>Fibromyalgia</h4>
                    </article>
                    <article >
                        <img src={postSurgery} alt="post-surgical rehab"/>
                        <h4>Post-Surgical Rehab</h4>
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
