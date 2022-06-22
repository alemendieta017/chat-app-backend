const Model = require('./model') // const model = mongoose.model("message", mySchema);

async function addMessage(message) {
  const myMessage = await new Model(message)
  return myMessage.save()
}

async function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    let filter = {}
    if (filterUser !== null) {
      filter = { chat: filterUser }
    }
    Model.find(filter)
      // .populate('user')
      .exec((err, populated) => {
        if (err) {
          reject(err)
          return false
        }
        resolve(populated)
      })
  })
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id,
  })
  foundMessage.message = message
  const newMessage = await foundMessage.save()
  return newMessage
}

function deleteMessage(id) {
  return Model.deleteOne({
    _id: id,
  })
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  remove: deleteMessage,
}
