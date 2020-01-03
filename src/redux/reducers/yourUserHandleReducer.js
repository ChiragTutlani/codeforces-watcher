import {CHANGE_YOUR_USER_HANDLE, LOADING_HANDLE, FAILED_HANDLE} from '../actions/actionType'

const yourUserHandleReducer = (state = {}, action) => {
    switch(action.type){
        case CHANGE_YOUR_USER_HANDLE: 
            return {
                status: 'ok',
                timeUpdated: Date.now(),
                data: action.payload,
            }
        case LOADING_HANDLE:
            return {
                status: 'loading'
            }
        case FAILED_HANDLE: 
            return {
                status: 'failed',
                error : payload.error
            }
        default: return state
    }
}

export default yourUserHandleReducer