var studentmodel= require('./studentmodel');
var key='123456789trytrytry';
var encryptor=require('simple-encryptor')(key);
 
// module.exports.createStudentDbService= async (studentDetails)=>{
// //  return true;
//     return new Promise(function myFn(resolve,reject){
 
//         var studenData=new studentmodel();
 
//  studenData.firstname=studentDetails.firstname;
//  studenData.lastname=studentDetails.lastname;
//  studenData.email=studentDetails.email;
//  studenData.password=studentDetails.password;
 
//  var encrypted=encryptor.encrypt(studentDetails.password);
//  studenData.password=encrypted;

//  await studenData.save(function resultHandle(error,result){
// if(error)
// reject(false);
// else
// resolve(true);
// });
//  });
//  }

module.exports.createStudentDbService = async (studentDetails) => {
    try {
        var studentData = new studentmodel();

        studentData.firstname = studentDetails.firstname;
        studentData.lastname = studentDetails.lastname;
        studentData.email = studentDetails.email;

        // Encrypt password before saving
        var encrypted = encryptor.encrypt(studentDetails.password);
        studentData.password = encrypted;

        await studentData.save();
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

// module.exports.loginStudentDbService = async (studentDetails) => {
//     try {
//         const student = await studentModel.findOne({ email });
//         return student;
//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// };

// module.exports.loginStudentDbService= (studentDetails)=>{
//     return new Promise(function myFn(resolve,reject)
//     {
      
//         studentmodel.findOne({email:studentDetails.email},function getresult(errorvalue,result)
//         {
//             if(errorvalue)
//             {
//                 reject({status:false,msg:"Invalid Data"});
//             }
//             else{
//                 if(result!=undefined && result!=null)
//                 {
//                     var decrypted=encryptor.decrypt(result.password)
//                    if(decrypted==studentDetails.password){
//                     resolve({status:true,msg:"Student Validation Success"});
//                    }
//                    else
//                    {
//                     reject({status:false,msg:"Student validation failed"});
//                    }
//                 }
//                 else{
//                     reject({status:false,msg:"Invalid Student Details"});
//                 }
//             }

//         });
//     });
// }

module.exports.loginStudentDbService = (studentDetails) => {
    return new Promise((resolve, reject) => {
        studentmodel.findOne({ email: studentDetails.email })
            .then((result) => {
                if (result) {
                    var decrypted = encryptor.decrypt(result.password);
                    if (decrypted === studentDetails.password) {
                        resolve({ status: true, msg: "Student Validation Success" });
                    } else {
                        reject({ status: false, msg: "Student validation failed" });
                    }
                } else {
                    reject({ status: false, msg: "Invalid Student Details" });
                }
            })
            .catch((error) => {
                reject({ status: false, msg: "Invalid Data" });
            });
    });
};