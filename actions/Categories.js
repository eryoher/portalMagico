
import {
    GET_CATEGORIES,
    GET_CATEGORIES_SUCCESS
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

