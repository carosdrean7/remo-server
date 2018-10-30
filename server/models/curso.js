const mongoose = require('mongoose')
const { Schema } = mongoose

const cursoSchema = new Schema({
    nombre: { type: String, required: true },  
    _idGrado: { type: String, required: true }
})

module.exports = mongoose.model('cursos', cursoSchema)