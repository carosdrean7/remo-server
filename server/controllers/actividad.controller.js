const ActividadModel = require('../models/actividad')
const actividad = {}

actividad.getActividads = async (req, res) => {
    const actividads = await ActividadModel.find()
    res.json(actividads)
}

actividad.getActividad = async (req, res) => {
    const actividad = await ActividadModel.findById(req.params.id)
    res.json(actividad)
}

actividad.createActividad = async (req, res) => {
    const actividad = new ActividadModel(req.body)
    await actividad.save()
    res.json({
        'message': 'Actividad Guardada'
    })
}

actividad.editActividad = async (req, res) => {
    const actividad = {
        titulo: req.body.titulo,
        fecha: req.body.fecha,
        tipo: req.body.tipo,
        fechaFin: req.body.fechaFin,
        descripcion: req.body.descripcion
    }
    await ActividadModel.findByIdAndUpdate(req.params.id, {$set: actividad}, {new: true})
    res.json({'message': 'Actividad Actualizada'})
}

actividad.deleteActividad = async (req, res) => {
    await ActividadModel.findByIdAndRemove(req.params.id)
    res.json({'message': 'Actividad Eliminada'})
}

module.exports = actividad
