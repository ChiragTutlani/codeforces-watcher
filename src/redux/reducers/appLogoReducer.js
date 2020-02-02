import { ADD_APP_LOGO } from "../actions/actionType";

const appLogoReducer = (state = {}, action) => {
    if(action.type===ADD_APP_LOGO){
        return {
            status: 'ok',
            data: action.payload.image
        }
    }
    else{
        return state
    }
}

export default appLogoReducer