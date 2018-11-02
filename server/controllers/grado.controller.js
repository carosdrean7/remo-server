const GradoModel = require('../models/grado')
const grado = {}

grado.getGrados = async (req, res) => {
    const grados = await GradoModel.find()
    res.json(grados)
}

grado.getGrado = async (req, res) => {
    const grado = await GradoModel.findById(req.params.id)
    res.json(grado)
}

grado.createGrado = async (req, res) => {
    const grado = new GradoModel(req.body)
    await grado.save()
    res.json({
        'message': 'Grado Guardada'
    })
}

grado.editGrado = async (req, res) => {
    const grado = {
        nombre: req.body.nombre,
        _idGrado: req.body._idGrado        
    }
    await GradoModel.findByIdAndUpdate(req.params.id, {$set: grado}, {new: true})
    res.json({'message': 'Grado Actualizada'})
}

grado.deleteGrado = async (req, res) => {
    await GradoModel.findByIdAndRemove(req.params.id)
    res.json({'message': 'Grado Eliminada'})
}

module.exports = grado