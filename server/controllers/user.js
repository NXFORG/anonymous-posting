const User = require('../models/users')
const Post = require('../models/posts')

async function show (req,res){
    try {
        const user = await User.userById(req.params.uid);
        // const posts = await Post.findById(req.params.pid)
        const post = await Post.posts(req.params.pid, req.params.uid);
        console.log(post)
        res.status(200).json({ ...user, post})
    } catch (err) {
        res.status(404).json({err})
    }
}

module.exports = {show}