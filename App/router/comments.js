const express=require('express');
const router=express.Router();
const passport=require('passport');
const commentsController=require('../controller/comments_controller');
//console.log("Hello");
router.post('/create',passport.checkAuthentication,commentsController.create);
module.exports=router;