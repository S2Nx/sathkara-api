//importing modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//server port & DB uri
const port = process.env.port || 5000;
const uri = process.env.ATLAS_URI;

//express api
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//import & use routes
const adminRoutes = require('./routes/admins.js');
const userRoutes = require('./routes/users.js');
const requestRoutes = require('./routes/requests');
const responsesRoutes = require('./routes/responses');
const authRoutes = require('./routes/auth');

app.use('/admins',adminRoutes);
app.use('/users',userRoutes);
app.use('/users', authRoutes);
app.use('/requests',requestRoutes);
app.use('/responses',responsesRoutes);

//connect to DB
mongoose.connect(uri,{useNewUrlParser: true})
    .then(()=>{
        app.listen(port, ()=>{
            console.log('Connected to DB & server running on port:'+port);
        })
    });