const express =require("express");
const mongoose = require("mongoose");

const app = express(); 

const CustomerSchema = mongoose.Schema({
    

    cust_id:{
        type : Number,
        required : true,
        unique :false
    },
    name:{
        type : String,
        required : true,
        unique :false
    },
    age:{
        type : Number,
        required : true,
        unique :false
    },
    income:{
        type : Number,
        required : true,
        unique :false
    },
    email:{
        type : String,
        required : true,
        unique :false
    },
    contact:{
        type : String,
        required : true,
        unique :false
    },
    loan_id:{
        type : Number,
        required : true,
        unique :false
    },
    loan_type:{
        type : String,
        required : true,
        unique :false
    },
    interest:{
        type : Number,
        required : true,
        unique :false
    },
    installments:{
        type : Number,
        required : true,
        unique :false
    },
    time_period:{
        type : Number,
        required : true,
        unique :false
    },
    loan_amount:{
        type : Number,
        required : true,
        unique :false
    },
    loan_status:{
        type : String,
        required : true,
        unique :false
    },
    payment_due:{
        type : Number,
        required : true,
        unique :false
    },
    year:{
        type : Number,
        required : true,
        unique :false
    }
})

const Customer = new mongoose.model("customer", CustomerSchema);

module.exports =Customer;