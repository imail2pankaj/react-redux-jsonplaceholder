import { USERS_LIST_SUCCESS, USERS_LIST_FAILURE } from '../constants/userConstants';
import {fetchAllUsers} from '../api/userApi';


export const getAllUsers = () => {

    return dispatch => {
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