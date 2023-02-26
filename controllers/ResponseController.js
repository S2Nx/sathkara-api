const Response = require('../models/response.model')

//all responses
const getResponses = async(req,res)=>{
    const response =await Response.find({})

    res.status(200).json(response)
}


//get single response by uId and rId
const getResponse = async(req,res)=>{
    const {uId,rId} = req.params

    const response = await Response.find({uId,rId})

    if(!response){
        return res.status(404).json({error:'response not found'})
    }

    res.status(200).json(response)
}

//create new response
const createResponse = async(req,res)=>{
    const {uId, rId, responseText} = req.body;

    // add new doc to db
    try{
        const response = await Response.create({uId, rId, responseText})
        res.status(200).json(response)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


//update response by uId and rId
const updateResponse = async(req,res)=>{
    const {uId, rId} = req.params

    const response = await Response.findOneAndUpdate({uId, rId},{
        ...req.body
    })

    if (!response){
        return res.status(404).json({error:'No such response'})
    }

    res.status(200).json(response)
}

//delete response by uId and rId
const deleteResponse = async(req,res)=>{
    const {uId, rId} = req.params

    const response = await Response.findOneAndDelete({uId, rId})

    if (!response){
        return res.status(400).json({error: 'No such response'})
    }

    res.status(200).json(response)
}

module.exports={
    getResponses,
    getResponse,
    createResponse,
    updateResponse,
    deleteResponse
}
