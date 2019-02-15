import { GET_CATEGORIES, GET_CATEGORIES_SUCCESS } from '../constants/ActionsTypes'

const initialState = {    
    categories: null,
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return { ...state, categories:null }
        case GET_CATEGORIES_SUCCESS:
            return { ...state, categories:action.payload.data}
         
        default:
            return state
    }
}

export default rootReducer