const express=require('express')

const router=express.Router();

router.post("/signup",require('../controllers/signUp'))
router.post("/signin",require('../controllers/signIn'))
module.exports=router