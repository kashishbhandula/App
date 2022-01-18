const express=require('express');
const router=express.Router();
const home_controller=require('../controller/home_controller.ejs');
const login_controller=require('../controller/login_controller.ejs');
console.log("router is working fine");

router.get('/',home_controller.home);
router.get('/sign_up',login_controller.sign_up);
router.post('/create_profile',login_controller.data_collect);





module.exports=router;
