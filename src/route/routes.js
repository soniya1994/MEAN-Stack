var express = require('express')
var studentcontroller = require('../student/studentcontroller');
const router=express.Router();

router.route('/student/login').post(studentcontroller.loginStudentControllerFn);
router.route('/student/create').post(studentcontroller.createStudentControllerFn);
//router.post('/student/create', studentcontroller.createStudentControllerFn);

module.exports=router;