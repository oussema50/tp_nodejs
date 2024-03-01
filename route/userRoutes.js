const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
//user register
router.post('/register',async(req,res)=>{
    const {userName,password} = req.body;
    try{
        const user = await User.findOne({userName});
        if(user){
            return res.status(400).json({
                errorMessage:'username is already exist',
            });
        }
        const newUser = new User()
        newUser.userName = userName;
        newUser.password = password;
        await newUser.save();
        res.status(200).json({
            successMessage:'success please signin'
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            errorMessage:'please try again later'
        })
    }
})

//user login
router.post('/login',async(req,res)=>{
    const {userName,password} = req.body;
    try{
        const user = await User.findOne({userName});
        if(!user){
            return res.status(400).json({
                errorMessage:'invalid credentials',
            });
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({
                errorMessage:'invalid credentials',
            });
        }
       
        const token = jwt.sign({ userId: user._id }, process.env.JWTPRIVATEKEY, {
            expiresIn: '1h',
            });
            return res.status(200).json({ token:token,userName:user.userName });

             
    }catch(err){
        res.status(500).json({
            errorMessage:'please try again later'
        });
    }
})

module.exports = router;
