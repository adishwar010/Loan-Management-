const express = require("express");
const userRouter = express.Router();

const user = require("../models/user");

//get all
userRouter.get("/users", async (req, res) => {
  try {
    const getUsers = await user.find({});
    console.log(getUsers);
    res.send(getUsers);
  } catch (err) {
    res.send(err);
  }
});

userRouter.post("/users", async (req, res) => {
  try {
    const addingUser = new user(req.body);
    console.log("req.body =", req.body);
    //    res.send(req.body);
    const insertUsers = await addingUser.save();
    res.send(insertUsers);
  } catch (err) {
    res.send(err);
  }
});

// userRouter.post("/login", (req, res) => {
//   let userData = req.body;

//   user.findOne({ email: userData.email }, (error, user) => {
//     if (error) {
//       console.log(error);
//     } else {
//       if (!user) {
//         res.status(401).send("Invalid email");
//       } else if (user.password !== userData.password) {
//         res.status(401).send("Invalid password");
//       } else {
//         res.status(200).send(user);
//       }
//     }
//   });
// });

module.exports = userRouter;
