const NivelModel = require('../models/nivel')
const nivel = {}

nivel.getNivels = async (req, res) => {
    const nivels = await NivelModel.find()
    res.json(nivels)
}

nivel.getNivel = async (req, res) => {
    const nivel = await NivelModel.findById(req.params.id)
    res.json(nivel)
}

nivel.createNivel = async (req, res) => {
    const nivel = new NivelModel(req.body)
    await nivel.save()
    res.json({
        'message': 'nivel Guardado'
    })
}

nivel.editNivel = async (req, res) => {
    const nivel = {
        nombre: req.body.nombre,
        precio: req.body.precio
    }
    await NivelModel.findByIdAndUpdate(req.params.id, {$set: nivel}, {new: true})
    res.json({'message': 'nivel Actualizado'})
}

nivel.deleteNivel = async (req, res) => {
    await NivelModel.findByIdAndRemove(req.params.id)
    res.json({'message': 'nivel Eliminado'})
}

module.exports = nivel
