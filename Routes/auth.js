const express=require('express');
const authontroller=require('../controller/auth');
const router=express.Router();
router.get('/',authontroller.getData);
router.post('/postData',authontroller.postData);
module.exports=router;