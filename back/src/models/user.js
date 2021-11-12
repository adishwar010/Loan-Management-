const express = require("express");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type : String,
        required : true
    },
    password:{
        type: String,
        requires : true
    }
});

const user = mongoose.model("user",userSchema);

module.exports = user;