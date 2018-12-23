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

function broadcast (name, data) {
  users.forEach(function (user) {
    user.client.emit(name, data)
  })
}

function getUsers () {
  const data = []
  for (const user of users.values()) {
    data.push(user.toClient())
  }
  return data.sort(function (a, b) {
    const tsA = a.lastMessage && a.lastMessage.timestamp || 0
    const tsB = b.lastMessage && b.lastMessage.timestamp || 0
    if (tsA < tsB) {
      return 1
    } else if (tsA > tsB) {
      return -1
    } else {
      return 0
    }
  })
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
    this.client = data.client
    this.online = true
    this.lastMessage = null
  }

  toClient () {
    return {
      id: this.id,
      name: this.name,
      online: this.online,
      lastMessage: this.lastMessage,
    }
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
  client.emit('users', getUsers())

  client.on('join', function (data, fn) {
    let prevUser = false
    for (const user of users.values()) {
      if (user.client.id === client.id) {
        prevUser = user
        break
      }
    }

    // let userExist = false
    // for (const user of users.values()) {
    //   if (user.name === data.name) {
    //     userExist = true
    //     break
    //   }
    // }

    // if (userExist) {
    //   fn({ error: true, message: 'User with this name is already registered' })
    //   return
    // }

    const user = new User({
      name: data.name,
      client: client,
    })

    if (prevUser) {
      user.id = prevUser.id
    }

    users.set(user.id, user)
    fn({ data: user.toClient() })
    broadcast('users', getUsers())
  })

  client.on('leave', function (data, fn) {
    const user = users.get(data.id)
    if (user) {
      user.online = false
      users.set(data.id, user)

      fn({ data: user.toClient() })
      broadcast('users', getUsers())
    }
  })

  client.on('checkAuth', function (data, fn) {
    if (users.has(data)) {
      const user = users.get(data)
      user.client = client
      user.online = true
      users.set(data, user)

      fn({ data: user.toClient() })
      broadcast('users', getUsers())
    } else {
      fn({ error: true, message: 'User is not registered' })
    }
  })

  client.on('sendMessage', function (data, fn) {
    let user
    for (const item of users.values()) {
      if (item.client.id === client.id) {
        user = item
        break
      }
    }

    if (!user) {
      fn({ error: true, message: 'User is not registered' })
      return
    }

    const message = new Message(user, data)
    messages.set(message.id, message)

    user.lastMessage = message
    users.set(user.id, user)

    fn({})
    broadcast('users', getUsers())
    broadcast('message', message)
  })

  client.on('fetchMessages', function (fromMessage, fn) {
    const messages = getMessages()
    fn({ data: messages })
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
