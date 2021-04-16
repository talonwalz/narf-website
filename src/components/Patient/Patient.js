import React from 'react'
import logo from '../../images/fullLogo.png'
import patientFile from '../../images/Patientforms.pdf'
import './Patient.scss'

const Patient = () => {
    return (
        <main className="patient-container">
            <img src={logo} alt="narf logo"/>
            <section>
                <h2>Patient Forms</h2>
                <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1IBYAw9T0FFJUYDx0VSNfkGQBi20nDG0gaDUYv5BuQDE/edit?usp=sharing">Link to Patient form</a>
                <a target="_blank" rel="noopener noreferrer" href={patientFile}>PDF</a>
            </section>
        </main>
    )
}

export default Patient
