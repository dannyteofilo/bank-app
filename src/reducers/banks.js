import { types } from "../types/types";

const initialState = {
    requesting: false,
    error: null,
    data: null
}



export const bankReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.bank_request_start:
            return {
                ...state,
                requesting: true,
                error: false
            };

        case types.bank_request_success:
            return {
                ...state,
                data: action.payload
            };

        case types.bank_request_failed:
            return {
                ...state,
                ...action.payload
            };

        case types.bank_request_ends:
            return {
                ...state,
                requesting: false
            };

        default:
            return state;
    }
}