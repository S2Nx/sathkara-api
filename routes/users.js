const express = require('express');
const { 
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
} = require('../controllers/UserController.js');

const router = express.Router()

// Get all users
router.get('/all',getUsers)

// Get a single user by ID
router.get('/:_id',getUser)

// CREATE a new user
router.post('/add',createUser)

// UPDATE a user by ID
router.patch('/update/:_id',updateUser);

// DELETE a user by IT
router.delete('/delete/:_id',deleteUser)

module.exports=router;