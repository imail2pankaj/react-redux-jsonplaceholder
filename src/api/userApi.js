import { axiosInstance } from './axiosInstance';

export const fetchAllUsers = () => {
    return axiosInstance.get('users');
}