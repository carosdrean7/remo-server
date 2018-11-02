const mongoose = require('mongoose')
const { Schema } = mongoose

const curso_veranoSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    fechaInicio: { type: String, required: true },
    fechaFin: { type: String, required: true },
    id_Docente: { type: String }
})

module.exports = mongoose.model('curso_veranos', curso_veranoSchema)