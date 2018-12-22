import { combineReducers } from 'redux'
import {
  UPDATE_AUTH
} from './actions'

function auth (state = {}, action) {
  switch (action.type) {
  case UPDATE_AUTH:
    return {
      ...state,
      ...action.auth,
    }
  default:
    return state
  }
}

function users (state = [], action) {
  switch (action.type) {
  default:
    return state
  }
}

function messages (state = [], action) {
  switch (action.type) {
  default:
    return state
  }
}

const chatApp = combineReducers({
  auth,
  users,
  messages,
})

export default chatApp
