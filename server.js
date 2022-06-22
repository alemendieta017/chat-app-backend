const express = require('express')
const app = express()
const server = require('http').Server(app)

require('dotenv').config()
const db = require('./db')
const cors = require('cors')
const router = require('./network/routes')

db(process.env.DATABASE_URL)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(router);

router(app)

app.use('/app', express.static('public'))

// app.use('/', function (req, res) {
//   res.send("Hola");
// });

server.listen(process.env.PORT || 3000, function () {
  console.log('La app esta escuchando el puerto ' + process.env.PORT)
})

const socket = require('./socket')
socket.connect(server)
