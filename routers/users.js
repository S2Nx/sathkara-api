const express = require('express')
const { 
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
} = require('../controllers/UserController')
const User = require('../models/users.model')

const router = express.Router()

// Get all users
router.get('/',getUsers)

// Get a single user
router.get('/:id',getUser)

// POST a new user
router.post('/',createUser)

// DELETE a  user
router.delete('/:id',deleteUser)

// UPDATE a new user
router.patch('/:id',updateUser)

module.exports=router