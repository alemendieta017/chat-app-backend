const store = require('./store')
const bcrypt = require('bcrypt')

async function addUser(body) {
  if (!body.username && !body.password) {
    return Promise.reject('Invalid Data', body)
  }

  const hashedPassword = await bcrypt.hash(body.password, 10)

  let user = {
    username: body.username,
    password: hashedPassword,
  }

  const newUser = await store.add(user)

  return newUser
}

function listUsers() {
  return new Promise((resolve, reject) => {
    resolve(store.list())
  })
}

function getUserByUsername(username) {
  return new Promise((resolve, reject) => {
    resolve(store.getUser(username))
  })
}

module.exports = {
  addUser,
  listUsers,
  getUserByUsername,
}
