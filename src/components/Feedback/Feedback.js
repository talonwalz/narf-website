import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

const Feedback = (props) => {

    const [ first, setFirst ] = useState('')
    const [ last, setLast ] = useState('')
    const [ feedback, setFeedback ] = useState('')
    
    function addFeedback() {
        
        axios.post('/api/feedback', {first, last, feedback})
        .then(res => {
            // props.updateFeedback(res.data)
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    return (
        <section className="feedback-container">
            <main>
                <input onChange={e => setFirst(e.target.value)} placeholder="first name" />
                <input onChange={e => setLast(e.target.value)} placeholder="last name"/>
                <input onChange={e => setFeedback(e.target.value)} placeholder="feedback"/>
                <button onClick={addFeedback}>Submit</button>
            </main>
        </section>
    )
}

export default Feedback
