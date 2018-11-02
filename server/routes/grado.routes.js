const express = require('express')
const grado = require('../controllers/grado.controller')

const router = express.Router()

router.get('/', grado.getGrados)
router.post('/', grado.createGrado)
router.get('/:id', grado.getGrado)
router.put('/:id', grado.editGrado)
router.delete('/:id', grado.deleteGrado)

module.exports = router