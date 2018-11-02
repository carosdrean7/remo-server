const express = require('express')
const curso_verano = require('../controllers/curso-verano.controller')

const router = express.Router()

router.get('/', curso_verano.getCursoVeranos)
router.post('/', curso_verano.createCursoVerano)
router.get('/:id', curso_verano.getCursoVerano)
router.put('/:id', curso_verano.editCursoVerano)
router.delete('/:id', curso_verano.deleteCursoVerano)

module.exports = router