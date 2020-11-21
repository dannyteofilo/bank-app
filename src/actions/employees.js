import { types } from "../types/types"


export const starts = () => ({
    type: types.employee_request_start
})

export const ends = () => ({
    type: types.employee_request_ends
})


export const fails = (error) => ({
    type: types.employee_request_failed,
    payload: error
})

export const success = (response) => ({
    type: types.employee_request_success,
    payload: response
})


export const fetchEmployees = (id) => ({
    type: types.employee_request_fetch,
    payload: id
})