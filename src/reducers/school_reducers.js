import {GET_SCHOOL, ADD_SCHOOL} from "../actions/types";

const initialState = {
    school_list: [],
}
// eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SCHOOL:
            return {
                ...state,
                school_list: action.payload
            }
        case ADD_SCHOOL:
            return {
                ...state,
                school_list: [...state.school_list, action.payload]
            };
        default:
            return state
    }

}