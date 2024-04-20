const User= require("../models/user.model")
 const bcrypt=require('bcrypt');
const erroraHandler = require("../utils/error");
const jwt=require('jsonwebtoken')
const signin=async(req,res,next)=>{
   const {phone_no,password}=req.body;
   console.log('password and phone number')
   console.log(req.body);
   try {
      const validUser=await User.findOne({phone_no});
      if(!validUser){
         return next(erroraHandler(404,"User not find!"));
      }
      const validPassword=bcrypt.compareSync(password,validUser.password);
      if(!validPassword) return next(erroraHandler(401,'Wrong credential!'));
      const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET)
      console.log(process.env.JWT_SECRET);
      const {password:pass,...rest}=validUser._doc;
      res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest)

   } catch (error) {
      next(error);
   }
}
module.exports=signin