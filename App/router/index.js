const express=require('express');
const router=express.Router();
const home_controller=require('../controller/home_controller.ejs');
console.log("router is working fine");

router.get('/',home_controller.home);





module.exports=router;
