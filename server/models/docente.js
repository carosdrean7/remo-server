const mongoose = require('mongoose')
const { Schema } = mongoose

const docenteSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    telefono: { type: Number, required: true },
    sexo: { type: String, required: true },
    fechaNacimiento: { type: String, required: true }
})

module.exports = mongoose.model('docentes', docenteSchema)