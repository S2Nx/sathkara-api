const express = require('express')
const { 
    createAdmin,
    getAdmins,
    getAdmin,
    deleteAdmin,
    updateAdmin
} = require('../controllers/AdminController')
const User = require('../models/admin.model')

const router = express.Router()

// Get all admins
router.get('/',getAdmins)

// Get a single admin
router.get('/:id',getAdmin)

// POST a new admin
router.post('/',createAdmin)

// DELETE a  admin
router.delete('/:id',deleteAdmin)

// UPDATE a new admin
router.patch('/:id',updateAdmin)

module.exports=router