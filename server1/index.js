import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const app = express()
const PORT = 5000;
app.use(cors())

app.get("/",(req,res)=>{
    res.send("this is working")
})

app.listen(PORT,()=>
    console.log(`Server is working at ${PORT}`)
)