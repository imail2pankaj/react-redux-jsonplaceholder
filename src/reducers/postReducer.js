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
  POSTS_COMMENT_GET_REQUEST,
  POSTS_COMMENT_GET_SUCCESS,
  POSTS_COMMENT_GET_FAILURE,
} from '../constants/postConstants';

const post = {
  userId: "",
  id: "",
  title: "",
  body: ""
}

const initialState = {
  posts: [],
  post: post,
  error: '',
  comments: [],
  is_loading: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_LIST_REQUEST:
      return {
        ...state,
        is_loading: true
      }
    case POSTS_LIST_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        is_loading: false
      }
    case POSTS_LIST_FAILURE:
      return {
        ...state,
        error: action.error,
        is_loading: false
      }
    case POSTS_GET_REQUEST:
      return {
        ...state,
        is_loading: true
      }
    case POSTS_GET_SUCCESS:
      return {
        ...state,
        post: action.post,
        is_loading: false
      }
    case POSTS_GET_FAILURE:
      return {
        ...state,
        error: action.error,
        is_loading: false
      }

    case POSTS_COMMENT_GET_REQUEST:
      return {
        ...state,
      }
    case POSTS_COMMENT_GET_SUCCESS:
      return {
        ...state,
        comments: action.comments,
      }
    case POSTS_COMMENT_GET_FAILURE:
      return {
        ...state,
        error: action.error,
      }

    case POSTS_UPDATE_REQUEST:
      return {
        ...state,
        is_loading: true
      }
    case POSTS_UPDATE_SUCCESS:
      return {
        ...state,
        // post: action.post,
        is_loading: false
      }
    case POSTS_UPDATE_FAILURE:
      return {
        ...state,
        error: action.error,
        is_loading: false
      }

    case POSTS_DELETE_REQUEST:
      return {
        ...state,
        is_loading: true
      }
    case POSTS_DELETE_SUCCESS:
      return {
        ...state,
        post: action.post,
        is_loading: false
      }
    case POSTS_DELETE_FAILURE:
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