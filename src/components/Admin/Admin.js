import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateFeedback } from '../../Redux/reducers/feedbackReducer'
import { logoutUser } from '../../Redux/reducers/userReducer'
import Testimonials from './Testimonials'
import './Admin.scss'



const Admin = (props) => {
    console.log(props)

    useEffect(() => {
        const {userReducer,history} = props
        if (!userReducer.user) {
            history.push('/')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const { updateFeedback } = props
        axios.get('/api/feedback')
        .then(res => {
            updateFeedback(res.data)
            console.log(res.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateFeedback])

    function logoutUser() {
        axios.delete('/auth/logout')
        .then(() => {
            props.logoutUser()
            props.history.push('/')
        })
        .catch(err => console.log(err))
    }

    function deleteFeedback(id) {
        axios.delete(`/api/feedback/${id}`)
        .then(res => {
            alert('Feedback deleted')
            // need to delete from redux state
            // delete props.feedbackReducer.feedback
        })
        .catch(err => console.log(err))
    }

    const mappedFeedback = props.feedbackReducer.feedback.map((e) => {
        return (
            <article className="reviw" key={e.feedback_id}>
                <h4> - {e.first_name} {e.last_name}</h4>
                <p>{e.feedback}</p>
                <div>
                <button onClick={() => deleteFeedback(e.feedback_id)}>Delete</button>
                </div>
            </article>
        )
    })


    return (
        <section className="admin-container">
            {/* <p>Welcome {props.userReducer.user.username}</p> */}
            {/* <button onClick={getFeedback}>Get Feedback</button> */}
            {/* {props.feedbackReducer.feedback[0].feedback} */}
            <div>
            <button onClick={logoutUser}>Logout</button>
            </div>
            <div className="review">
            {mappedFeedback}
            </div>
            <Testimonials />
            
            
        </section>
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {updateFeedback, logoutUser} )(Admin)
