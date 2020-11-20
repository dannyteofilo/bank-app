import { types } from "../types/types"


export const starts = () => ({
    type: types.bank_request_start
})

export const ends = () => ({
    type: types.bank_request_ends
})


export const fails = (error) => ({
    type: types.bank_request_failed,
    payload: error
})

export const success = (response) => ({
    type: types.bank_request_success,
    payload: response
})


export const fetch = () => ({
    type: types.bank_request_fetch,
})