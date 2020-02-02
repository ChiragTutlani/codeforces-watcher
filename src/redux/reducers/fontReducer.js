import { ADD_FONT } from "../actions/actionType";

const fontReducer = (state = {}, action) => {
    if(action.type===ADD_FONT){
        return {
            status: 'ok',
            data: action.payload.font
        }
    }
    else{
        return state
    }
}

export default fontReducer