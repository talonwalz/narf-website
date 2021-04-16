import React, { useState } from 'react'
// import { connect } from 'react-redux'
import image from '../../images/kokopellis.jpg'
import { connect } from 'react-redux'
import {updateFeedback} from '../../Redux/reducers/feedbackReducer'

import './Feedback.scss'
import axios from 'axios'

const Feedback = (props) => {

    const [ first, setFirst ] = useState('')
    const [ last, setLast ] = useState('')
    const [ feedback, setFeedback ] = useState('')
    
    function addFeedback() {
        
        axios.post('/api/feedback', {first, last, feedback})
        .then(res => {
            props.updateFeedback(res.data)
            // console.log(res.data)
            setFirst('')
            setLast('')
            setFeedback('')
        })
        .catch(err => console.log(err))
    }

    return (
        <section className="feedback-container">
            <h2>What Can We Do Better?</h2>
            <main >
                <div>
                <input value={first} onChange={e => setFirst(e.target.value)} placeholder="first name" />
                <input value={last} onChange={e => setLast(e.target.value)} placeholder="last name"/>
                </div>
                <textarea value={feedback} onChange={e => setFeedback(e.target.value)} placeholder="feedback"/>
                <div className="btn-div">
                <button onClick={addFeedback}>Submit</button>
                </div>
                <img src={image} alt="narf logo"/>

            </main>
        </section>
    )
}

export default connect(null, {updateFeedback})(Feedback)
