const mongoose=require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const express=require("express");
const User=require("./moduls/user");

const app=express();
const PORT=5000;


//using cors for the bring the data from the database and the type is json
app.use(cors());
app.use(express.json());


//to make connection with mongodb
mongoose.connect("mongodb://127.0.0.1:27017/studentdata",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


//registration api
app.post("/register", async(req,res)=>{
  try{
   const {username,email,password}=req.body;
   const existemail=await User.findOne({email});
   if(existemail) return res.status(404).json({error:"this Email is already access"});

   const hashpassword=await bcrypt.hash(password,10);
   await User.create({username,email,password:hashpassword});

   res.json(201).json({message:"User register successfully"});

  }catch(error){
   res.status(500).json({error: "Server error"});
  }
});

