import axios from "axios";
import { GET_BUNDLE } from "../types";
import { returnErrors } from "../message/message";
import { tokenConfig } from "../auth_action/auth";

export const getBundle = () => (dispatch, getState) => {
  axios
    .get("Bundle/bundle/", tokenConfig(getState))
    .then((res) => {
      console.log(res.data, "RES");
      dispatch({
        type: GET_BUNDLE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};