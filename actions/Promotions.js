import {
    GET_PROMOTIONS,
    GET_PROMOTIONS_SUCCESS,
    GET_PROMOTION,
    GET_PROMOTION_SUCCESS,
    UPDATE_PROMOTION,
    UPDATE_PROMOTION_SUCCESS,
    CREATE_PROMOTION,
    CREATE_PROMOTION_SUCCESS
} from '../constants/ActionsTypes';
  

export const getPromotions = (params) => {               
    return {
        type: GET_PROMOTIONS,
        payload: params
    }        
};


export const getPromotionsSuccess = (data) => {               
    return {
        type: GET_PROMOTIONS_SUCCESS,
        payload:data
    }        
};

export const getPromotion = (params) => {               
    return {
        type: GET_PROMOTION,
        payload: params
    }        
};


export const getPromotionSuccess = (data) => {               
    return {
        type: GET_PROMOTION_SUCCESS,
        payload:data
    }        
};


export const updatePromotion = ( promotionId, params) => {               
    return {
        type: UPDATE_PROMOTION,
        payload: {promotionId, params}
    }        
};

export const updatePromotionSuccess = (data) => {               
    return {
        type: UPDATE_PROMOTION_SUCCESS,
        payload:data
    }        
};

export const createPromotion = (params) => {               
    return {
        type: CREATE_PROMOTION,
        payload: {params}
    }        
};

export const createPromotionSuccess = (response) => {               
    return {
        type: CREATE_PROMOTION_SUCCESS,
        payload:response
    }        
};