import React, {useState } from 'react'
import './Contact.scss'
// import image from '../../images/logoIcon.png'
import image from '../../images/logoIcon.png'

import axios from 'axios'


const Contact = () => {
    const [ date, setDate ] = useState(new Date().toDateString())
    const [ first, setFirst ] = useState('')
    const [ last, setLast ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ subject, setSubject ] = useState('')


    function addRequest() {

            // axios.post('/api/email-us', { first, last, phone, message, email, subject})
            // // .then(res => console.log(res.data))
            
            // .catch(err => console.log(err))
            // axios.post('/api/email-from-us', { first, last, email })
            emailUs()
            emailFromUs()
            axios.post('/api/request-info', { first, last, phone, message, date})
            .then(res => {
                setFirst('')
                setLast('')
                setPhone('')
                setMessage('')
                setEmail('')
                setSubject('')
                console.log(res.data)
            })
            .catch(err => console.log(err))

    }

    function emailUs() {
        axios.post('/api/email-us', { first, last, phone, message, email, subject})
        .then()
        .catch(err => console.log(err))
    }

    function emailFromUs() {
        axios.post('/api/email-from-us', { first, last, email, image })
        .then()
        .catch(err => console.log(err))
    }


    return (
        <main className="contact">
            {/* <h2>Contact Us</h2> */}
            {/* <img src={image} alt="narf logo"/> */}
            <section className="contact-container">
            <h1>Contact Us</h1>
            <article className="address">    
                <h2>Phone #: (928) 649-9726</h2>
                <h2>Fax #: (928) 634-2079</h2>
                <h2>480 S. Willard St.</h2>
                <h2>Cottonwood, AZ 86326</h2>
            </article>
            <h1>Hours</h1>
            <article className="hours">
                <section>
                    <div>
                        <h2>Monday</h2>
                        <h2>Tuesday</h2>
                        <h2>Wednesday</h2>
                        <h2>Thursday</h2>
                        <h2>Friday</h2>
                        <h2>Saturday</h2>
                        <h2>Sunday</h2>
                    </div>
                    <div>
                        <h2>closed</h2>
                        <h2>7:00 AM - 6:00 PM</h2>
                        <h2>7:00 AM - 6:00 PM</h2>
                        <h2>7:00 AM - 6:00 PM</h2>
                        <h2>7:00 AM - 6:00 PM</h2>
                        <h2>closed</h2>
                        <h2>closed</h2>
                    </div>
                </section>
            </article>
            <h1>Request an Appointment</h1>
            <section className="request-info">   
                <div className="input-box">
                    <div className="inputs">
                    <label >First: </label>
                    <input id="fname" placeholder="first name" value={first}onChange={e => setFirst(e.target.value)} required/>
                    </div>
                    <div className="inputs">
                    <label >Last: </label>
                    <input id="lname" placeholder="last name" value={last} onChange={e => setLast(e.target.value)} required/>
                    </div>
                </div>
                <div className="input-box">
                    {/* <label htmlFor="tel">ex: 928-649-9726</label> */}
                    <div className="inputs">
                    <label>Phone #: </label>
                    <input placeholder="phone number" type="tel" id="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" value={phone} onChange={e => setPhone(e.target.value)} required minLength={9}/>
                    </div>
                    <div className="inputs">
                    <label>Email: </label>
                    <input  type="email" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} required/> 
                    </div>
                    <input  type="hidden" placeholder="date" value={date} onChange={e=>setDate(e.target.value)} required/>
                </div> 
                <div className="inputs special">
                    <label>Subject:</label>
                    <input type="text" placeholder="request apt" value={subject} onChange={e=>setSubject(e.target.value)} required/>
                </div>   
                <div className="inputs">
                <label className="message">Message: </label>          
                <textarea placeholder="ask any specific questions..." value={message} onChange={e => setMessage(e.target.value)} required/>
                </div> 
                <button className="mainBtn" onClick={addRequest}>Submit</button>
            </section>
            </section>
        </main>
    )
}

export default Contact
