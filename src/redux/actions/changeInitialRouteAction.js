import { CHANGE_INITIAL_ROUTE } from "./actionType"

const changeInitialRouteActionCreator = (route) => async (dispatch) => {
    dispatch({
        type: CHANGE_INITIAL_ROUTE,
        payload: {
            route: route
        }
    })
}

export default changeInitialRouteActionCreator