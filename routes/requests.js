const express = require('express')

const {
    getRequests,
    getrequest,
    getrequestbylocation,
    createRequest,
    updateRequest,
    deleterequest
} = require('../controllers/RequestController')

const router = express.Router()

//get all request
router.get('/all',getRequests)

//get request by ID
router.get('/:_id',getrequest)

//get request by Province & District
router.get('/location/:rProvince/',getrequestbylocation)
router.get('/location/:rProvince/:rDistrict',getrequestbylocation)

//create request
router.post('/add',createRequest)

//update request by ID
router.patch('/update/:_id',updateRequest)

//delete request by ID
router.delete('/delete/:_id',deleterequest)

module.exports=router;