import Axios from 'axios';


export const getCategories = async () => {  
    const response = await Axios.get('/categories');
    return response;
}
  
export const getCategoriesWithProduct = async () => {  
    const response = await Axios.get('/categories/getCategoriesWithProduct');
    return response;
}