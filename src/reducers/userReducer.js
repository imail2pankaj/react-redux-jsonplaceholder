import { USERS_LIST_SUCCESS, USERS_LIST_FAILURE } from '../constants/userConstants';

const initialState = {
    users: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_LIST_SUCCESS:
            return {
                ...state,
                users: action.users
            }
        case USERS_LIST_FAILURE:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export default reducer;