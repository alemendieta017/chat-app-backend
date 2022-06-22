const Model = require("./model")

async function createChat(chatUsers) {
  const myChats = await new Model(chatUsers)
  return myChats.save()
}

function listChats(userId) {
  return new Promise((resolve, reject) => {
    let filter = {}
    if (userId !== null) {
      filter = { users : userId}
    }
    Model.find(filter)
      .populate("users")
      .exec((err, populated) => {
        if (err) {
          reject(err)
          return false
        }
        resolve(populated)
      })
  })
}

module.exports = {
  create : createChat,
  list : listChats
}
