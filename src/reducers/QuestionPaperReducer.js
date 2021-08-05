import {GET_QUESTION_PAPER} from "../actions/types";

const initialState = {
    QuestionPaper: [],
}
// eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_QUESTION_PAPER:
            return {
                ...state,
                QuestionPaper: action.payload
            }
        default:
            return state
    }

}