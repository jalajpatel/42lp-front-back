const User= require("../models/user.model")
 const bcrypt=require('bcrypt');
const erroraHandler = require("../utils/error");
const jwt=require('jsonwebtoken')



const signup=async(req,res,next)=>{
const {name,password,phone_no,village,address,mosal,bday,education,business,mrg}=req.body;
const hashedPassword=bcrypt.hashSync(password,10);
const newUser=new User({name,password:hashedPassword,phone_no,village,address,mosal,bday,education,business,mrg
})

try{
await newUser.save()
res.status(201).json("User Created Successfully")
}catch(error){
   next(error);
}
}


module.exports=signup
