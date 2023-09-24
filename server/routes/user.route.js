const express=require("express")
const { UserModel } = require("../model/user.model")
const userRouter=express.Router()
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")

userRouter.post("/register",async(req,res)=>{
    const {username,email,pass}=req.body;
    try {
        bcrypt.hash(pass,7,async(err,hash)=>{
            const user=new UserModel({username,email,pass:hash})
            await user.save()
            res.status(200).send({"msg":"The new user has been registered",user})
        })
    } catch (error) {
        console.log('error:', error)
        res.status(400).send({"error":error})
    }
})

module.exports={userRouter}