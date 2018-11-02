const DatosColegioModel = require('../models/datos-colegio')
const datosColegio = {}

datosColegio.getDatosColegios = async (req, res) => {
    const datosColegios = await DatosColegioModel.find()
    res.json(datosColegios)
}

datosColegio.getDatosColegio = async (req, res) => {
    const datosColegio = await DatosColegioModel.findById(req.params.id)
    res.json(datosColegio)
}

datosColegio.creatDatosColegio = async (req, res) => {
    const datosColegio = new DatosColegioModel(req.body)
    await datosColegio.save()
    res.json({
        'message': 'Datos colegio Guardada'
    })
}

datosColegio.editDatosColegio = async (req, res) => {
    const datosColegio = {
        nombre: req.body.nombre,
        _idGrado: req.body._idGrado        
    }
    await DatosColegioModel.findByIdAndUpdate(req.params.id, {$set: datosColegio}, {new: true})
    res.json({'message': 'Datos colegio Actualizada'})
}

datosColegio.deleteDatosColegio = async (req, res) => {
    await DatosColegioModel.findByIdAndRemove(req.params.id)
    res.json({'message': 'Datos colegio Eliminada'})
}

module.exports = datosColegio