const mongoose = require('mongoose')
const { Schema } = mongoose

const actividaSchema = new Schema({
    titulo: { type: String, required: true },
    fecha: { type: String, required: true },
    tipo: { type: String, required: true },
    descripcion: { type: String, required: true }
    
})

module.exports = mongoose.model('actividades', actividaSchema)