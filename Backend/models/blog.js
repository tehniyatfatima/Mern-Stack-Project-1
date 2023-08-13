const monsooge = require ('mongoose')

// create schema

const {schema} = monsooge

// create model

const blogschema = new schema ({
    title : {type: String , required: true},
    Content : {type: String , required: true},
    photopath : {type:String , required: false},
    Author : {type:String , required:true}
},
    {timestamps: true}

)

module.exports = monsooge.model('blog', blogschema , 'blogs')