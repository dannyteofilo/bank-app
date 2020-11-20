import { types } from "../types/types"

export const currentBank = (id) => ({
    type: types.set_current_bank,
    payload: {
        id,
    }
});