const express = require('express')
const persona_administrativa = require('../controllers/persona-administrativa.controller')

const router = express.Router()

router.get('/', persona_administrativa.getPersona_administrativas)
router.post('/', persona_administrativa.createPersona_administrativa)
router.get('/:id', persona_administrativa.getPersona_administrativa)
router.put('/:id', persona_administrativa.editPersona_administrativa)
router.delete('/:id', persona_administrativa.deletePersona_administrativa)

module.exports = router