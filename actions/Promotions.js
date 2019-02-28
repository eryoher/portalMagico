import {
    GET_PROMOTIONS,
    GET_PROMOTIONS_SUCCESS,
    GET_PROMOTION,
    GET_PROMOTION_SUCCESS
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
