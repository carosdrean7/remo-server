const PostModel = require('../models/post')
const post = {}

post.getposts = async (req, res) => {
    const posts = await PostModel.find()
    res.json(posts)
}

post.getpost = async (req, res) => {
    const post = await PostModel.findById(req.params.id)
    res.json(post)
}

post.createpost = async (req, res) => {
    const post = new PostModel(req.body)
    await post.save()
    res.json({
        'message': 'Post Guardada'
    })
}

post.editpost = async (req, res) => {
    const post = {
        contenido: req.body.contenido,
        titulo: req.body.titulo,
        fechaPublicacion: req.body.fechaPublicacion        
    }
    await PostModel.findByIdAndUpdate(req.params.id, {$set: post}, {new: true})
    res.json({'message': 'Post Actualizada'})
}

post.deletepost = async (req, res) => {
    await PostModel.findByIdAndRemove(req.params.id)
    res.json({'message': 'Post Eliminada'})
}

module.exports = post