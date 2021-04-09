const initialState = {
    feedback: []
}

const UPDATE_FEEDBACK = 'UPDATE_FEEDBACK'

export function updateFeedback(feedback) {
    return {
        type: UPDATE_FEEDBACK,
        payload: feedback
    }
}

export default function feedbackReducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_FEEDBACK:
            return {
                ...state,
                feedback: action.payload
            }
        default: return state;
    }
}