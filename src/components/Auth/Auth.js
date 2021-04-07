import { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateUser, logoutUser } from '../../Redux/reducers/userReducer'

const Auth = (props) => {

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    function loginUser() {
        axios.post('/auth/login', {username, password})
        .then(res => {
            props.updateUser(res.data)
            console.log(username, password)
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }  

    function logoutUser() {
        axios.delete('/auth/logout')
        .then(() => {
            props.logoutUser()
            props.history.push('/')
        })
        .catch(err => console.log(err))
    }


    return (
        
        <section>
            <input value={username}  placeholder="username" onChange={e => setUsername(e.target.value)}/>
            <input value={password} type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={loginUser}>Login</button>
            <button onClick={logoutUser}>Logout</button>
        </section>
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, { updateUser, logoutUser })(Auth)
