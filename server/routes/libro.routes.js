const express = require('express')
const libro = require('../controllers/libro.controller')

const router = express.Router()

router.get('/', libro.getLibros)
router.post('/', libro.createLibro)
router.get('/:id', libro.getLibro)
router.put('/:id', libro.editLibro)
router.delete('/:id', libro.deleteLibro)

module.exports = router