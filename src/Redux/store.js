import { createStore } from 'redux'
import userReducer from './reducers/userReducer'
import { combineReducers } from 'redux'



export default createStore(userReducer)