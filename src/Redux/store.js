import { createStore } from 'redux'
import userReducer from './reducers/userReducer'
import feedbackReducer from './reducers/feedbackReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    userReducer, 
    feedbackReducer
})

export default createStore(rootReducer)