const uuidv4 = require('uuid/v4')
const server = require('http').createServer()

const io = require('socket.io')(server, {
  path: '/api',
  serveClient: false,
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false,
})

const users = new Map()
const messages = new Map()

class User {
  constructor (data) {
    this.id = data.id
    this.name = data.name
  }
}

class Message {
  constructor (user, message) {
    this.id = uuidv4()
    this.message = message
    this.userId = user.id
    this.timestamp = Date.now()
  }
}

io.on('connection', function (client) {
  client.on('join', function (name, fn) {

    if (users.has(client.id)) {
      fn({ status: 'error', message: 'User is already registered' })
      return
    }

    let userExist = false
    for (const user of users.values()) {
      if (user.name === name) {
        userExist = true
        break
      }
    }

    if (userExist) {
      fn({ status: 'error', message: 'User with this name is already registered' })
      return
    }

    const user = new User({
      id: client.id,
      name: name,
    })

    users.set(user.id, user)

    fn({ status: 'success' })
  })

  client.on('leave', function (fn) {
    users.delete(client.id)
    fn({ status: 'success' })
  })

  client.on('message', function (message, fn) {
    const user = users.get(client.id)

    if (!user) {
      fn({ status: 'error', message: 'User is not registered' })
      return
    }

    const message = new Message(user, message)
    messages.set(message.id, message)
  })

  client.on('users', () => {})
  client.on('messages', () => {})

  client.on('disconnect', function () {
    console.log('client disconnect...', client.id)
  })

  client.on('error', function (err) {
    console.log('received error from client:', client.id)
    console.log(err)
  })
})

server.listen(3000, function (err) {
  if (err) {
    throw err
  }

  console.log('listening on port 3000')
})
