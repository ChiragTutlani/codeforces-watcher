import { UPDATE_PROBLEMSET, LOADING_PROBLEMSET, FAILED_PROBLEMSET } from "../actions/actionType"

const problemSetReducer = (state = {}, action) => {
    switch(action.type){
        case LOADING_PROBLEMSET:
            return {
                status: 'loading'
            }
        case UPDATE_PROBLEMSET:
            return {
                status: 'ok',
                timeUpdated: new Date(),
                data: action.payload
            }
        case FAILED_PROBLEMSET:
            return {
                status: 'failed',
                error: action.error
            }
        default:
            return state
    }
}

export default problemSetReducer