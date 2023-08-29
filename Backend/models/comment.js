
const mongoose = require ('mongoose');
const blog = require('./blog');

const {Schema} = mongoose;

const commentschema = new Schema ({
    content: {type: String , required:true},
    blog : {type: mongoose.SchemaType.ObjectId , ref: 'blogs'},
    Author : {type: mongoose.SchemaType.ObjectId , ref: 'users'}
    
}, 
    {timestamps: true}
)

module.exports = mongoose.model('comment', commentschema,'comments')