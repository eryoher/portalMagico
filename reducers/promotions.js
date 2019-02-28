import { GET_PROMOTIONS, GET_PROMOTIONS_SUCCESS, GET_PROMOTION, GET_PROMOTION_SUCCESS } from "../constants/ActionsTypes";


const initialState = {    
    search: null,
    promotion:null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROMOTIONS:
            return { ...state, search:null }
        case GET_PROMOTIONS_SUCCESS:
            return { ...state, search:action.payload.data}
        case GET_PROMOTION:
            return { ...state, promotion:null}
        case GET_PROMOTION_SUCCESS:
            return { ...state, promotion:action.payload.data }
         
        default:
            return state
    }
}

export default rootReducer