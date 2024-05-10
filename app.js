const express = require ('express')
const mongoose = require('mongoose');
const cors = require("cors");
const bcrypt=require('bcrypt');
const app = express()
const  collection = require("./models/Login")

app.use(express.urlencoded({extended: true}))
app.use (express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/Login-Signup-data?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})




app.post("/",async(req,res)=>{
    const{email,password}=req.body
  
  try{
  
    const check = await collection.findOne({email:email})
    const match=await bcrypt.compare(password,check.password);
    if(check){
        res.json("exist")
    }
    else if(!match){
        res.json("notok")
    }
    
    else{
        res.json("notexist")
        
    }
  
  
  }catch(e){
  
    res.json("notexist")
  
  
  }
  
  })
  
  
  app.post("/signup",async(req,res)=>{
      const{name,email,password}=req.body
  
      const data = {
          name:name,
          email:email,
          password:password
      }
  
    try{
  
      const check = await collection.findOne({email:email})
      if(check){
          res.json("exist")
      }
      else{
          res.json("notexist")
          await collection.insertMany([data])
      }
  
  
    }catch(e){
  
      res.json("notexist")
  
  
    }
  
  })


app.listen(8000,'127.0.0.1',()=>{
    console.log("listen to port 8000")

})
