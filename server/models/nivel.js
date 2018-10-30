const mongoose = require('mongoose')
const { Schema } = mongoose

const nivelSchema = new Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true }
})

module.exports = mongoose.model('niveles', nivelSchema)