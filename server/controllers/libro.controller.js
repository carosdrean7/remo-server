const LibroModel = require('../models/libro')
const libro = {}

libro.getLibros = async (req, res) => {
    const libros = await LibroModel.find()
    res.json(libros)
}

libro.getLibro = async (req, res) => {
    const libro = await LibroModel.findById(req.params.id)
    res.json(libro)
}

libro.createLibro = async (req, res) => {
    const libro = new LibroModel(req.body)
    await libro.save()
    res.json({
        'message': 'Libro Guardada'
    })
}

libro.editLibro = async (req, res) => {
    const libro = {
        nombre: req.body.nombre,
        autor: req.body.autor,
        edicion: req.body.edicion,
        idCurso: req.body.idCurso

    }
    await LibroModel.findByIdAndUpdate(req.params.id, {$set: libro}, {new: true})
    res.json({'message': 'Libro Actualizada'})
}

libro.deleteLibro = async (req, res) => {
    await LibroModel.findByIdAndRemove(req.params.id)
    res.json({'message': 'Libro Eliminada'})
}

module.exports = libro