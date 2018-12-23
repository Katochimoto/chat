import io from 'socket.io-client'
import store from '@/data/store'
import * as actions from '@/data/actions'

const socket = io({
  path: '/api',
})

socket.on('error', function (err) {
  console.log('received socket error:')
  console.log(err)
})

socket.on('users', function (users) {
  store.dispatch(actions.setUsers(users))
})

export function checkAuth (user) {
  return new Promise((resolve, reject) => {
    debugger
    socket.emit('checkAuth', user, ({ error, data, message }) => {
      debugger
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
