import io from 'socket.io-client'
import store from '@/data/store'
import * as actions from '@/data/actions'

const socket = io({
  path: '/api',
})

socket.on('connect', () => {
  store.dispatch(actions.toggleOnline(true))
})

socket.on('reconnect', () => {
  store.dispatch(actions.toggleOnline(true))
})

socket.on('disconnect', () => {
  store.dispatch(actions.toggleOnline(false))
})

socket.on('error', function (err) {
  console.log('received socket error:')
  console.log(err)
  store.dispatch(actions.toggleOnline(false))
})

socket.on('users', function (users) {
  store.dispatch(actions.setUsers(users))
})

socket.on('message', function (message) {
  store.dispatch(actions.appendMessages([ message ]))
})

export function checkAuth (userId) {
  return new Promise((resolve, reject) => {
    socket.emit('checkAuth', userId, ({ error, data, message }) => {
      if (error) {
        reject(message)
      } else {
        resolve(data)
      }
    })
  })
}

export function login (user) {
  return new Promise((resolve, reject) => {
    socket.emit('join', user, ({ error, data, message }) => {
      if (error) {
        reject(message)
      } else {
        resolve(data)
      }
    })
  })
}

export function logout (user) {
  return new Promise((resolve, reject) => {
    socket.emit('leave', user, ({ error, message }) => {
      if (error) {
        reject(message)
      } else {
        resolve()
      }
    })
  })
}

export function fetchMessages (fromMessage) {
  return new Promise((resolve, reject) => {
    socket.emit('fetchMessages', fromMessage, ({ data, error, message }) => {
      if (error) {
        reject(message)
      } else {
        resolve(data)
      }
    })
  })
}

export function sendMessage (message) {
  return new Promise((resolve, reject) => {
    socket.emit('sendMessage', message, ({ error, message }) => {
      if (error) {
        reject(message)
      } else {
        resolve()
      }
    })
  })
}
