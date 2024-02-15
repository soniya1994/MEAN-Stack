var mongoose = require('mongoose');
var schema=mongoose.Schema;

var studenSchema=new schema({
  firstname:{
    type:String,
    required:true
  },  
  lastname:{
    type:String,
    required:true
  },
  email:{
        type:String,
        required:true
    },
  password:{
        type:String,
        required:true
    }
  });

  module.exports=mongoose.model('student',studenSchema);

