import { combineReducers } from 'redux'

import yourUserHandleReducer from './yourUserHandleReducer'
import watchUserReducer from './watchUserReducer'
import contestReducer from './contestReducer'
import problemSetReducer from './problemSetReducer'
import searchUserReducer from './searchUserReducer'
import compareUserReducer from './compareUserReducer'

export default combineReducers({
    yourUserHandle: yourUserHandleReducer,
    watchUser: watchUserReducer,
    contest: contestReducer,
    problemSet: problemSetReducer,
    searchUser: searchUserReducer,
    compareUser: compareUserReducer,
})