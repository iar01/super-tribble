// api.js
import axios from "axios";
import {createMessage, returnErrors} from "../../../actions/message/message";
import {ADD_SUBSCRIPTION} from "../../../actions/types";
import {tokenConfig} from "../../../actions/auth_action/auth";

export const saveStripeInfo = (data) => (dispatch, getState) => {
    console.log('helllo')
    axios.post('/payments/save-stripe-info/', data, tokenConfig(getState))
        .then((res) => {
            dispatch(createMessage({addLead: 'Subscribed'}))
            dispatch({
                type: ADD_SUBSCRIPTION,
                payload: res.data
            })
        })
        .catch((err) => dispatch(returnErrors(err.response.data), err.response.status))
}