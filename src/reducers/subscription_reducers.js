import {ADD_SUBSCRIPTION, CHECK_SUBSCRIPTION, Remove_SCHOOL} from "../actions/types";

const initialState = {
    subscription: [],
}
// eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        case CHECK_SUBSCRIPTION:
            localStorage.setItem('Subject', action.payload.Subject.name)
            localStorage.setItem('TimeStart', action.payload.TimeStart)
            localStorage.setItem('EndDate', action.payload.EndDate)
            localStorage.setItem('School', action.payload.School.name)
            return {
                ...state,
                ...action.payload,
            }
        case ADD_SUBSCRIPTION:
            return {
                ...state,
                subscription: [...state.subscription, action.payload]
            };
        case Remove_SCHOOL:
            localStorage.removeItem('TimeStart')
            localStorage.removeItem('EndDate')
            localStorage.removeItem('Subject')
            localStorage.removeItem('School')
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }

}