const express = require('express')
const post = require('../controllers/post.controller')

const router = express.Router()

router.get('/', post.getPosts)
router.post('/', post.createPost)
router.get('/:id', post.getPost)
router.put('/:id', post.editPost)
router.delete('/:id', post.deletePost)

module.exports = router