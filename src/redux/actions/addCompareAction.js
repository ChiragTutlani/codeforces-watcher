import { ADD_COMPARE, LOADING_COMPARE, FAILED_COMPARE } from "./actionType"

const addCompareActionCreator = (userHandle) => async (dispatch) => {
    dispatch({
        type: LOADING_COMPARE
    })
    
    const response = await fetch(`https://codeforces.com/api/user.info?handles=${userHandle}`)
    const data = await response.json()
    if(data.status==='OK'){
        dispatch({
            type: ADD_COMPARE,
            payload: data.result[0]
        })
    }
    else{
        dispatch({
            type: FAILED_COMPARE,
            error: data.comment
        })
    }
}

export default addCompareActionCreator