import { ADD_WATCH_USER, LOADING_WATCH_USER, FAILED_WATCH_USER } from "./actionType"

// add watchUser action creator
const addWatchUserActionCreator = (userHandle) => async (dispatch) => {
    dispatch({
        type: LOADING_WATCH_USER
    })
    
    const response = await fetch(`https://codeforces.com/api/user.info?handles=${userHandle}`)
    const data = await response.json()
    
    if(data.status==='OK'){
        dispatch({
            type: ADD_WATCH_USER,
            payload: data.result[0]
        })
    }
    else{
        dispatch({
            type: FAILED_WATCH_USER,
            payload: {
                error: data.comment
            }
        })
    }
}

export default addWatchUserActionCreator