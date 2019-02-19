import Axios from 'axios';

export const getUser = async (userId) => {
    const response = await Axios.get(`/users/${userId}`);
    return response;
}