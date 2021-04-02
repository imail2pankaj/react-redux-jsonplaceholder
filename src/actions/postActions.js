import {
    POSTS_LIST_SUCCESS,
    POSTS_LIST_FAILURE,
    POSTS_LIST_REQUEST,
    POSTS_GET_SUCCESS,
    POSTS_GET_FAILURE,
    POSTS_GET_REQUEST,
    POSTS_UPDATE_SUCCESS,
    POSTS_UPDATE_FAILURE,
    POSTS_UPDATE_REQUEST,
    POSTS_DELETE_SUCCESS,
    POSTS_DELETE_FAILURE,
    POSTS_DELETE_REQUEST,
    POSTS_COMMENT_GET_SUCCESS,
    POSTS_COMMENT_GET_FAILURE,
    POSTS_COMMENT_GET_REQUEST,
} from '../constants/postConstants';
import { fetchAllPosts, fetchPost, deletePost as delPost, editPost as submitEditPost, fetchPostComments } from '../api/postApi';


export const getAllPosts = () => {

    return dispatch => {
        dispatch({ type: POSTS_LIST_REQUEST })
        fetchAllPosts().then(response => {
            dispatch({
                type: POSTS_LIST_SUCCESS,
                posts: response.data
            })
        }).catch(err => {
            dispatch({
                type: POSTS_LIST_FAILURE,
                error: err.toString()
            })
        })
    }
}

export const getPost = (id) => {

    return dispatch => {
        dispatch({ type: POSTS_GET_REQUEST })
        fetchPost(id).then(response => {
            dispatch({
                type: POSTS_GET_SUCCESS,
                post: response.data
            })
        }).catch(err => {
            dispatch({
                type: POSTS_GET_FAILURE,
                error: err.toString()
            })
        })
    }
}

export const editPost = (id, data) => {

    return dispatch => {
        dispatch({ type: POSTS_UPDATE_REQUEST })
        submitEditPost(id, data).then(response => {
            dispatch({
                type: POSTS_UPDATE_SUCCESS,
                post: response.data
            })
        }).catch(err => {
            dispatch({
                type: POSTS_UPDATE_FAILURE,
                error: err.toString()
            })
        })
    }
}
export const deletePost = (id) => {

    return dispatch => {
        dispatch({ type: POSTS_DELETE_REQUEST })
        delPost(id).then(response => {
            dispatch({
                type: POSTS_DELETE_SUCCESS
            })
        }).catch(err => {
            dispatch({
                type: POSTS_DELETE_FAILURE,
                error: err.toString()
            })
        })
    }
}

export const getPostComments = (id) => {

    return dispatch => {
        dispatch({ type: POSTS_COMMENT_GET_REQUEST })
        fetchPostComments(id).then(response => {
            dispatch({
                type: POSTS_COMMENT_GET_SUCCESS,
                comments: response.data
            })
        }).catch(err => {
            dispatch({
                type: POSTS_COMMENT_GET_FAILURE,
                error: err.toString()
            })
        })
    }
}