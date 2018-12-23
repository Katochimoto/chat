export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'
export const CHECK_AUTH = 'CHECK_AUTH'
export const SET_USER_LOGIN = 'SET_USER_LOGIN'
export const SET_USER_LOGOUT = 'SET_USER_LOGOUT'
export const SET_USER_AUTH_STATUS = 'SET_USER_AUTH_STATUS'
export const SET_USERS = 'SET_USERS'

export function userLogin (user) {
  return { type: USER_LOGIN, user }
}

export function userLogout (user) {
  return { type: USER_LOGOUT, user }
}

export function checkAuth (user) {
  return { type: CHECK_AUTH, user }
}

export function setUserLogin (user) {
  return { type: SET_USER_LOGIN, user }
}

export function setUserLogout () {
  return { type: SET_USER_LOGOUT }
}

export function setUserAuthStatus (status, message) {
  return { type: SET_USER_AUTH_STATUS, status, message }
}

export function setUsers (users) {
  return { type: SET_USERS, users }
}
