import { axiosInstance } from './axiosInstance';

export const fetchAllUsers = () => {
    return axiosInstance.get('users');
}


export const fetchUser = (id) => {
    return axiosInstance.get(`users/${id}`);
}