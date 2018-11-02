const express = require('express')
const datos = require('../controllers/datos.controller')

const router = express.Router()

router.get('/', datos.getDatoss)
router.post('/', datos.createDatos)
router.get('/:id', datos.getDatos)
router.put('/:id', datos.editDatos)
router.delete('/:id', datos.deleteDatos)

module.exports = router