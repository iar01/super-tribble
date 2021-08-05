import { GET_EXAM } from "../actions/types";

const initialState = {
  ExamList: [],
};
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EXAM:
      return {
        ...state,
        ExamList: action.payload,
      };
    default:
      return state;
  }
}
