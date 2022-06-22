const express = require('express')
const router = express.Router()
const controller = require('./controller')
const response = require('../../network/response')

router.post('/', function (req, res) {
  controller
    .addChat(req.body.users)
    .then((data) => {
      response.success(req, res, data, 201)
    })
    .catch((err) => {
      response.error(req, res, 'Internal chat error', 500, err)
    })
})

router.get('/', function (req, res) {
  const filterChats = req.body.userId || null
  controller
    .listChats(filterChats)
    .then((data) => {
      response.success(req, res, data, 200)
    })
    .catch((err) => {
      response.error(res, req, 'Error al listar chats', 500, err)
    })
})

module.exports = router
