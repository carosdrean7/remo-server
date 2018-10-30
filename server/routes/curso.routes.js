const express = require('express')
const curso = require('../controllers/curso.controller')

const router = express.Router()

router.get('/', curso.getCursos)
router.post('/', curso.createCurso)
router.get('/:id', curso.getCurso)
router.put('/:id', curso.editCurso)
router.delete('/:id', curso.deleteCurso)

module.exports = router