import { types } from "../types/types"

export const currentBranch = (current) => ({
    type: types.set_current_bank,
    payload: {
        id:current.id,
        title:current.name
    }
});