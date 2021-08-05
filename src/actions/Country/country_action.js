import axios from "axios";
import {GET_COUNTRY} from "../types";
import { returnErrors} from "../message/message";
import {tokenConfig} from "../auth_action/auth";

export const getCountry = () => (dispatch, getState) => {
    axios.get('QLA/Country/', tokenConfig(getState)).then((res) => {
        dispatch({
            type: GET_COUNTRY,
            payload: res.data
        })
    }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)))
}