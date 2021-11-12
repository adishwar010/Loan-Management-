const express = require("express");
const router = require("./routers/CustRoutes");
const userRouter = require("./routers/userRoutes");
require("../src/db/conn");
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.port || 6500;

app.use(express.json());
app.get("/",async(req,res)=>{
    res.send("HELLO WORLD");
})

app.use(router);
app.use(userRouter);





app.listen(port,()=>{
    console.log(`listening at http://localhost:${port}`)
})