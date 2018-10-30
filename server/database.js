const mongoose = require('mongoose')
// el usuario y la contraseña deben venir del frontend
const URI = 'mongodb://drean:fidelidad7@ds145573.mlab.com:45573/remo-database'

mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB Conectado'))

module.exports = mongoose