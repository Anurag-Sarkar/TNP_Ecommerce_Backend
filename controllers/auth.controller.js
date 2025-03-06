const User = require('../models/user.model');


module.exports.register = async (req, res) => {
    try{
        const {email,password,name} = req.body
        const userExists = await User.findOne({email})
        if(userExists){
            return res.status(400).json({message:"User already exists"})
        }
        const user = await User.create({email,password,name})
        res.status(200).json({message:"success",user})
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
module.exports.login = async (req, res) => {
    console.log(req.body)
}
module.exports.logout = async (req, res) => {}


