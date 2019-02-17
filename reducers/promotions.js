import { GET_PROMOTIONS, GET_PROMOTIONS_SUCCESS } from "../constants/ActionsTypes";


const initialState = {    
    search: null,
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROMOTIONS:
            return { ...state, search:null }
        case GET_PROMOTIONS_SUCCESS:
            return { ...state, search:action.payload.data}
         
        default:
            return state
    }
}

export default rootReducer