import React from 'react'
import logo from '../../images/kokopellis.jpg'
import patientFile from '../../images/Patientforms.pdf'
import { Link } from 'react-router-dom'

import './Patient.scss'

const Patient = () => {
    return (
        <main className="patient-container">
            
            <section>
                <h2>New Patients</h2>
                <p>To help expedite your first visit, please download, print and complete these forms. Bring them with you when you come in for your first visit. If you choose to fill out the patient form packet at our office, please arrive 10-15 minutes before your appointment to allow enough time to get them completed before your appointment. If you have any questions give us a call.</p>
                {/* <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1IBYAw9T0FFJUYDx0VSNfkGQBi20nDG0gaDUYv5BuQDE/edit?usp=sharing">Link to Patient form</a> */}
                <a target="_blank" rel="noopener noreferrer" href={patientFile}><button className=" one mainBtn">Patient Forms</button></a>
                <Link to="/contact-us"><button className=' two mainBtn'><strong>Contact Us</strong></button></Link>
                {/* <a target="_blank" rel="noopener noreferrer" href={patientFile}><button className=" two mainBtn">Patient Forms</button></a>
                <a target="_blank" rel="noopener noreferrer" href={patientFile}><button className=" three mainBtn">Patient Forms</button></a> */}
            </section>
            <img src={logo} alt="narf logo"/>
        </main>
    )
}

export default Patient
