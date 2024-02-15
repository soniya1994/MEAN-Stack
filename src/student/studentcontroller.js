var studentservice=require('./studentservice');
var createStudentControllerFn= async(req,res)=>
{
try
{
    console.log(req.body);
    var status= await studentservice.createStudentDbService(req.body);
    console.log(status);
if(status){
    // res.send({"status":true,"message":req.body.firstname});
    res.send({"status":true,"message":"record inserted"});
}
else
{
    res.send({"status":true,"message":"error during user creation"});
}
} 
catch(err)
{
    console.log(err);
} 
}

var loginStudentControllerFn= async(req,res)=>
{
    var result=null;
try
{
    //console.log(req.body);
    result= await studentservice.loginStudentDbService(req.body);
    //console.log(status);
if(result.status){
    // res.send({"status":true,"message":req.body.firstname});
    res.send({"status":true,"message":result.msg});
}
else
{
    res.send({"status":false,"message":result.msg});
}
} 
catch(error)
{
    console.log(error);
    res.send({"status":false,"message":error.msg});
} 
}

module.exports={createStudentControllerFn,loginStudentControllerFn};