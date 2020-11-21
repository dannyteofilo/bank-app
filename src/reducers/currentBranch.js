import { types } from '../types/types';


export const currentBranchReducer = (state = {}, action) => {
    switch (action.type) {
        case types.set_current_bank:
            return {
                current: action.payload.id
            };

        default:
            return state;
    }
}