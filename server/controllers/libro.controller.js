const LibroModel = require('../models/libro')
const libro = {}

libro.getlibros = async (req, res) => {
    const libros = await LibroModel.find()
    res.json(libros)
}

libro.getlibro = async (req, res) => {
    const libro = await LibroModel.findById(req.params.id)
    res.json(libro)
}

libro.createlibro = async (req, res) => {
    const libro = new LibroModel(req.body)
    await libro.save()
    res.json({
        'message': 'Libro Guardada'
    })
}

libro.editlibro = async (req, res) => {
    const libro = {
        nombre: req.body.nombre,
        _idGrado: req.body._idGrado        
    }
    await LibroModel.findByIdAndUpdate(req.params.id, {$set: libro}, {new: true})
    res.json({'message': 'Libro Actualizada'})
}

libro.deletelibro = async (req, res) => {
    await LibroModel.findByIdAndRemove(req.params.id)
    res.json({'message': 'Libro Eliminada'})
}

module.exports = libro