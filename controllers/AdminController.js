const Admin = require('../models/admin.model.js')

//all admin
const getAdmins = async(req,res)=>{
    const admin =await Admin.find({})

    res.status(200).json(admin)
}


//get single admin by email
const getAdmin = async(req,res)=>{
    const {aEmail} = req.params

    const admin = await Admin.find({aEmail})

    if(!admin){
        return res.status(404).json({error:'Admin not found'})
    }

    res.status(200).json(admin)
}

//create new admin
const createAdmin = async(req,res)=>{
    const {aName, aEmail, aPassword} = req.body;

    // add new doc to db
    try{
        const admin = await Admin.create({aName, aEmail, aPassword})
        res.status(200).json(admin)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


//update admin by email
const updateAdmin = async(req,res)=>{
    const {aEmail} = req.params

    const admin = await Admin.findOneAndUpdate({aEmail},{
        ...req.body
    })

    if (!admin){
        return res.status(404).json({error:'No such admin'})
    }

    res.status(200).json(admin)
}

//delete admin by email
const deleteAdmin = async(req,res)=>{
    const {aEmail} = req.params

    const admin = await Admin.findOneAndDelete({aEmail})

    if (!admin){
        return res.status(400).json({error: 'No such admin'})
    }

    res.status(200).json(admin)
}

module.exports={
    getAdmins,
    getAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin
}
