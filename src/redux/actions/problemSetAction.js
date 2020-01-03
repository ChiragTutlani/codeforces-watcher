import { UPDATE_PROBLEMSET, LOADING_PROBLEMSET, FAILED_PROBLEMSET } from "./actionType"

const problemSetActionCreator = (tags = []) => async (dispatch) => {
    dispatch({
        type: LOADING_PROBLEMSET,
    })
    
    const url = 'https://codeforces.com/api/problemset.problems?tags=' + tags.join(';')
    const response = await fetch(url)
    const data = await response.json()
    
    if(data.status==='OK'){
        dispatch({
            type: UPDATE_PROBLEMSET,
            payload: data.result
        })
    }
    else{
        dispatch({
            type: FAILED_PROBLEMSET,
            error: data.comment
        })
    }
}

export default problemSetActionCreator