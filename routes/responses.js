const express = require('express')

const {
    getResponses,
    getResponse,
    createResponse,
    updateResponse,
    deleteResponse
} = require('../controllers/ResponseController')

const router = express.Router()

//get all repsonses
router.get('/all',getResponses)

//get response by uId and rId
router.get('/uId/rId',getResponse)

//create response
router.post('/add',createResponse)

//update response by uId and rId
router.patch('/update/uId/rId',updateResponse)

//delete response by uId and rId
router.delete('/delete/uId/rId',deleteResponse)

module.exports=router;