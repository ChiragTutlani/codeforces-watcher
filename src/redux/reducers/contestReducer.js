import {UPDATE_CONTEST, LOADING_CONTEST, FAILED_CONTEST } from '../actions/actionType'

const contestReducer = (state = {}, action) => {
    switch(action.type){
        case LOADING_CONTEST:
            return {
                status: 'loading'
            }
        case UPDATE_CONTEST:
            return {
                status: 'ok',
                timeUpdated: new Date(),
                data: [...action.payload],
            }
        case FAILED_CONTEST: 
            return {
                status: 'failed',
                error: action.payload
            }
        default: return state
    }
}

export default contestReducer