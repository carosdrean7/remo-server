const mongoose = require('mongoose')
const { Schema } = mongoose

const gradoSchema = new Schema({
    nombre: { type: String, required: true },
    turno: { type: String, required: true },
    _idNivel: { type: String }
})

module.exports = mongoose.model('grados', gradoSchema)