
const mongoose=require('mongoose')

const db_connection=mongoose.connect('mongodb://127.0.0.1:27017/nxm201')

module.exports={db_connection};