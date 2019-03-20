import {
    CREATE_PREFERENCE,
    CREATE_PREFERENCE_SUCCESS,
    CREATE_GIFT_CARD,
    CREATE_GIFT_CARD_SUCCESS,
    CREATE_TOKEN_CARD,
    CREATE_TOKEN_CARD_SUCCESS
} from '../constants/ActionsTypes';


export const createPreference = (params) => {     
    return {
        type: CREATE_PREFERENCE,
        payload: params
    }        
};

export const createPreferenceSuccess = (response) => {               
    return {
        type: CREATE_PREFERENCE_SUCCESS,
        payload: response
    }        
};

export const createGiftCard = (params, token) => {     
    return {
        type: CREATE_GIFT_CARD,
        payload: {params, token}
    }        
};

export const createGiftCardSuccess = (response) => {               
    return {
        type: CREATE_GIFT_CARD_SUCCESS,
        payload: response
    }        
};


export const createTokenCard = () => {     
    return {
        type: CREATE_TOKEN_CARD
        
    }        
};

export const createTokenCardSuccess = (token) => {               
    return {
        type: CREATE_TOKEN_CARD_SUCCESS,
        payload:token      
    }        
};

createTokenCard
