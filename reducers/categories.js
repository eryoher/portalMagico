import { GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_WITH_PRODUCT, GET_CATEGORIES_WITH_PRODUCT_SUCCESS } from '../constants/ActionsTypes'

const initialState = {    
    categories: null,
    categoriesCount:null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return { ...state, categories:null }
        case GET_CATEGORIES_SUCCESS:
            return { ...state, categories:action.payload.data}
        case GET_CATEGORIES_WITH_PRODUCT:
            return { ...state, categoriesCount:null }
        case GET_CATEGORIES_WITH_PRODUCT_SUCCESS:
            return { ...state, categoriesCount:action.payload.data}
        default:
            return state
    }
}

export default rootReducer