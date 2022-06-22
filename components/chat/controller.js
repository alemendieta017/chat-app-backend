const store = require("./store")

function addChat(users) {
  if (!users || !Array.isArray(users)) {
    return Promise.reject("Invalid user")
  }
  let chatUsers = {
    users : users
  }
  return store.create(chatUsers)
}

function listChats(userId) {
  return new Promise((resolve, reject) => {
    resolve(store.list(userId))
  })
}

module.exports = {
  addChat,
  listChats
}
