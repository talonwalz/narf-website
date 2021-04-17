import React, {useState, useEffect } from 'react'
import './Contact.scss'
import image from '../../images/logoIcon.png'
import axios from 'axios'


const Contact = () => {
    const [ date, setDate ] = useState(new Date().toDateString())
    const [ first, setFirst ] = useState('')
    const [ last, setLast ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ email, setEmail ] = useState('')
        

    function addRequest() {
        if(first.length < 5) {
            alert('this is too short')
        } else {

            axios.post('/api/email-us', { first, message, email, last, date})
            .then(res => console.log(res.data))

            axios.post('/api/email-from-us', { email, last, date})

            axios.post('/api/request-info', { first, last, phone, message, date})
            .then(res => {
                setFirst('')
                setLast('')
                setPhone('')
                setMessage('')
                setEmail('')
                console.log(res.data)
            })
            .catch(err => console.log(err))

            
        }
    }

    return (
        <main className="contact">
            <h2>Contact Us</h2>
            <img src={image} alt="narf logo"/>
            <section className="contact-container">

            <article className="address">  
                <h5>Phone #: (928) 649-9726</h5>
                <h5>Fax #: (928) 634-2079</h5>
                <h5>480 S. Willard St.</h5>
                <h5>Cottonwood, AZ 86326</h5>
            </article>

            <article className="hours">
                {/* <div>
                <h5>Hours</h5>
                </div> */}
                <div>
                    <h5>Monday</h5>
                    <h5>Tuesday</h5>
                    <h5>Wednesday</h5>
                    <h5>Thursday</h5>
                    <h5>Friday</h5>
                    <h5>Saturday</h5>
                    <h5>sunday</h5>
                </div>
                <div>
                <h5>closed</h5>
                <h5>7:00 AM - 6:00 PM</h5>
                <h5>7:00 AM - 6:00 PM</h5>
                <h5>7:00 AM - 6:00 PM</h5>
                <h5>7:00 AM - 6:00 PM</h5>
                <h5>closed</h5>
                <h5>closed</h5>
                </div>
            </article>

            <form className="request-info">
                <h5>Request an Appointment</h5>
                <div>

                    {/* <label>First: </label> */}
                    <input placeholder="first name" value={first}onChange={e => setFirst(e.target.value)}/>
                    {/* <label>Last: </label> */}
                    <input placeholder="last name" value={last} onChange={e => setLast(e.target.value)}/>
                </div>
                <div>
                    {/* <label htmlFor="tel">ex: 928-649-9726</label> */}
                    {/* <label>Phone #: </label> */}
                    <input placeholder="phone number" type="tel" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phone} onChange={e => setPhone(e.target.value)} required minLength={9}/>
                    {/* <label>email: </label> */}
                    <input  type="email" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)}/> 
                    <input  type="hidden" placeholder="date" value={date} onChange={e=>setDate(e.target.value)}/>
                </div>     
                {/* <label>Message: </label>           */}
                <textarea placeholder="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                <button onClick={addRequest}>Submit</button>
            </form>
            </section>
        </main>
    )
}

export default Contact
