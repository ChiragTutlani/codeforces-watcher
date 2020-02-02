import { combineReducers } from 'redux'

import yourUserHandleReducer from './yourUserHandleReducer'
import watchUserReducer from './watchUserReducer'
import contestReducer from './contestReducer'
import problemSetReducer from './problemSetReducer'
import searchUserReducer from './searchUserReducer'
import compareUserReducer from './compareUserReducer'
import fontReducer from './fontReducer'
import appLogoReducer from './appLogoReducer'
import changeInitialRouteReducer from './changeInitialRouteReducer'

export default combineReducers({
    yourUserHandle: yourUserHandleReducer,
    watchUser: watchUserReducer,
    contest: contestReducer,
    problemSet: problemSetReducer,
    searchUser: searchUserReducer,
    compareUser: compareUserReducer,
    font: fontReducer,
    appLogo: appLogoReducer,
    initialRoute: changeInitialRouteReducer
})