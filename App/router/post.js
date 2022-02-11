const express=require('express');
const router=express.Router();
const passport=require('passport');
const postController=require('../controller/post_controller.js');
//security check

router.post('/create',passport.checkAuthentication,postController.create);
module.exports=router;