import { REMOVE_COMPARE } from "./actionType"

const removeCompareAction = (userHandle) => {
    return {
        type: REMOVE_COMPARE,
        payload: {
            handle: userHandle
        }
    }
}

export default removeCompareAction