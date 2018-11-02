const mongoose = require('mongoose')
const { Schema } = mongoose

const libroSchema = new Schema({
    nombre: { type: String, required: true },
    autor: { type: String, required: true },
    edicion: { type: String, required: true },
    _idCurso: { type: String, required: true }
})

module.exports = mongoose.model('libros', libroSchema)