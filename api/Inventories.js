import Axios from 'axios';


export const createInventory = async (params) => {  
    const response = await Axios.post('/inventories', params);
    return response;
}
  
