import { DELETE_WATCH_USER } from "./actionType"

// delete watchUser action creator
const deleteWatchUserActionCreator = (userHandle) => {
    console.log('DELETE_WATCH_USER dispatched')
    return {
        type : DELETE_WATCH_USER,
        payload: {
            handle: userHandle,
        }
    }
}

export default deleteWatchUserActionCreator