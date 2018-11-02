const mongoose = require('mongoose')
const { Schema } = mongoose

const nosotrosSchema = new Schema({
    presentación: { type: String, required: true },
    misión: { type: String, required: true },
    visión: { type: String, required: true },
    hístoria: { type: String, required: true }
})

module.exports = mongoose.model('nosotros', nosotrosSchema)