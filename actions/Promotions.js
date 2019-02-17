import {
    GET_PROMOTIONS,
    GET_PROMOTIONS_SUCCESS
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
