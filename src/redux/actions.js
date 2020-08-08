import { FETCH_USERS, EDIT_USERS, REMOVE_USERS, SHOW_LOADER, HIDE_LOADER, ADD_USERS, LOGIN_USER, LOGOUT_USER } from "./actionTypes"

export const fetchUsers = () => ({ type: FETCH_USERS })

export const addUser = user => ({
  type: ADD_USERS,
  payload: user
})

export const editUser = user => ({
  type: EDIT_USERS,
  payload: user
})

export const removeUser = id => ({
  type: REMOVE_USERS,
  payload: id
})

export const showLoader = status => ({ 
  type: SHOW_LOADER,
  payload: true
})

export const hideLoader = status => ({ 
  type: HIDE_LOADER,
  payload: false
})

export const loginUser = data => ({ type: LOGIN_USER })

export const logoutUser = () => ({ type: LOGOUT_USER })