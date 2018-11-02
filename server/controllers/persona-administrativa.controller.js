const Persona_administrativaModel = require('../models/persona-administrativa')
const persona_administrativa = {}

persona_administrativa.getpersona_administrativas = async (req, res) => {
    const persona_administrativas = await Persona_administrativaModel.find()
    res.json(persona_administrativas)
}

persona_administrativa.getpersona_administrativa = async (req, res) => {
    const persona_administrativa = await Persona_administrativaModel.findById(req.params.id)
    res.json(persona_administrativa)
}

persona_administrativa.createpersona_administrativa = async (req, res) => {
    const persona_administrativa = new Persona_administrativaModel(req.body)
    await persona_administrativa.save()
    res.json({
        'message': 'Persona administrativa Guardada'
    })
}

persona_administrativa.editpersona_administrativa = async (req, res) => {
    const persona_administrativa = {
        nombre: req.body.nombre,
        _idGrado: req.body._idGrado        
    }
    await Persona_administrativaModel.findByIdAndUpdate(req.params.id, {$set: persona_administrativa}, {new: true})
    res.json({'message': 'Persona administrativa Actualizada'})
}

persona_administrativa.deletepersona_administrativa = async (req, res) => {
    await Persona_administrativaModel.findByIdAndRemove(req.params.id)
    res.json({'message': 'Persona administrativa Eliminada'})
}

module.exports = persona_administrativa