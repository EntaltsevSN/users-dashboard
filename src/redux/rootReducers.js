import { combineReducers } from "redux";
import { usersReducer } from './usersReducer'
import { loaderReducer } from './loaderReducer'
import { loginReducer } from './loginReducer'

export const rootReducers = combineReducers({
  usersReducer,
  loaderReducer,
  loginReducer
})