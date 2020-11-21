import { types } from "../types/types";

const initialState = {
    requesting: false,
    error: null,
    data: null
}

export const AddEmployeeReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.employee_post_start:
            return {
                ...state,
                requesting: true,
                error: false
            };

        case types.employee_post_success:
            return {
                ...state,
                ...action.payload
            };

        case types.employee_post_failed:
            return {
                ...state,
                ...action.payload
            };

        case types.employee_post_ends:
            return {
                ...state,
                requesting: false
            };
        case types.employee_post_reset:
            return {
                ...initialState
            };

        default:
            return state;
    }
}