import React, { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateFeedback } from '../../Redux/reducers/feedbackReducer'
import { logoutUser } from '../../Redux/reducers/userReducer'
import Testimonials from './Testimonials'
import './Admin.scss'



const Admin = (props) => {
    
    

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
            // alert('Feedback deleted')
            props.updateFeedback(res.data)
            
        })
        .catch(err => console.log(err))
    }
    
    const mappedFeedback = props.feedbackReducer.feedback.map((e) => {
        return (
            <article className="review" key={e.feedback_id}>
                <h2><strong> - {e.first_name} {e.last_name}</strong></h2>
                <p>{e.feedback}</p>
                <div>
                <button className="altBtn" onClick={() => deleteFeedback(e.feedback_id)}>Delete</button>
                </div>
            </article>
        )
    })


    return (
        <section className="admin-container">
            {props.userReducer.user ? <h3>Welcome {props.userReducer.user.username}</h3> : null }
            <div>
                <button className="altBtn" onClick={logoutUser}>Logout</button>
            </div>
            <article className="feedback">
                <h1>Feedback</h1>
                <div className="reviw">
                    {mappedFeedback}
                </div>
            </article>
            <Testimonials />            
        </section>
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {updateFeedback, logoutUser} )(Admin)
