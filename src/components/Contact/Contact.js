import React, {useState} from 'react'
import './Contact.scss'
import image from '../../images/logoIcon.png'
import axios from 'axios'


const Contact = () => {
    const [ date, setDate ] = useState('')
    const [ first, setFirst ] = useState('')
    const [ last, setLast ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ question, setQuestion ] = useState('')

    function addRequest() {
        // why wont this run first??
        setDate(new Date())
        if(first.length < 5) {
            alert('this is too short')
        } else {

            axios.post('/api/request-info', { first, last, phone, question, date})
            .then(res => {
                setFirst('')
                setLast('')
                setPhone('')
                setQuestion('')
                console.log(res.data)
            })
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

                    <label></label>
                    <input placeholder="first name" value={first}onChange={e => setFirst(e.target.value)}/>
                    <label></label>
                    <input placeholder="last name" value={last} onChange={e => setLast(e.target.value)}/>
                </div>
                <div>
                    {/* <label htmlFor="tel">ex: 928-649-9726</label> */}
                    <input placeholder="phone number" type="tel" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phone} onChange={e => setPhone(e.target.value)} required minLength={9}/>
                    <label></label>
                    <input  placeholder="date" value={date} onChange={e=>setDate(e.target.value)}/>
                </div>     
                <label></label>          
                <textarea placeholder="message" value={question} onChange={e => setQuestion(e.target.value)}></textarea>
                <button onClick={addRequest}>Submit</button>
            </form>
            </section>
        </main>
    )
}

export default Contact
