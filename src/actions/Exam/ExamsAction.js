import axios from "axios";
import { returnErrors } from "../message/message";
import { GET_EXAM } from "../types";

export const getExams = () => (dispatch, getState) => {
  axios
    .get("QLA/Exam/")
    .then((res) =>
      dispatch({
        type: GET_EXAM,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};