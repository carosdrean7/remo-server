const express = require('express')
const curso_verano = require('../controllers/curso-verano.controller')

const router = express.Router()

router.get('/', curso_verano.getAurso_veranos)
router.post('/', curso_verano.createCurso_verano)
router.get('/:id', curso_verano.getCurso_verano)
router.put('/:id', curso_verano.editCurso_verano)
router.delete('/:id', curso_verano.deleteCurso_verano)

module.exports = router