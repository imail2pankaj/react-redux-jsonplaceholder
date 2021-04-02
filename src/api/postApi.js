import { axiosInstance } from './axiosInstance';

export const fetchAllPosts = () => {
    return axiosInstance.get('posts');
}

export const fetchPost = (id) => {
    return axiosInstance.get(`posts/${id}`);
}

export const deletePost = (id) => {
    return axiosInstance.get(`posts/${id}`);
}

export const editPost = (id, data) => {
    return axiosInstance.put(`posts/${id}`, data);
}

export const fetchPostComments = (id) => {
    return axiosInstance.get(`posts/${id}/comments`);
}