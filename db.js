const db = require('mongoose')

db.Promise = global.Promise
// le dice a mongoose que utilice la clase de promesas nativas, y que no use callbacks

async function connect(url) {
  try {
    await db.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: process.env.DATABASE_NAME,
    })
    console.log('[db] Conectada con éxito')
  } catch (e) {
    console.error('[db] Error en la conexión con la base de datos')
    console.error(e)
  }
}

module.exports = connect
