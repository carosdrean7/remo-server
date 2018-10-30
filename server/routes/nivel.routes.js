const express = require('express')
const nivel = require('../controllers/nivel.controller')

const router = express.Router()

router.get('/', nivel.getNivels)
router.post('/', nivel.createNivel)
router.get('/:id', nivel.getNivel)
router.put('/:id', nivel.editNivel)
router.delete('/:id', nivel.deleteNivel)

module.exports = router
