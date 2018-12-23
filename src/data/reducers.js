import { combineReducers } from 'redux'
import * as actions from './actions'

function auth (state = {}, action) {
  console.log('auth', state, action)
  switch (action.type) {
  case actions.SET_USER_LOGIN:
    return {
      ...state,
      user: action.user,
    }
  case actions.SET_USER_LOGOUT:
    return {}
  case actions.SET_USER_AUTH_STATUS:
    return {
      ...state,
      status: action.status,
      message: action.message,
    }
  default:
    return state
  }
}

function users (state = [], action) {
  switch (action.type) {
  case actions.SET_USERS:
    return [
      ...action.users,
    ]
  default:
    return state
  }
}

function messages (state = [], action) {
  switch (action.type) {
  case actions.APPEND_MESSAGES:
    return [
      ...state,
      ...action.messages,
    ]
  default:
    return state
  }
}

function showUsersList (state = true, action) {
  switch (action.type) {
  case actions.TOGGLE_USERS_LIST:
    return !state
  default:
    return state
  }
}

const chatApp = combineReducers({
  auth,
  users,
  messages,
  showUsersList,
})

export default chatApp
