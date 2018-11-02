const express = require('express')
const actividad = require('../controllers/actividad.controller')

const router = express.Router()

router.get('/', actividad.getActividad)
router.post('/', actividad.createActividad)
router.get('/:id', actividad.getActividad)
router.put('/:id', actividad.editActividad)
router.delete('/:id', actividad.deleteActividad)

module.exports = router