import Axios from 'axios';

export const getUser = async (userId) => {
    const response = await Axios.get(`/users/${userId}`);
    return response;
}


export const addUser = async (params) => {
    const response = await Axios.post('/users', params);
    return response;
}