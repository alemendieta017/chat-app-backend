const express = require('express')
const message = require('../components/message/network')
const user = require('../components/users/network')
const chat = require('../components/chat/network')
const auth = require('../components/auth/network')

function routes(server) {
  server.use('/message', message)
  server.use('/user', user)
  server.use('/chat', chat)
  server.use('/auth', auth)
}

module.exports = routes
