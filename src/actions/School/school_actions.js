import axios from "axios";
import {GET_SCHOOL, ADD_SCHOOL} from "../types";
import {createMessage, returnErrors} from "../message/message";
import {tokenConfig} from "../auth_action/auth";

export const getSchool = () => (dispatch, getState) => {
    axios.get('QLA/School/', tokenConfig(getState)).then((res) => {
        dispatch({
            type: GET_SCHOOL,
            payload: res.data
        })
    }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const addSchool = (Data) => (dispatch, getState) => {
    axios.post('QLA/School/', Data, tokenConfig(getState), {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
        .then((res) => {
            dispatch(createMessage({addLead: 'School Added'}))
            dispatch({
                type: ADD_SCHOOL,
                payload: res.data
            })
        })
        .catch((err) => dispatch(returnErrors(err.response.data), err.response.status))
}