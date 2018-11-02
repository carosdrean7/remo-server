const express = require('express')
const docente = require('../controllers/docente.controller')

const router = express.Router()

router.get('/', docente.getDocentes)
router.post('/', docente.createDocente)
router.get('/:id', docente.getDocente)
router.put('/:id', docente.editDocente)
router.delete('/:id', docente.deleteDocente)

module.exports = router