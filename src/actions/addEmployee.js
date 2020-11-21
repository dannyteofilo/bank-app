import { types } from "../types/types"


export const starts = () => ({
    type: types.employee_post_start
})

export const ends = () => ({
    type: types.employee_post_ends
})


export const fails = (error) => ({
    type: types.employee_post_failed,
    payload: error
})

export const success = (response) => ({
    type: types.employee_post_success,
    payload: response
})

export const resetForm = () => ({
    type: types.employee_post_reset,
})

export const fetchEmployee = (data) => ({
    type: types.employee_post_fetch,
    payload: data
})