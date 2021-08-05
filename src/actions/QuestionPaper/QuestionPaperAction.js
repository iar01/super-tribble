import axios from "axios";
import {returnErrors} from "../message/message";
import {tokenConfig} from "../auth_action/auth";
import {GET_QUESTION_PAPER} from "../types";

export const getQuestionPaper = () => (dispatch, getState) => {
    axios.get('QLA/Paper/').then(res => (
        dispatch({
            type: GET_QUESTION_PAPER,
            payload: res.data
        })
    ))
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)))
}