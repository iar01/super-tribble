import {GET_SUBJECTS} from "../actions/types";

const initialState = {
    subjectsList: [],
}
// eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SUBJECTS:
            return {
                ...state,
                subjectsList: action.payload
            }
        default:
            return state
    }

}