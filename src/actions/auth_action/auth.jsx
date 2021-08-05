import axios from "axios";
import {createMessage, returnErrors} from "../message/message";
import {
    AUTH_ERRORS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS, Remove_SCHOOL,
    USER_LOADED,
    USER_LOADING,
} from "../types";
import {getSubscription} from "../Subscription/Subscription_Action";

const headers = {
    header: {
        'Content-Type': 'application/json'
    }
}
export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({type: USER_LOADING});

    axios.get('accounts/user/', tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: USER_LOADED,
                payload: res.data,
            });
            dispatch(getSubscription)
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERRORS,
            });
        });
}

export const login = (email, password) => (dispatch) => {
    const body = {email, password}
    axios.post('accounts/login/', body, headers).then((res) => {
        dispatch({
            type: LOGIN_SUCCESS, payload: res.data
        });
        dispatch(getSubscription())
    })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: LOGIN_FAIL
            })
        })

}


export const register = (email, firstname, lastname,
                         // date_of_birth,
                         password, School, Country) => (dispatch) => {
    const data = {
        email, firstname, lastname,
        // date_of_birth,
        password, School, Country
    }
    axios.post('accounts/register/', data, headers).then((res) => {
        dispatch(createMessage({addLead: res.data.message}))
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({type: REGISTER_FAIL})
        })
}

export const logout = () => (dispatch, getState) => {
    axios.post('accounts/logout/', null, tokenConfig(getState)).then((res) => {
        dispatch({type: Remove_SCHOOL})
        dispatch({type: LOGOUT_SUCCESS})
    })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status))
        })
}
// Setup config with token - helper function
export const tokenConfig = (getState) => {
    // Get token from state
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // If token, add to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
};