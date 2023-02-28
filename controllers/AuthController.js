const User = require('../models/users.model.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const {createJWT} = require("../utils/auth.js");

//user signup
const signup = (req, res, next) => {
    let { uName, uEmail, uPassword, uPasswordconfirm} = req.body;

    let errors = [];
    if (uPassword != uPasswordconfirm) {
        errors.push({ uPasswordconfirm: "confirmation password mismatch" });
    }  if (errors.length > 0) {
        return res.status(422).json({ success: false, errors: errors });
    }

    User.findOne({uEmail: uEmail})
     .then(user=>{
        if(user){
           return res.status(422).json({ success: false, errors: [{ user: "email already exists" }] });
        }
        else {
            const user = new User({
             uName: uName,
             uEmail: uEmail,
             uPassword: uPassword,
            });
            bcrypt.genSalt(10, function(err, salt) { bcrypt.hash(uPassword, salt, function(err, hash) {
                if (err) throw err;
                user.uPassword = hash;
                user.save()
                    .then(response => {
                        res.status(200).json({
                            success: true,
                            result: response
                        })
                    })
                    .catch(err => {
                        res.status(500).json({
                            success: false,
                            errors: [{ error: err }]
                        });
                    });
           });
        });
       }
    }).catch(err =>{
        res.status(500).json({
            success: false,
            errors: [{ error: 'Something went wrong' }]
        });
    })
}

//user sign
const signin = (req, res) => {
    let { uEmail, uPassword } = req.body;

    User.findOne({ uEmail: uEmail })
        .then(user => {
            if (!user) {
                return res.status(404).json({
                success: false,
                errors: [{ user: "not found" }],
                });
            }
            else {
                bcrypt.compare(uPassword, user.uPassword).then(isMatch => {
                    if (!isMatch) {
                        return res.status(400).json({ success: false, errors: [{ uPassword:"incorrect" }] 
                    });
                    }
                    let access_token = createJWT(
                        user.uEmail,
                        user._id,
                        3600
                    );
                    jwt.verify(access_token, process.env.TOKEN_SECRET, (err,decoded) => {
                    if (err) {
                        res.status(500).json({ success: false, errors: err });
                    }
                    if (decoded) {
                        return res.status(200).json({
                        success: true,
                        token: access_token,
                        message: user
                        });
                    }
                });
            }).catch(err => {
                res.status(500).json({ success: false, errors: err });
            });
            }
  }).catch(err => {
     res.status(500).json({ success: false, errors: err });
  });
}

module.exports={
    signup,
    signin
}