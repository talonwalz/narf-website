import React, { useState, useEffect } from 'react'
// import { addTestimonial } from '../../../server/controllers/testimonialsCtrl'
import axios from 'axios'
import './Testimonials.scss'

const Testimonials = (props) => {
    const [ post, setPost ] = useState('')
    const [ testimonials, setTestimonials ] = useState([])

    // dependency on this? 
    useEffect(() => {
        axios.get('/api/testimonials')
        .then(res => {
            setTestimonials(res.data)
            // console.log(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    function addTestimonial() {
        axios.post('/api/testimonials', {post})
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }
    // console.log(testimonials)

    function deleteTestimonial(id) {
        axios.delete(`/api/testimonials/${id}`)
        .then(res => {
            alert('Delete testimonial')
        })
        .catch(err => console.log(err))
    }

    const mappedTestimonials = testimonials.map(t => {
        return (
            <article className="post" key={t.post_id}>
                <p>{t.post}</p>
                <button onClick={()=> deleteTestimonial(t.post_id)}>Delete</button>
            </article>
        )
    })
    console.log(testimonials)

    return (
        <section className="testimonial-container">
            <textarea type="text" placeholder="Add testimonial" onChange={e=>setPost(e.target.value)}/>
            <div className="btn-div">
            <button onClick={addTestimonial}>Submit</button>
            </div>
            {mappedTestimonials}     
        </section>
    )
}

export default Testimonials
