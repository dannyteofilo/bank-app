import { types } from '../types/types';


export const currentBankReducer = (state = {}, action) => {
    switch (action.type) {
        case types.set_current_bank:
            return {
                current: action.payload.id
            };

        default:
            return state;
    }
}