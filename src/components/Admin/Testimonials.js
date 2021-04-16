import React, { useState, useEffect } from 'react'
// import { addTestimonial } from '../../../server/controllers/testimonialsCtrl'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateSuccessStories } from '../../Redux/reducers/successReducer'
import './Testimonials.scss'

const Testimonials = (props) => {
    const [ post, setPost ] = useState('')
    const [updatePost, setUpdatePost ] = useState('')
    const [ testimonials, setTestimonials ] = useState([])
    const [edit, setEdit ] = useState(false)

    // dependency on this? 
    useEffect(() => {
        axios.get('/api/testimonials')
        .then(res => {
            setTestimonials(res.data)
            props.updateSuccessStories(res.data)

            // console.log(res.data)
        })
        .catch(err => console.log(err))
    }, [testimonials, props])

    function addTestimonial() {
        axios.post('/api/testimonials', {post})
        .then(res => {
            console.log(res.data)
            props.updateSuccessStories(res.data)
            setTestimonials(res.data)
            setPost('')
            
        })
        .catch(err => console.log(err))
    }

    function deleteTestimonial(id) {
        axios.delete(`/api/testimonials/${id}`)
        .then(res => {
            setTestimonials(res.data)
        })
        .catch(err => console.log(err))
    }

    function editTestimonial(id) {
        axios.put(`/api/testimonials/${id}`, {updatePost})
        .then(res => {
            setTestimonials(res.data)
            setPost('')
            setEdit(!edit)
        })
        .catch(err => console.log(err))
    }

    const mappedTestimonials = testimonials.map(t => {
        return (
            <article className="post" key={t.post_id}>
                { edit ? (<textarea type="text" onChange={e=>setUpdatePost(e.target.value)}></textarea>) : null }
                <p>{t.post}</p>
                {edit ? <button onClick={()=> editTestimonial(t.post_id)}>Update</button> :<button onClick={()=> deleteTestimonial(t.post_id)}>Delete</button> }
                <button onClick={()=> setEdit(!edit)}>Edit</button>

            </article>
        )
    })

    return (
        <section className="testimonial-container">
            
            <textarea type="text" value={post} placeholder="Add testimonial" onChange={e=>setPost(e.target.value)}/>
            <div className="btn-div">
            <button onClick={addTestimonial}>Submit</button>
            </div>
            <h2>Testimonials</h2>
            {mappedTestimonials}     
        </section>
    )
}

export default connect(null, {updateSuccessStories})(Testimonials)
