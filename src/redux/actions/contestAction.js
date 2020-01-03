import { UPDATE_CONTEST, LOADING_CONTEST, FAILED_CONTEST } from "./actionType"

// contest action creator
const contestActionCreator = (gymContest = false) => async (dispatch) => {
    dispatch({
        type: LOADING_CONTEST
    })

    const response = await fetch(`https://codeforces.com/api/contest.list?gym=${gymContest}`)
    const data = await response.json()
    
    if(data.status==='OK'){
        dispatch({
            type: UPDATE_CONTEST,
            payload: data.result
        })
    }
    else{
        dispatch({
            type: FAILED_CONTEST,
            error: data.comment
        })
    }
}

export default contestActionCreator