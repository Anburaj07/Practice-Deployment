const express=require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");

const app=express();
app.use(express.json())

app.use("/users",userRouter)

app.get("/",(req,res)=>{
    res.status(200).json({msg:"Base point"})
})

app.listen(process.env.PORT,async(req,res)=>{
    try {
        await connection
        console.log("Connected to DB")
        console.log(`Server ir Running at ${process.env.PORT}`)
    } catch (error) {
        console.log("Error while connecting to DB")
        console.log('error:', error)
    }
})