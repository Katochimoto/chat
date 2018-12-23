import keyBy from 'lodash/keyBy'

export function selectOnline (state) {
  return state.online
}

export function selectShowUsersList (state) {
  return state.showUsersList
}

export function selectAuth (state) {
  return state.auth
}

export function selectUsers (state) {
  return state.users
}

export function selectMessages (state) {
  const users = keyBy(state.users, 'id')
  return state.messages.map(item => ({
    ...item,
    user: users[item.userId],
  }))
}

export function selectUser (userId) {
  return (state) => {
    if (!userId) {
      return
    }

    return state.users.find(item => (
      item.id === userId
    ))
  }
}
