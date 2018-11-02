const mongoose = require('mongoose')
const { Schema } = mongoose

const postSchema = new Schema({
    contenido: { type: String, required: true },
    titulo: { type: String, required: true },
    fechaPublicacion: { type: String, required: true }
})

module.exports = mongoose.model('posts', postSchema)