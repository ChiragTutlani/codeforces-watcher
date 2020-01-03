import { CHANGE_YOUR_USER_HANDLE, LOADING_HANDLE, FAILED_HANDLE } from "./actionType"

// yourUserHandle action creator
const yourUserHandleActionCreator = (userHandle) => async (dispatch) => {
    dispatch({
        type: LOADING_HANDLE
    })

    const response = await fetch(`https://codeforces.com/api/user.info?handles=${userHandle}`)
    const data = await response.json()
    
    if(data.status==='OK'){
        dispatch({
            type: CHANGE_YOUR_USER_HANDLE,
            payload: data.result[0]
        })
    }
    else{
        dispatch({
            type: FAILED_HANDLE,
            payload: {
                error: data.comment
            }
        })
    }
}

export default yourUserHandleActionCreator