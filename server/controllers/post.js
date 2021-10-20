const Post = require('../models/posts')
const User = require('../models/users')

async function show (req,res){
    try {
        const post = await Post.findById(parseInt(req.params.pid));
        res.status(200).json(post)
    } catch (err) {
        res.status(404).json({err})
    }
}

async function index(req, res) {
    try {
        const posts = await Post.all;
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).send(err)
    }
}

async function create (req, res){
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post)
    } catch (err) {
        res.status(422).json({err})
    }
}

module.exports = {show, create, index}