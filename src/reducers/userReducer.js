import {
  USERS_LIST_SUCCESS,
  USERS_LIST_FAILURE,
  USERS_GET_SUCCESS,
  USERS_GET_FAILURE,
  USERS_LIST_REQUEST,
  USERS_GET_REQUEST
} from '../constants/userConstants';

const user = {
  id: "",
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: ""
    }
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: ""
  }
}

const initialState = {
  users: [],
  user: user,
  error: '',
  is_loading: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_LIST_REQUEST:
      return {
        ...state,
        is_loading: true
      }
    case USERS_LIST_SUCCESS:
      return {
        ...state,
        users: action.users,
        is_loading: false
      }
    case USERS_LIST_FAILURE:
      return {
        ...state,
        error: action.error,
        is_loading: false
      }
    case USERS_GET_REQUEST:
      return {
        ...state,
        is_loading: true
      }
    case USERS_GET_SUCCESS:
      return {
        ...state,
        user: action.user,
        is_loading: false
      }
    case USERS_GET_FAILURE:
      return {
        ...state,
        error: action.error,
        is_loading: false
      }
    default:
      return state;
  }
}

export default reducer;