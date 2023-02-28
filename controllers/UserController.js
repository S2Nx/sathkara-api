const User = require('../models/users.model.js');

//get all users
const getUsers = async(req,res)=>{
    const user = await User.find({});

    res.status(200).json(user); 
}

//get user by ID
const getUser = async(req,res)=>{
    const {_id} = req.params

    const user = await User.find({_id})

    if(!user){
        return res.status(404).json({error:'User not found'})
    }

    res.status(200).json(user)
}

//create new user
const createUser = async(req,res)=>{
    const {uName, uEmail, uPhone, uCity, uWhatsapp, uFacebook, uInstagram} = req.body;

    //add document to db
    try{
        const user = await User.create({uName, uEmail,uPhone, uCity, uWhatsapp, uFacebook, uInstagram})
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//update user by ID
const updateUser = async(req,res)=>{
    const {_id} = req.params

    const user = await User.findOneAndUpdate({_id},{
        ...req.body
    })

    if (!user){
        return res.status(404).json({error:'No such user'})
    }

    res.status(200).json(user)
}

//delete user by ID
const deleteUser = async(req,res)=>{
    const {_id} = req.params

    const user = await User.findOneAndDelete({_id})

    if (!user){
        return res.status(400).json({error: 'No such user'})
    }

    res.status(200).json(user)
}

module.exports={
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
}