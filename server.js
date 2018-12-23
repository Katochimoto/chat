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

function getUsers () {
  const data = []
  for (const user of users.values()) {
    data.push(user)
  }
  return data
}

function getMessages () {
  const data = []
  for (const message of messages.values()) {
    data.push(message)
  }
  return data
}

class User {
  constructor (data) {
    this.id = uuidv4()
    this.name = data.name
    this.clientId = data.clientId
    this.online = data.online || true
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
  client.on('join', function (data, fn) {
    let clientExist = false
    for (const user of users.values()) {
      if (user.clientId === client.id) {
        clientExist = true
        break
      }
    }

    if (clientExist) {
      fn({ error: true, message: 'User is already registered' })
      return
    }

    let userExist = false
    for (const user of users.values()) {
      if (user.name === data.name) {
        userExist = true
        break
      }
    }

    if (userExist) {
      fn({ error: true, message: 'User with this name is already registered' })
      return
    }

    const user = new User({
      name: data.name,
      clientId: client.id,
    })

    users.set(user.id, user)
    fn({ data: user })
    client.emit('users', getUsers())
  })

  client.on('leave', function (data, fn) {
    users.delete(data.id)
    fn({})
    client.emit('users', getUsers())
  })

  client.on('checkAuth', function (data, fn) {
    if (users.has(data.id)) {
      const user = users.get(data.id)
      user.clientId = client.id
      user.online = true
      users.set(data.id, user)

      fn({ data: user })
      client.emit('users', getUsers())
    } else {
      fn({ error: true, message: 'User is not registered' })
    }
  })

  client.on('message', function (data, fn) {
    const user = users.get(client.id)

    if (!user) {
      fn({ error: true, message: 'User is not registered' })
      return
    }

    const message = new Message(user, data)
    messages.set(message.id, message)
  })

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
