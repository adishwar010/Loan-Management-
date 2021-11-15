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

userRouter.post("/signin", async (req, res) => {
  try {
    const getlogin = await user.findOne({ username: req.body.username });
    if (getlogin.password == req.body.password) {
    }
    console.log(getlogin);
    res.send(getlogin);
  } catch (err) {
    res.send(err);
  }
});

module.exports = userRouter;
