import { ADD_APP_LOGO } from "./actionType"

const addAppLogoActionCreator = (image) => async (dispatch) => {
    dispatch({
        type: ADD_APP_LOGO,
        payload: {
            image: image
        }
    })
}

export default addAppLogoActionCreator