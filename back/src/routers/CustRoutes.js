const express = require("express");
const router = new express.Router();

const Customer = require("../models/Customer");
const Object_id = require("mongoose").Types.ObjectId;

// const app =express();

//create
router.post("/customer" , async (req,res)=>{
    try{
       const addingCustomerRecords = new  Customer(req.body);
       console.log("req.body =",req.body);
    //    res.send(req.body);
       const insertCustomers=await addingCustomerRecords.save();
       res.send(insertCustomers);
    }catch(err){
        res.send(err);
    }
})

//get single and update
router.put("/customer/:id" , async(req,res)=>{
    try{
        
        const id = req.params.id;
        // console.log(id)
        const updateCustomer = await Customer.findByIdAndUpdate({_id :id} , req.body , {
            new : true,
        });
        res.send(updateCustomer);
        // console.log("res",res);
        
    }catch(err){
        res.send(err);
    }
})


//get all
router.get("/customer" , async (req,res)=>{
    try{
       const getCustomers = await Customer.find({}).sort({"cust_id":1});
       console.log(getCustomers);
       res.send(getCustomers);
    }catch(err){
        res.send(err);
    }
})
//get single
router.get("/customer/:id" , async(req,res)=>{
    try{
        const id = req.params.id;
        const getCustomer = await Customer.findById({_id : id});
        res.send(getCustomer);

    }catch(err){
        res.send(err);
    }
})


// router.patch('/update',(req,res,next)=>{
//     // if(err)
//     // res.status(500).json({errmsg:err});
//     Customer.findById(req.body._id,(err,customer)=>{
//         if(err)
//          res.status(500).json({errmsg:err});
//          customer.cust_id= req.body.cust_id;
//          customer.name= req.body.name;
//          customer.age= req.body.age;
//          customer.income= req.body.income;
//          customer.email= req.body.email;
//          customer.contact= req.body.contact;
//          customer.loan_id= req.body.loan_id;
//          customer.loan_type= req.loan_type;
//          customer.interest= req.body.interest;
//          customer.installments= req.body.installments;
//          customer.time_period= req.body.time_period;
//          customer.loan_status= req.body.loan_status;
//          customer.payment_due= req.body.payment_due;
//          customer.year= req.body.year;
//          customer.save((err,customer)=>{
//              res.status(500).json({errmsg : err});
//              res.status(200).json({msg : customer});
//          })
//     })

// })

//delete
router.delete("/customer/:id" , async(req,res)=>{
    try{
        const id = req.params.id;
        const deleteCustomer = await Customer.findByIdAndDelete({_id :id});
        res.send(deleteCustomer);
    }catch(err){
        res.send(err);
    }
})

module.exports = router;