import { CHANGE_INITIAL_ROUTE } from "../actions/actionType";

const changeInitialRouteReducer = (state = '', action) => {
    if(action.type===CHANGE_INITIAL_ROUTE){
        return action.payload.route
    }
    else{
        return state
    }
}

export default changeInitialRouteReducer