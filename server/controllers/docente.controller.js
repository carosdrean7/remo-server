const DocenteModel = require('../models/docente')
const docente = {}

docente.getDocentes = async (req, res) => {
    const docentes = await DocenteModel.find()
    res.json(docentes)
}

docente.getDocente = async (req, res) => {
    const docente = await DocenteModel.findById(req.params.id)
    res.json(docente)
}

docente.createDocente = async (req, res) => {
    const docente = new DocenteModel(req.body)
    await docente.save()
    res.json({
        'message': 'Docente Guardada'
    })
}

docente.editDocente = async (req, res) => {
    const docente = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        sexo: req.body.sexo,
        fechaNacimiento: req.body.fechaNacimiento
    }
    await DocenteModel.findByIdAndUpdate(req.params.id, {$set: docente}, {new: true})
    res.json({'message': 'Docente Actualizada'})
}

docente.deleteDocente = async (req, res) => {
    await DocenteModel.findByIdAndRemove(req.params.id)
    res.json({'message': 'Docente Eliminada'})
}

module.exports = docente