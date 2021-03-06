import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './SuccessStories.scss'

const SuccessStories = (props) => {

    const [ success, setSuccess] = useState([])

    useEffect(() => {
        axios.get('/api/testimonials')
        .then(res => {
            setSuccess(res.data)
            console.log(res.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const mappedTestimonials = success.map(p => {
        return (
            <p key={p.post_id}>
                {p.post}
            </p>
        )
    })
    console.log(success)

    return (
        <section className="success-container">
            <h1>Testimonials</h1>

            <div>
                
                <article className="testimonial">
                    {mappedTestimonials}
                </article>
                
                
            {/* <img className="success" src="https://images.unsplash.com/photo-1511573946159-906c6ed20eb4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdGl2YXRpb25hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="motivational"/> */}
            <img className="success" src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VjY2Vzc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="motivational"/>

            </div>
        </section>
    )
}

export default SuccessStories

// https://unsplash.com/photos/bH7kZ0yazB0