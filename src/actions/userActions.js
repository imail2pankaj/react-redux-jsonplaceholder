import {
    USERS_LIST_SUCCESS,
    USERS_LIST_FAILURE,
    USERS_GET_SUCCESS,
    USERS_GET_FAILURE,
    USERS_GET_REQUEST,
    USERS_LIST_REQUEST
} from '../constants/userConstants';
import { fetchAllUsers, fetchUser } from '../api/userApi';


export const getAllUsers = () => {

    return dispatch => {
        dispatch({ type: USERS_LIST_REQUEST })
        fetchAllUsers().then(response => {
            dispatch({
                type: USERS_LIST_SUCCESS,
                users: response.data
            })
        }).catch(err => {
            dispatch({
                type: USERS_LIST_FAILURE,
                error: err.toString()
            })
        })
    }
}


export const getUser = (id) => {

    return dispatch => {
        dispatch({ type: USERS_GET_REQUEST })
        fetchUser(id).then(response => {
            dispatch({
                type: USERS_GET_SUCCESS,
                user: response.data
            })
        }).catch(err => {
            dispatch({
                type: USERS_GET_FAILURE,
                error: err.toString()
            })
        })
    }
}