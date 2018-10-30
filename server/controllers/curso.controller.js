const CursoModel = require('../models/curso')
const curso = {}

curso.getCursos = async (req, res) => {
    const cursos = await CursoModel.find()
    res.json(cursos)
}

curso.getCurso = async (req, res) => {
    const curso = await CursoModel.findById(req.params.id)
    res.json(curso)
}

curso.createCurso = async (req, res) => {
    const curso = new CursoModel(req.body)
    await curso.save()
    res.json({
        'message': 'curso Guardado'
    })
}

curso.editCurso = async (req, res) => {
    const curso = {
        nombre: req.body.nombre,
        _idGrado: req.body._idGrado        
    }
    await CursoModel.findByIdAndUpdate(req.params.id, {$set: curso}, {new: true})
    res.json({'message': 'Curso Actualizado'})
}

curso.deleteCurso = async (req, res) => {
    await CursoModel.findByIdAndRemove(req.params.id)
    res.json({'message': 'Curso Eliminado'})
}

module.exports = curso