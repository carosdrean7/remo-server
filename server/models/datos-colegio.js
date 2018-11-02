const mongoose = require('mongoose')
const { Schema } = mongoose

const datos_colegioSchema = new Schema({
    nombreColegio: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: Number, required: true }
})

module.exports = mongoose.model('datos_colegios', datos_colegioSchema)