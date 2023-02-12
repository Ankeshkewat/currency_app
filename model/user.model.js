const mongoose=require('mongoose');

const UserModel=mongoose.model('user_details',mongoose.Schema({
    curr:String,
    price:String,
    stock:Number
     
 }))

module.exports={UserModel}