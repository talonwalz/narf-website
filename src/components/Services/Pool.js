import React from 'react'
import pool from '../../images/Narf/pool.jpeg'
import './Pool.scss'

const Pool = () => {
    return (
        // <section>
            
        //     <br/>
        //     <h3>Benefits</h3>
        // </section>
        <main className="pool-container">
            <h2>Aquatic Therapy</h2>
            <img src={pool} alt="pool"/>
            <section className="treatment-container">
                <h3>Benefits</h3>              
                <ul className="reasons-for-pool">
                    <li>Buoyancy (up to 90% of our body weight is removed)</li>
                    <li>Reduced pain & muscle spasm</li>
                    <li>Increased range of motion</li>
                    <li>Increased relaxation</li>
                    <li>Increased circulation</li>
                    <li>Decreased swelling</li>
                    <li>Accelerates healing process</li>
                    <li>Shoulder, knee, and ankle reconstructive surgery</li>
                    <li>Allows patients mobility and freedom</li>
                </ul>
            </section>
            
        </main>
        
    )
}

export default Pool
