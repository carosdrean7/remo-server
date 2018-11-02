const express = require('express')
const datos = require('../controllers/datos-colegio.controller')

const router = express.Router()

router.get('/', datos.getDatosColegios)
router.post('/', datos.creatDatosColegio)
router.get('/:id', datos.getDatosColegio)
router.put('/:id', datos.editDatosColegio)
router.delete('/:id', datos.deleteDatosColegio)

module.exports = router