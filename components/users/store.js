const Model = require('./model')

async function addUser(user) {
  const myUser = await new Model(user)
  return myUser.save()
}

async function listUsers() {
  Model.find((err, data) => console.log(data))
  let listOfUsers = await Model.find((err, data) => {
    return data
  })
  return listOfUsers
}

async function getUser(username) {
  let foundUser = await Model.findOne({ username }).exec()
  return foundUser
}

module.exports = {
  add: addUser,
  list: listUsers,
  getUser,
}
