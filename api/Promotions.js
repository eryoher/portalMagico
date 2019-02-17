import Axios from 'axios';


export const getPromotions = async (params) => {  
    const response = await Axios.post('/promotions/search', params);
    return response;
}
  