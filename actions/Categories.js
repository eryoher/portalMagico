
import {
    GET_CATEGORIES,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_WITH_PRODUCT,
    GET_CATEGORIES_WITH_PRODUCT_SUCCESS
} from '../constants/ActionsTypes';
  
  
  
export const getCategories = () => {               
    return {
        type: GET_CATEGORIES
    }        
};


export const getCategoriesSuccess = (data) => {               
    return {
        type: GET_CATEGORIES_SUCCESS,
        payload:data
    }        
};

export const getCategoriesWithProduct = () => {               
    return {
        type: GET_CATEGORIES_WITH_PRODUCT
    }        
};


export const getCategoriesWithProductSuccess = (data) => {               
    return {
        type: GET_CATEGORIES_WITH_PRODUCT_SUCCESS,
        payload:data
    }        
};
