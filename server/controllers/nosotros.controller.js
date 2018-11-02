const NosotrosModel = require('../models/nosotros')
const nosotros = {}

nosotros.getnosotross = async (req, res) => {
    const nosotross = await NosotrosModel.find()
    res.json(nosotross)
}

nosotros.getnosotros = async (req, res) => {
    const nosotros = await NosotrosModel.findById(req.params.id)
    res.json(nosotros)
}

nosotros.createnosotros = async (req, res) => {
    const nosotros = new NosotrosModel(req.body)
    await nosotros.save()
    res.json({
        'message': 'Nosotros Guardada'
    })
}

nosotros.editnosotros = async (req, res) => {
    const nosotros = {
        nombre: req.body.nombre,
        _idGrado: req.body._idGrado        
    }
    await NosotrosModel.findByIdAndUpdate(req.params.id, {$set: nosotros}, {new: true})
    res.json({'message': 'Nosotros Actualizada'})
}

nosotros.deletenosotros = async (req, res) => {
    await NosotrosModel.findByIdAndRemove(req.params.id)
    res.json({'message': 'Nosotros Eliminada'})
}

module.exports = nosotros