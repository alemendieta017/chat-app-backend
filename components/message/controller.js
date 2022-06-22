const store = require('./store')
const { socket } = require('../../socket')

function addMessage(chat, user, message, file) {
  return new Promise(async (resolve, reject) => {
    if (!chat || !user || !message) {
      console.error('[messageController] No hay chat, usuario o mensaje')
      reject('Los datos son incorrectos')
      return false
    }
    let fileUrl = ''
    if (file) {
      fileUrl = 'http://localhost:3000/app/files/' + file.filename
    }
    let fullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date(),
      file: fileUrl,
    }
    const newMsg = await store.add(fullMessage)
    console.log(newMsg)
    // la response va la data populada con users
    socket.io.emit('update', newMsg)
    resolve(newMsg)
  })
}

function getMessages(filterChat) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterChat))
  })
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalid data')
      return false
    }
    const result = await store.updateText(id, message)
    resolve(result)
  })
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Id invalido')
      return false
    }
    store
      .remove(id)
      .then(() => {
        resolve()
      })
      .catch((e) => {
        reject(e)
      })
  })
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
}
