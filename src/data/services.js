import io from 'socket.io-client'

const socket = io({
  path: '/api',
})

socket.on('error', function (err) {
  console.log('received socket error:')
  console.log(err)
})

export function login (name) {
  socket.emit('join', name, () => {

  })
}

export function logout () {
  socket.emit('leave', () => {

  })
}
