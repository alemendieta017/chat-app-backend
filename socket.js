const socketIo = require('socket.io')
const socket = {}
function connect(server) {
  socket.io = socketIo(server, {
    cors: {
      origin: 'http://localhost:5000',
      methods: ['GET', 'POST'],
      credentials: true,
    },
  })
}

module.exports = { socket, connect }
