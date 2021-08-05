import {GET_BUNDLE} from "../actions/types";

const initialState = {
    bundles: [],
}
// eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BUNDLE:
            return {
                ...state,
                bundles: action.payload
            }
        default:
            return state
    }

}