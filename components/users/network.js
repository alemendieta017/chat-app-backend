const express = require('express')
const router = express.Router()
const controller = require('./controller')
const response = require('../../network/response')

router.post('/', function (req, res) {
  controller
    .addUser(req.body)
    .then((data) => {
      response.success(req, res, data, 201)
    })
    .catch((err) => {
      response.error(req, res, 'Internal user error', 500, err)
    })
})

router.get('/', function (req, res) {
  controller
    .listUsers()
    .then((data) => {
      response.success(req, res, data, 200)
    })
    .catch((err) => {
      response.error(res, req, 'Error al listar users', 500, err)
    })
})

module.exports = router
