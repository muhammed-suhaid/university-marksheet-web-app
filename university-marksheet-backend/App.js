const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express()

app.listen(4000,()=>{
    console.log("Server is Running <3")
})