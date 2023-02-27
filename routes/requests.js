const express = require('express')

const {
    getRequests,
    getrequest,
    createRequest,
    updateRequest,
    deleterequest
} = require('../controllers/RequestController')

const router = express.Router()

//get all request
router.get('/all',getRequests)

//get request by ID
router.get('/:_id',getrequest)

//create request
router.post('/add',createRequest)

//update request by ID
router.patch('/update/:_id',updateRequest)

//delete request by ID
router.delete('/delete/:_id',deleterequest)

module.exports=router;