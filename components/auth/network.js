const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.post('/login', (req, res) => {
  controller
    .validate(req.body.username, req.body.password)
    .then((user) => {
      response.success(req, res, user, 200)
    })
    .catch((err) => {
      response.error(req, res, 'Login Error', 401, err)
    })
})

module.exports = router
