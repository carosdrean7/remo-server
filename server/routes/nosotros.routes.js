const express = require('express')
const nosotros = require('../controllers/nosotros.controller')

const router = express.Router()

router.get('/', nosotros.getNosotross)
router.post('/', nosotros.createNosotros)
router.get('/:id', nosotros.getNosotros)
router.put('/:id', nosotros.editNosotros)
router.delete('/:id', nosotros.deleteNosotros)

module.exports = router