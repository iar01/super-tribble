import {GET_COUNTRY} from "../actions/types";

const initialState = {
    countries: [],
}
// eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRY:
            return {
                ...state,
                countries: action.payload
            }
        default:
            return state
    }

}