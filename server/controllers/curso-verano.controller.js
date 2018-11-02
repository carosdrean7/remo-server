const CursoVeranoModel = require('../models/curso-verano')
const cursoVerano = {}

cursoVerano.getCursoVeranos = async (req, res) => {
    const cursoVeranos = await CursoVeranoModel.find()
    res.json(cursoVeranos)
}

cursoVerano.getCursoVerano = async (req, res) => {
    const cursoVerano = await CursoVeranoModel.findById(req.params.id)
    res.json(cursoVerano)
}

cursoVerano.createCursoVerano = async (req, res) => {
    const cursoVerano = new CursoVeranoModel(req.body)
    await cursoVerano.save()
    res.json({
        'message': 'Curso de verano Guardada'
    })
}

cursoVerano.editCursoVerano = async (req, res) => {
    const cursoVerano = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        fechaInicio: req.body.fechaInicio,
        id_Docente: req.body.id_docente
    }
    await CursoVeranoModel.findByIdAndUpdate(req.params.id, {$set: cursoVerano}, {new: true})
    res.json({'message': 'Curso de verano Actualizada'})
}

cursoVerano.deleteCursoVerano = async (req, res) => {
    await CursoVeranoModel.findByIdAndRemove(req.params.id)
    res.json({'message': 'Curso de verano Eliminada'})
}

module.exports = cursoVerano