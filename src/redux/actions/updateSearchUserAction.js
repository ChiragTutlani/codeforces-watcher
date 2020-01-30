import { UPDATE_SEARCH, LOADING_SEARCH, FAILED_SEARCH } from "./actionType"

const updateSearchUserActionCreator = (userHandle) => async (disptach) => {
    disptach({
        type: LOADING_SEARCH
    })
    
    const response = await fetch(`https://codeforces.com/api/user.info?handles=${userHandle}`)
    const data = await response.json()
    if(data.status==='OK'){
        disptach({
            type: UPDATE_SEARCH,
            payload: data.result[0]
        })
    }
    else{
        disptach({
            type: FAILED_SEARCH,
            error: data.comment          
        })
    }
}

export default updateSearchUserActionCreator