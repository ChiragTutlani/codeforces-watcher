import { ADD_COMPARE, REMOVE_COMPARE, LOADING_COMPARE, FAILED_COMPARE } from "../actions/actionType";

const compareUserReducer = (state = {}, action) => {
    switch(action.type){
        case ADD_COMPARE: 
            if(state.data===undefined){
                return {
                    status: 'ok',
                    timeUpdated: Date.now(),
                    data: [action.payload]
                }
            }
            return {
                status: 'ok',
                timeUpdated: Date.now(),
                data: [...(state.data), action.payload]
            }

        case REMOVE_COMPARE:
            return {
                status: 'ok',
                timeUpdated: state.timeUpdated,
                data: state.data.filter((user) => user.handle!==action.payload.handle)
            }
        case LOADING_COMPARE:
            return {
                status: 'loading'
            }
        case FAILED_COMPARE:
            return {
                status: 'failed',
                error: action.error
            }
        default:
            return state
    }
}

export default compareUserReducer