import {LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, USER_LOADING, USER_LOADED} from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}
// eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('Name', action.payload.user.firstname)
            localStorage.setItem('type_of_user', action.payload.user.type_of_user)
            localStorage.setItem('id', action.payload.user.id)
            localStorage.setItem('pic', action.payload.user.pic)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token')
            localStorage.removeItem('Name')
            localStorage.removeItem('type_of_user')
            localStorage.removeItem('id')
            localStorage.removeItem('pic')
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        default:
            return state
    }
}