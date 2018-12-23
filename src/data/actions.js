export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'
export const CHECK_AUTH = 'CHECK_AUTH'
export const SET_USER_LOGIN = 'SET_USER_LOGIN'
export const SET_USER_LOGOUT = 'SET_USER_LOGOUT'
export const SET_USER_AUTH_STATUS = 'SET_USER_AUTH_STATUS'
export const SET_USERS = 'SET_USERS'
export const FETCH_MESSAGES = 'FETCH_MESSAGES'
export const APPEND_MESSAGES = 'APPEND_MESSAGES'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const TOGGLE_USERS_LIST = 'TOGGLE_USERS_LIST'
export const TOGGLE_ONLINE = 'TOGGLE_ONLINE'
export const CLEAN = 'CLEAN'

export function userLogin (user) {
  return { type: USER_LOGIN, user }
}

export function userLogout (user) {
  return { type: USER_LOGOUT, user }
}

export function checkAuth () {
  return { type: CHECK_AUTH }
}

export function fetchMessages (fromMessage) {
  return { type: FETCH_MESSAGES, fromMessage }
}

export function appendMessages (messages) {
  return { type: APPEND_MESSAGES, messages }
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

export function sendMessage (message) {
  return { type: SEND_MESSAGE, message }
}

export function toggleUsersList () {
  return { type: TOGGLE_USERS_LIST }
}

export function toggleOnline (online) {
  return { type: TOGGLE_ONLINE, online }
}

export function clean () {
  return { type: CLEAN }
}
