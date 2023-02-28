const express = require('express');
const { 
    signin,
    signup
} = require('../controllers/AuthController');

const router = express.Router()

//signup & signin
router.post('/signup',signup)
router.post('/signin',signin)

module.exports=router;