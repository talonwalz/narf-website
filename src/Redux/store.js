import { createStore } from 'redux'
import userReducer from './reducers/userReducer'
import feedbackReducer from './reducers/feedbackReducer'
import successReducer from './reducers/successReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    userReducer, 
    feedbackReducer,
    successReducer
})

export default createStore(rootReducer)