import axios from "axios";
import {GET_SUBJECTS} from "../types";
import {returnErrors} from "../message/message";
import {tokenConfig} from "../auth_action/auth";

export const getSubject = () => (dispatch, getState) => {
    axios.get('QLA/Subject/', tokenConfig(getState)).then((res) => {
        dispatch({
            type: GET_SUBJECTS,
            payload: res.data
        })
    }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)))
}
