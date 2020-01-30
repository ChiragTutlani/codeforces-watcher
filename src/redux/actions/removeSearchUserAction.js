import { REMOVE_SEARCH } from "./actionType"

const removeSearchUserAction = () => {
    return {
        type: REMOVE_SEARCH,
        payload: null
    }
}

export default removeSearchUserAction