
const mongoose = require ('mongoose')

const {schema} = mongoose;

const userschema = new schema ({
    name: {type: String , required:true},
    username : {type: String , required:true},
    email : {type: String, required: true},
    password : {type: String , required: true}
}, 
    {timestamps: true}
)

module.exports = mongoose.model('user', userschema,'users')