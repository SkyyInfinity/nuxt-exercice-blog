const Post = require('../Models/Post.mysql');

exports.create = async function(req,res) {
    const posts = new Post({
        title: req.body.title,
        author: req.body.author,
        content : req.body.content,
        date: req.body.date
    });

    await Post.create(posts, async (err,data) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Une erreur est arrive'
            })
        }

        res.json(data);
    })
}

exports.getAll = async function(req,res){
    await Post.getAll((err , data ) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Une erreur est arrive'
            })
        }

        res.json(data);
    })
}
exports.getOne = async function(req,res){
    await Post.getOne(req.params.id, (err , data ) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Une erreur est arrive'
            })
        }

        res.json(data);
    })
}

exports.updateById = async function(req,res) {
    const post = new Post({
        title: req.body.title,
        author: req.body.author,
        content : req.body.content,
        date: req.body.date
    });

    await Post.updateById(req.params.id, post,(err,data) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Une erreur est arrive'
            })
        }

        res.json(data);
    })
}

exports.deleteById = async function(req,res) {

    await Post.deleteById(req.params.id,(err,data) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Une erreur est arrive'
            })
        }

        res.json(data);
    })
}
