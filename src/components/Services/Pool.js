import React from 'react'
import './Pool.scss'

const poolImg = 'https://media.istockphoto.com/photos/woman-in-physical-therapy-in-the-water-picture-id510636428?k=6&m=510636428&s=612x612&w=0&h=IZE_lHGtFy1Zd8gO34t0ZodEfQ4Oqg4RCiOYH9Dhze8='

const Pool = () => {
    return (
        // <section>
            
        //     <br/>
        //     <h3>Benefits</h3>
        // </section>
        <main className="pool-container">
            <h1>Aquatic Therapy</h1>
            <img src={poolImg} alt="pool"/>
            <section className="aquatic-therapy">
                <h2>Benefits</h2>
                <p>Aquatic Therapy is provided by our physical therapy staff in our multi-depth, therapeutic pool at Northern Arizona Rehabilitation & Fitness. It is offered as a modality in conjunction with land based therapy or by itself as the primary therapy if appropriate. Individuals can access the pool either by stairs or a hydraulic lift that uses a chair or stretcher. Depths range from 4 to 6 feet.</p>              
                <div className="pool-benefits">
                <details>
                    <summary>Increase in Joint Flexibility</summary>
                    <p>Buoyancy offers a tremendous advantage because it reduces the effects of gravity allowing for increased joint range of motion. </p>
                </details>
                <details>
                    <summary>Increase in Muscle Strength</summary>
                    <p>Water is 600-700 times more resistive than air which allows for strengthening of weakened muscles.</p>
                </details>
                <details>
                    <summary>Decrease in Pain</summary>
                    <p>Immersion in warm water increases an individual’s comfort, by increasing blood supply to sore muscles and promoting relaxation. Weight relief to weakened body structures also creates additional comfort.</p>
                </details>
                <details>
                    <summary>Decrease in Abnormal Tone, Spasticity, and Rigidity</summary>
                    <p>Water temperatures above 92 degrees in conjunction with hands on techniques are effective in creating neutral warmth that reduces increased tone due to a neurological injury.</p>
                </details>
                <details>
                    <summary>Improved Balance</summary>
                    <p>The uniform pressure of the water along with buoyancy provides support to your body which allows you increased time to react without the fear of falling or getting hurt.</p>
                </details>
                </div>
            </section>
            
        </main>
        
    )
}

export default Pool
