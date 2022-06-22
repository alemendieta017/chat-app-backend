const bcrypt = require('bcrypt')
const userController = require('../users/controller')

function validate(username, plainPassword) {
  return new Promise((resolve, reject) => {
    let foundUser
    userController
      .getUserByUsername(username)
      .then((data) => {
        bcrypt.compare(plainPassword, data.password, (err, result) => {
          if (err || !result) {
            reject('Error en la validación de password')
          } else if (result) {
            resolve({
              id: data.id,
              username: data.username,
            })
          }
        })
      })
      .catch((err) => {
        reject(err)
      })
  })
}

module.exports = { validate }
