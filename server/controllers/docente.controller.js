const DocenteModel = require('../models/docente')
const docente = {}

docente.getdocentes = async (req, res) => {
    const docentes = await DocenteModel.find()
    res.json(docentes)
}

docente.getdocente = async (req, res) => {
    const docente = await DocenteModel.findById(req.params.id)
    res.json(docente)
}

docente.createdocente = async (req, res) => {
    const docente = new DocenteModel(req.body)
    await docente.save()
    res.json({
        'message': 'Docente Guardada'
    })
}

docente.editdocente = async (req, res) => {
    const docente = {
        nombre: req.body.nombre,
        _idGrado: req.body._idGrado        
    }
    await DocenteModel.findByIdAndUpdate(req.params.id, {$set: docente}, {new: true})
    res.json({'message': 'Docente Actualizada'})
}

docente.deletedocente = async (req, res) => {
    await DocenteModel.findByIdAndRemove(req.params.id)
    res.json({'message': 'Docente Eliminada'})
}

module.exports = docente