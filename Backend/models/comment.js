
const mongoose = require ('mongoose');
const blog = require('./blog');

const {schema} = mongoose;

const commentschema = new schema ({
    content: {type: String , required:true},
    blog : {type: mongoose.SchemaType.ObjectId , ref: 'blogs'},
    Author : {type: mongoose.SchemaType.ObjectId , ref: 'users'}
    
}, 
    {timestamps: true}
)

module.exports = mongoose.model('comment', commentschema,'comments')