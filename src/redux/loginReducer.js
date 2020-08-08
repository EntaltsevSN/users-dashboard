import { LOGIN_USER, LOGOUT_USER } from "./actionTypes"

export const loginReducer = (state = false, { type, payload }) => {
  switch(type) {
    case LOGIN_USER:
      return true
    case LOGOUT_USER:
      return false
    default:
      return state
  }
}