import { ADD_FONT } from "./actionType"

const addFontActionCreator = (font) => async (dispatch) => {
    dispatch({
        type: ADD_FONT,
        payload: {
            font: font
        }
    })
}

export default addFontActionCreator