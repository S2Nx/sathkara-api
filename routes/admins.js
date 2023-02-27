const express = require('express')
const { 
    createAdmin,
    getAdmins,
    getAdmin,
    deleteAdmin,
    updateAdmin
} = require('../controllers/AdminController')

const router = express.Router()

// Get all admins
router.get('/all',getAdmins)

// Get a single admin by email
router.get('/:aEmail',getAdmin)

// CREATE a new admin
router.post('/add',createAdmin)

// UPDATE a new admin by email
router.patch('/update/:aEmail',updateAdmin)

// DELETE a  admin by email
router.delete('/delete/:aEmail',deleteAdmin)

module.exports=router