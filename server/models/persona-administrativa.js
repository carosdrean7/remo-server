const mongoose = require('mongoose')
const { Schema } = mongoose

const persona_dministrativaSchema = new Schema({
    gradoAcademico: { type: String, required: true },
    photoUrl: { type: String, required: true },
    presentacion: { type: String, required: true },
    cargo: { type: String, required: true },
    telefono: { type: Number, required: true }
})

module.exports = mongoose.model('persona_administrativas', persona_administrativaSchema)