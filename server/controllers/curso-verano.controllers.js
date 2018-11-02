const Curso_veranoModel = require('../models/curso-verano')
const curso_verano = {}

curso_verano.getcurso_veranos = async (req, res) => {
    const curso_veranos = await Curso_veranoModel.find()
    res.json(curso_veranos)
}

curso_verano.getcurso_verano = async (req, res) => {
    const curso_verano = await Curso_veranoModel.findById(req.params.id)
    res.json(curso_verano)
}

curso_verano.createcurso_verano = async (req, res) => {
    const curso_verano = new Curso_veranoModel(req.body)
    await curso_verano.save()
    res.json({
        'message': 'Curso de verano Guardada'
    })
}

curso_verano.editcurso_verano = async (req, res) => {
    const curso_verano = {
        nombre: req.body.nombre,
        precio: req.body.precio
    }
    await Curso_veranoModel.findByIdAndUpdate(req.params.id, {$set: curso_verano}, {new: true})
    res.json({'message': 'Curso de verano Actualizada'})
}

curso_verano.deletecurso_verano = async (req, res) => {
    await Curso_veranoModel.findByIdAndRemove(req.params.id)
    res.json({'message': 'Curso de verano Eliminada'})
}

module.exports = curso_verano