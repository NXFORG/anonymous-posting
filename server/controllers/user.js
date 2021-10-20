const User = require('../models/users')

async function show (req,res){
    try {
        const user = await User.userById(req.params.uid);
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json({err})
    }
}

module.exports = {show}