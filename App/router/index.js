const express=require('express');
const router=express.Router();
const passport=require('passport');
const home_controller=require('../controller/home_controller.ejs');
const login_controller=require('../controller/login_controller.ejs');
console.log("router is working fine");

router.get('/',home_controller.home);
router.get('/sign_up',login_controller.sign_up);
router.get('/sign_out',login_controller.sign_out);
router.get('/sign_in',login_controller.sign_in);
router.get('/profile',passport.checkAuthentication,login_controller.profile);
router.post('/create_profile',login_controller.data_collect);
//use passport as middleware to authenticate
router.post('/create_session',passport.authenticate('local',{failureRedirect:'/sign_in'}),login_controller.createSession);





module.exports=router;
