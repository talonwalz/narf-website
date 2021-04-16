const initialState = {
    successStories: []
}

const UPDATE_SUCCESS_STORIES = 'UPDATE_SUCCESS_STORIES'

export function updateSuccessStories(testimonials) {
    return {
        type: UPDATE_SUCCESS_STORIES,
        payload: testimonials
    }
}

export default function successReducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_SUCCESS_STORIES:
            return {
                ...state,
                successStories: action.payload
            }
        default: return state;
    }
}