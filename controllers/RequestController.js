const Request = require('../models/requests.model');

//get all request
const getRequests = async(req,res)=>{
    const request = await Request.find({});

    res.status(200).json(request); 
}

//get request by ID
const getrequest = async(req,res)=>{
    const {_id} = req.params

    const request = await Request.find({_id})

    if(!request){
        return res.status(404).json({error:'request not found'})
    }

    res.status(200).json(request)
}

//create new request
const createRequest = async(req,res)=>{
    const {pharmaceutical, rCategory, rDescription, rExpDate, rLocation, rIsComplete, rUrgency, rId } = req.body;

    //add document to db
    try{
        const request = await Request.create({pharmaceutical, rCategory, rDescription, rExpDate, rLocation, rIsComplete, rUrgency, rId})
        res.status(200).json(request)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//update request by ID
const updateRequest = async(req,res)=>{
    const {_id} = req.params

    const request = await Request.findOneAndUpdate({_id},{
        ...req.body
    })

    if (!request){
        return res.status(404).json({error:'No such request'})
    }

    res.status(200).json(request)
}

//delete request by ID
const deleterequest = async(req,res)=>{
    const {_id} = req.params

    const request = await Request.findOneAndDelete({_id})

    if (!request){
        return res.status(400).json({error: 'No such request'})
    }

    res.status(200).json(request)
}

module.exports={
    getRequests,
    getrequest,
    createRequest,
    updateRequest,
    deleterequest
}