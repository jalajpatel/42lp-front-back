const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone_no:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        
    },
    village:{
        type:String,
        required:true,
        },
    address:{
        type:String,
        required:true,
        },
    // pic:{
    //     type:File,
    //     required:true,
    //     },
    mosal:{
        type:String,
        required:true,
        },
    bday:{
        type:Date,
        required:true,
        },
    education:{
        type:String,
        required:true,
        },
    business:{
        type:String,
        required:true,
        },
    mrg:{
        type:String,
        required:true,
        },


},{timestamps:true})

const User=mongoose.model('User',userSchema)

module.exports=User