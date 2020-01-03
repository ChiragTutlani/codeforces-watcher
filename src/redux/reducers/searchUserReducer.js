import { UPDATE_SEARCH, REMOVE_SEARCH, LOADING_SEARCH, FAILED_SEARCH } from "../actions/actionType"

const searchUserReducer = (state = {}, action) => {
    switch(action.type){
        case LOADING_SEARCH: 
            return {
                status: 'loading'
            }
        case FAILED_SEARCH:
            return {
                status: 'failed',
                error: action.error
            }
        case UPDATE_SEARCH:
            return {
                status: 'ok',
                data: action.payload
            }
        case REMOVE_SEARCH: 
            return {
                status: 'empty'
            }
        default: return state
    }
}

export default searchUserReducer