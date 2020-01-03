import { ADD_WATCH_USER, DELETE_WATCH_USER, LOADING_WATCH_USER, FAILED_WATCH_USER } from '../actions/actionType'

const watchUserReducer = (state = {}, action) => {
    switch(action.type){
        case ADD_WATCH_USER:
            if(state.data===undefined){
                return {
                    status: 'ok',
                    timeUpdated: Date.now(),
                    data: [action.payload],
                }    
            }
            return {
                    status: 'ok',
                    timeUpdated: Date.now(),
                    data: [...(state.data), action.payload],
                }
        case DELETE_WATCH_USER: 
            return {
                    ...state,
                    status: 'ok',
                    data: state.data.filter((item) => item.handle!==action.payload.handle)
                }
        case LOADING_WATCH_USER:
            return {
                status: 'loading'
            }
        case FAILED_WATCH_USER:
            return {
                status: 'failed',
                error: payload.error
            }
        default: return state
    }
}

export default watchUserReducer