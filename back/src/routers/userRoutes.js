const express = require("express");
const userRouter = express.Router();

const user = require("../models/user");

//get all
userRouter.get("/users" , async (req,res)=>{
    try{
       const getUsers = await user.find({});
       console.log(getUsers);
       res.send(getUsers);
    }catch(err){
        res.send(err);
    }
})

module.exports = userRouter;