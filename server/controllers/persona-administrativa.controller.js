const PersonaAdministrativaModel = require('../models/persona-administrativa')
const personaadministrativa = {}

personaadministrativa.getpersonaAdministrativas = async (req, res) => {
    const persona_administrativas = await Persona_administrativaModel.find()
    res.json(persona_administrativas)
}

personaadministrativa.getpersonaAdministrativa = async (req, res) => {
    const personaadministrativa = await Persona_administrativaModel.findById(req.params.id)
    res.json(personaadministrativa)
}

personaadministrativa.createpersonaAdministrativa = async (req, res) => {
    const personaadministrativa = new Persona_administrativaModel(req.body)
    await personaadministrativa.save()
    res.json({
        'message': 'Persona administrativa Guardada'
    })
}

personaadministrativa.editpersonaAdministrativa = async (req, res) => {
    const personaadministrativa = {
        nombre: req.body.nombre,
        _idGrado: req.body._idGrado        
    }
    await Persona_administrativaModel.findByIdAndUpdate(req.params.id, {$set: personaadministrativa}, {new: true})
    res.json({'message': 'Persona administrativa Actualizada'})
}

personaadministrativa.deletepersonaAdministrativa = async (req, res) => {
    await Persona_administrativaModel.findByIdAndRemove(req.params.id)
    res.json({'message': 'Persona administrativa Eliminada'})
}

module.exports = personaadministrativa